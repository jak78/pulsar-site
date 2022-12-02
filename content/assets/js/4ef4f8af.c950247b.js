"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[57737],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),m=n,f=s["".concat(o,".").concat(m)]||s[m]||h[m]||l;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35224:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const l={id:"client-cpp-2.8.2",title:"Client CPP 2.8.2",sidebar_label:"Client CPP 2.8.2"},i=void 0,p={unversionedId:"versioned/client-cpp-2.8.2",id:"versioned/client-cpp-2.8.2",title:"Client CPP 2.8.2",description:"- Fix libcurl miss auth header when broker return 307 #13112",source:"@site/release-notes/versioned/client-cpp-2.8.2.md",sourceDirName:"versioned",slug:"/versioned/client-cpp-2.8.2",permalink:"/release-notes/versioned/client-cpp-2.8.2",draft:!1,tags:[],version:"current",frontMatter:{id:"client-cpp-2.8.2",title:"Client CPP 2.8.2",sidebar_label:"Client CPP 2.8.2"}},o={},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fix libcurl miss auth header when broker return 307 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13112"},"#13112")),(0,n.kt)("li",{parentName:"ul"},"Define and expose PULSAR_VERSION macro ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12769"},"#12769")),(0,n.kt)("li",{parentName:"ul"},"Fix request timeout for GetLastMessageId doesn't work ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12586"},"#12586")),(0,n.kt)("li",{parentName:"ul"},"Fix connection read error logging ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12492"},"#12492")),(0,n.kt)("li",{parentName:"ul"},"Delay ClientCredentialFlow::initialize to the first authenticate call ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12372"},"#12372")),(0,n.kt)("li",{parentName:"ul"},"Use URL encoded content type for OAuth 2.0 authentication ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12341"},"#12341")),(0,n.kt)("li",{parentName:"ul"},"Handle OAuth 2.0 exceptional cases gracefully ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12335"},"#12335")),(0,n.kt)("li",{parentName:"ul"},"Support configuring optional scope field for OAuth2 authentication ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12305"},"#12305")),(0,n.kt)("li",{parentName:"ul"},"Fix the issue of attempting to connect to multiple IP addresses ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11958"},"#11958")),(0,n.kt)("li",{parentName:"ul"},"Handle error when shutting down client after forks ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11954"},"#11954")),(0,n.kt)("li",{parentName:"ul"},"Move all C symbols into C++ pulsar namespace ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11919"},"#11919")),(0,n.kt)("li",{parentName:"ul"},"Make some cleanup methods thread safe ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11762"},"#11762")),(0,n.kt)("li",{parentName:"ul"},"Turn on more compiler warnings and enforce warnings as errors ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11668"},"#11668")),(0,n.kt)("li",{parentName:"ul"},"Fix use-after-free and constructor bugs in UnAckedMessageTrackerEnabled ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11630"},"#11630")),(0,n.kt)("li",{parentName:"ul"},"Allow partitioned producers to start lazily ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11570"},"#11570"))))}s.isMDXComponent=!0}}]);