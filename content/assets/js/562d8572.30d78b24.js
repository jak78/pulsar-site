"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[84133],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||b[f]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},45854:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={id:"client-websocket-2.8.2",title:"Client Websocket 2.8.2",sidebar_label:"Client Websocket 2.8.2"},c=void 0,i={unversionedId:"versioned/client-websocket-2.8.2",id:"versioned/client-websocket-2.8.2",title:"Client Websocket 2.8.2",description:"- Fix the batch message ack for WebSocket proxy. #12530",source:"@site/release-notes/versioned/client-websocket-2.8.2.md",sourceDirName:"versioned",slug:"/versioned/client-websocket-2.8.2",permalink:"/release-notes/versioned/client-websocket-2.8.2",draft:!1,tags:[],version:"current",frontMatter:{id:"client-websocket-2.8.2",title:"Client Websocket 2.8.2",sidebar_label:"Client Websocket 2.8.2"}},l={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fix the batch message ack for WebSocket proxy. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12530"},"#12530")),(0,o.kt)("li",{parentName:"ul"},"Add debug log for WebSocket. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12458"},"#12458")),(0,o.kt)("li",{parentName:"ul"},"Remove System.out.println from ConsumerHandler ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11459"},"#11459"))))}u.isMDXComponent=!0}}]);