"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[10879],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(r),f=n,v=s["".concat(p,".").concat(f)]||s[f]||m[f]||l;return r?a.createElement(v,i(i({ref:t},u),{},{components:r})):a.createElement(v,i({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},47674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const l={id:"client-java-2.7.4",title:"Client Java 2.7.4",sidebar_label:"Client Java 2.7.4"},i=void 0,o={unversionedId:"versioned/client-java-2.7.4",id:"versioned/client-java-2.7.4",title:"Client Java 2.7.4",description:"- Java] Refactor seek to reuse common logic. [#9670",source:"@site/release-notes/versioned/client-java-2.7.4.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.7.4",permalink:"/release-notes/versioned/client-java-2.7.4",draft:!1,tags:[],version:"current",frontMatter:{id:"client-java-2.7.4",title:"Client Java 2.7.4",sidebar_label:"Client Java 2.7.4"}},p={},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[Java]"," Refactor seek to reuse common logic. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9120"},"#9670")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Process partitioned-topic messages on different listener-threads. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10017"},"#10017")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Fix Consumer listener does not respect receiver queue size. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11455"},"#11455")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Add a optional params scope for pulsar oauth2 client. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11931"},"#11931")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Fix seek at batchIndex level receive duplicated messages. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11826"},"#11826")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Fix race condition on multi-topic consumer. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11764"},"#11764")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Remove consumer reference from PulsarClient on subscription failure. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11758"},"#11758")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Fix block forever bug in Consumer.batchReceive. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11691"},"#11691")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Send CloseProducer on timeout. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13161"},"#13161")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Remove invalid call to Thread.currentThread().interrupt(). ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12652"},"#12652"))))}s.isMDXComponent=!0}}]);