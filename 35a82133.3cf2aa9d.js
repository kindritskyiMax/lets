(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{110:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),i=(t(0),t(133)),l={id:"env",title:"Lets environment"},o={id:"env",title:"Lets environment",description:"### Default environment variables",source:"@site/docs/env.md",permalink:"/docs/env",editUrl:"https://github.com/lets-cli/lets/edit/master/docs/docs/env.md",sidebar:"someSidebar",previous:{title:"Config reference",permalink:"/docs/config"},next:{title:"Examples",permalink:"/docs/examples"}},c=[{value:"Default environment variables",id:"default-environment-variables",children:[]},{value:"Override command env with -E flag",id:"override-command-env-with--e-flag",children:[]}],b={rightToc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"default-environment-variables"},"Default environment variables"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"lets")," has builtin environ variables."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"LETS_DEBUG")," - enable debug messages"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"LETS_CONFIG")," - changes default ",Object(i.b)("inlineCode",{parentName:"li"},"lets.yaml")," file path (e.g. LETS_CONFIG=lets.my.yaml)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"LETS_CONFIG_DIR")," - changes path to dir where ",Object(i.b)("inlineCode",{parentName:"li"},"lets.yaml")," file placed"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"LETS_NO_COLOR_OUTPUT")," - disables colored output")),Object(i.b)("h3",{id:"override-command-env-with--e-flag"},"Override command env with -E flag"),Object(i.b)("p",null,"You can override environment for command with ",Object(i.b)("inlineCode",{parentName:"p"},"-E")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"shell: bash\n\ncommand:\n  say:\n    env:\n      NAME: Rick\n    cmd: echo Hello ${NAME}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"lets say"))," - prints ",Object(i.b)("inlineCode",{parentName:"p"},"Hello Rick")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"lets -E NAME=Morty say"))," - prints ",Object(i.b)("inlineCode",{parentName:"p"},"Hello Morty")),Object(i.b)("p",null,"Alternatively:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"lets --env NAME=Morty say"))," - prints ",Object(i.b)("inlineCode",{parentName:"p"},"Hello Morty")))}p.isMDXComponent=!0},133:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),p=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},s=function(e){var n=p(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(t),u=r,d=s["".concat(l,".").concat(u)]||s[u]||m[u]||i;return t?a.a.createElement(d,o({ref:n},b,{components:t})):a.a.createElement(d,o({ref:n},b))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<i;b++)l[b]=t[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);