"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[88175],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(a),h=l,f=s["".concat(o,".").concat(h)]||s[h]||m[h]||n;return a?r.createElement(f,p(p({ref:t},c),{},{components:a})):r.createElement(f,p({ref:t},c))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,p=new Array(n);p[0]=h;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[s]="string"==typeof e?e:l,p[1]=i;for(var u=2;u<n;u++)p[u]=a[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},13613:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var r=a(87462),l=(a(67294),a(3905));const n={id:"client-cpp-2.8.0",title:"Client CPP 2.8.0",sidebar_label:"Client CPP 2.8.0"},p=void 0,i={unversionedId:"versioned/client-cpp-2.8.0",id:"versioned/client-cpp-2.8.0",title:"Client CPP 2.8.0",description:"- Fix dangling reference bug in getRandomName #8596",source:"@site/release-notes/versioned/client-cpp-2.8.0.md",sourceDirName:"versioned",slug:"/versioned/client-cpp-2.8.0",permalink:"/release-notes/versioned/client-cpp-2.8.0",draft:!1,tags:[],version:"current",frontMatter:{id:"client-cpp-2.8.0",title:"Client CPP 2.8.0",sidebar_label:"Client CPP 2.8.0"}},o={},u=[],c={toc:u};function s(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fix dangling reference bug in getRandomName ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8596"},"#8596")),(0,l.kt)("li",{parentName:"ul"},"Optimize batch message buffer allocation ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8749"},"#8749")),(0,l.kt)("li",{parentName:"ul"},"Make pool connections configurable in perf tools ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8913"},"#8913")),(0,l.kt)("li",{parentName:"ul"},"Support setting listener name ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9119"},"#9119")),(0,l.kt)("li",{parentName:"ul"},"Fix batch message handling of the UnAckedMessageTracker ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9170"},"#9170")),(0,l.kt)("li",{parentName:"ul"},"Fix ServerError is not converted to string in log ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9277"},"#9277")),(0,l.kt)("li",{parentName:"ul"},"Remove Boost::System runtime dependency ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9498"},"#9498")),(0,l.kt)("li",{parentName:"ul"},"Removed usages of boost::regex ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9533"},"#9533")),(0,l.kt)("li",{parentName:"ul"},"Account for different variables names on different CMake versions ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9559"},"#9559")),(0,l.kt)("li",{parentName:"ul"},"Allow to disable static or dynamic lib at build time ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9570"},"#9570")),(0,l.kt)("li",{parentName:"ul"},"Avoid multiple compilations of same source files ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9675"},"#9675")),(0,l.kt)("li",{parentName:"ul"},"Support configure debug level logs simply ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10031"},"#10031")),(0,l.kt)("li",{parentName:"ul"},"Add /opt/homebrew/ as a possible path for OpenSSL on Mac ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10141"},"#10141")),(0,l.kt)("li",{parentName:"ul"},"Fix race condition in MemoryLimitController ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10142"},"#10142")),(0,l.kt)("li",{parentName:"ul"},"Fix releasing semaphore and memory quota after send timeout ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10144"},"#10144")),(0,l.kt)("li",{parentName:"ul"},"Allow configuring memory limit from C API ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10145"},"#10145")),(0,l.kt)("li",{parentName:"ul"},"Fix use-after-free undefined behavior due to object lifetime problem ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10220"},"#10220")),(0,l.kt)("li",{parentName:"ul"},"Support enable replicate subscription ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10243"},"#10243")),(0,l.kt)("li",{parentName:"ul"},"Fix C++ client cannot be built with Boost <=1.53 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10307"},"#10307")),(0,l.kt)("li",{parentName:"ul"},"Support check connect state ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10349"},"#10349")),(0,l.kt)("li",{parentName:"ul"},"Avoid sending flow requests with zero permits ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10506"},"#10506")),(0,l.kt)("li",{parentName:"ul"},"Add single file logger factory ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10712"},"#10712")),(0,l.kt)("li",{parentName:"ul"},"Reduce redeliverMessages when message listener is enabled ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10726"},"#10726"))))}s.isMDXComponent=!0}}]);