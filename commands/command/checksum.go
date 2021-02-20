package command

import (
	"crypto/sha1" // #nosec G505
	"fmt"
	"os"
	"path/filepath"
	"sort"
)

var checksumCache map[string][]byte = make(map[string][]byte)

// files can have either absolute or relative path:
// - in case of absolute path we just read that file
// - in case of relative file we trying to read file in work dir
//
// return sorted list of files read by glob patterns
func readFilesFromPatterns(workDir string, patterns []string) ([]string, error) {
	var files []string

	for _, pattern := range patterns {
		absPatternPath := pattern
		if !filepath.IsAbs(pattern) {
			absPatternPath = filepath.Join(workDir, pattern)
		}

		matches, err := filepath.Glob(absPatternPath)
		if err != nil {
			return []string{}, err
		}

		files = append(files, matches...)
	}
	// sort files list
	sort.Strings(files)

	return files, nil
}

// calculate sha1 hash from files content and return hex digest
// It calculates sha1 for each file, cache checksum for each file.
// Resulting checksum is sha1 from all files sha1's
func calculateChecksum(workDir string, patterns []string) (string, error) {
	// read filenames from patterns
	files, err := readFilesFromPatterns(workDir, patterns)
	if err != nil {
		return "", err
	}

	hasher := sha1.New()     // #nosec G401
	fileHasher := sha1.New() // #nosec G401

	for _, filename := range files {
		if cachedSum, found := checksumCache[filename]; found {
			_, err = hasher.Write(cachedSum)
			if err != nil {
				return "", err
			}
		} else {
			data, err := os.ReadFile(filename)
			if err != nil {
				return "", err
			}
			cachedSum = fileHasher.Sum(data)
			checksumCache[filename] = cachedSum
			_, err = hasher.Write(cachedSum)
			if err != nil {
				return "", err
			}
			fileHasher.Reset()
		}
	}

	checksum := hasher.Sum(nil)

	return fmt.Sprintf("%x", checksum), nil
}

func parseAndValidateChecksum(checksum interface{}, newCmd *Command) error {
	patternsList, okList := checksum.([]interface{})
	patternsMap, okMap := checksum.(map[interface{}]interface{})
	checksumSource := make(map[string][]string)

	switch {
	case okList:
		for _, value := range patternsList {
			if value, ok := value.(string); ok {
				checksumSource[""] = append(checksumSource[""], value)
			} else {
				return newParseCommandError(
					"value of checksum list must be a string",
					newCmd.Name,
					CHECKSUM,
					"",
				)
			}
		}
	case okMap:
		for key, patterns := range patternsMap {
			key, ok := key.(string)
			if !ok {
				return newParseCommandError(
					"key of checksum list must be a string",
					newCmd.Name,
					CHECKSUM,
					"",
				)
			}

			patterns, ok := patterns.([]interface{})

			if !ok {
				return newParseCommandError(
					"value of checksum map must be a list",
					newCmd.Name,
					CHECKSUM,
					"",
				)
			}

			for _, value := range patterns {
				if value, ok := value.(string); ok {
					checksumSource[key] = append(checksumSource[key], value)
				} else {
					return newParseCommandError(
						"value of checksum list must be a string",
						newCmd.Name,
						CHECKSUM,
						"",
					)
				}
			}
		}
	default:
		return newParseCommandError(
			"must be a list of string (files of glob patterns) or a map of lists of string",
			newCmd.Name,
			CHECKSUM,
			"",
		)
	}

	newCmd.checksumSource = checksumSource
	newCmd.hasChecksum = true

	return nil
}

// calculate checksum from files listed in command.checksum
func calculateChecksumFromSource(workDir string, newCmd *Command) error {
	newCmd.ChecksumMap = make(map[string]string)
	// if checksum is a list of patterns
	if patterns, ok := newCmd.checksumSource[""]; ok {
		calcChecksum, err := calculateChecksum(workDir, patterns)
		if err != nil {
			return fmt.Errorf("failed to calculate checksum: %s", err)
		}

		newCmd.Checksum = calcChecksum

		return nil
	}

	// if checksum is a map of key: patterns
	hasher := sha1.New() // #nosec G401

	keys := getChecksumsKeys(newCmd.checksumSource)
	// sort keys to make checksum deterministic
	sort.Strings(keys)

	for _, key := range keys {
		patterns := newCmd.checksumSource[key]

		calcChecksum, err := calculateChecksum(workDir, patterns)
		if err != nil {
			return fmt.Errorf("failed to calculate checksum: %s", err)
		}

		newCmd.ChecksumMap[key] = calcChecksum

		_, err = hasher.Write([]byte(calcChecksum))
		if err != nil {
			return err
		}
	}

	newCmd.Checksum = fmt.Sprintf("%x", hasher.Sum(nil))

	return nil
}

func getChecksumsKeys(mapping map[string][]string) []string {
	keys := make([]string, len(mapping))
	idx := 0

	for key := range mapping {
		keys[idx] = key
		idx++
	}

	return keys
}
