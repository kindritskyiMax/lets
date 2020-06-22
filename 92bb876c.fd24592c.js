(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),l=(n(0),n(133)),o={id:"getting_started",title:"Getting started with Lets",sidebar_label:"Getting started with Lets"},i={id:"getting_started",title:"Getting started with Lets",description:"If you already have `lets.yaml` then just go to that directory and run `lets` to see all available commands.",source:"@site/docs/getting_started.md",permalink:"/docs/getting_started",editUrl:"https://github.com/lets-cli/lets/edit/master/docs/docs/getting_started.md",sidebar_label:"Getting started with Lets",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Shell completion",permalink:"/docs/completion"}},c=[{value:"Config lookup",id:"config-lookup",children:[]},{value:"Creating new config",id:"creating-new-config",children:[]},{value:"Lets directory",id:"lets-directory",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"If you already have ",Object(l.b)("inlineCode",{parentName:"p"},"lets.yaml")," then just go to that directory and run ",Object(l.b)("inlineCode",{parentName:"p"},"lets")," to see all available commands."),Object(l.b)("p",null,"If you are starting from scratch and want to create a new ",Object(l.b)("inlineCode",{parentName:"p"},"lets.yaml"),", please, take a look at ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"#creating-new-config"}),"Creating new config")," section."),Object(l.b)("h3",{id:"config-lookup"},"Config lookup"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"lets")," will be looking for a config starting from where you call ",Object(l.b)("inlineCode",{parentName:"p"},"lets")," and up to the ",Object(l.b)("inlineCode",{parentName:"p"},"/"),"."),Object(l.b)("p",null,"For example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd /home/me\ntouch lets.yaml\n\nmkdir ./project\ncd ./project\n\nlets # it will use lets.yaml at /home/me/lets.yaml\n\ntouch lets.yaml\n\nlets # it will use lets.yaml right here (at /home/me/project/lets.yaml)\n")),Object(l.b)("h2",{id:"creating-new-config"},"Creating new config"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Create ",Object(l.b)("inlineCode",{parentName:"li"},"lets.yaml")," file in your project directory"),Object(l.b)("li",{parentName:"ol"},"Add commands to ",Object(l.b)("inlineCode",{parentName:"li"},"lets.yaml")," config. ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/config"}),"Config reference"))),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'shell: /bin/sh\n\ncommands:\n    echo:\n      description: Echo text\n      cmd: |\n        echo "Hello"\n    \n    run:\n      description: Run some command\n      options: |\n        Usage: lets run [--debug] [--level=<level>]\n        \n        Options:\n          --debug, -d     Run with debug\n          --level=<level> Log level\n      cmd: |\n        env\n')),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Run commands")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"lets echo # will print \n# Hello\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"lets run --debug --level=info # will print\n# LETSOPT_DEBUG=true\n# LETSOPT_LEVEL=info\n# LETSCLI_DEBUG=--debug\n# LETSCLI_LEVEL=--level info\n\n")),Object(l.b)("h2",{id:"lets-directory"},"Lets directory"),Object(l.b)("p",null,"At first run ",Object(l.b)("inlineCode",{parentName:"p"},"lets")," will create ",Object(l.b)("inlineCode",{parentName:"p"},".lets")," directory in the current directory."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"lets")," uses ",Object(l.b)("inlineCode",{parentName:"p"},".lets")," to store some specific data such as checksums, etc."),Object(l.b)("p",null,"It's better to add ",Object(l.b)("inlineCode",{parentName:"p"},".lets")," to your ",Object(l.b)("inlineCode",{parentName:"p"},".gitignore")," end exclude it in your favorite ide."))}b.isMDXComponent=!0},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=r,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||l;return n?a.a.createElement(m,i({ref:t},s,{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);