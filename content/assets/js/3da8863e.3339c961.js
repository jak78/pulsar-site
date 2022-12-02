"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[91305],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,b=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97165:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={id:"client-websocket-2.8.0",title:"Client Websocket 2.8.0",sidebar_label:"Client Websocket 2.8.0"},l=void 0,i={unversionedId:"versioned/client-websocket-2.8.0",id:"versioned/client-websocket-2.8.0",title:"Client Websocket 2.8.0",description:"- Negative acknowledge support #8249",source:"@site/release-notes/versioned/client-websocket-2.8.0.md",sourceDirName:"versioned",slug:"/versioned/client-websocket-2.8.0",permalink:"/release-notes/versioned/client-websocket-2.8.0",draft:!1,tags:[],version:"current",frontMatter:{id:"client-websocket-2.8.0",title:"Client Websocket 2.8.0",sidebar_label:"Client Websocket 2.8.0"}},c={},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Negative acknowledge support ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8249"},"#8249")),(0,o.kt)("li",{parentName:"ul"},"Support deliverAt and deliverAfter attribute ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8945"},"#8945")),(0,o.kt)("li",{parentName:"ul"},"Fix returned status code does not depend on the exception type ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9031"},"#9031")),(0,o.kt)("li",{parentName:"ul"},"Allow to consume and pass message to client without decryption ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10026"},"#10026")),(0,o.kt)("li",{parentName:"ul"},"Support pong command ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10035"},"#10035"))))}u.isMDXComponent=!0}}]);