"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[57340],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(a),h=n,f=c["".concat(o,".").concat(h)]||c[h]||m[h]||i;return a?r.createElement(f,l(l({ref:t},u),{},{components:a})):r.createElement(f,l({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:n,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},77559:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={id:"client-java-2.10.1",title:"Client Java 2.10.1",sidebar_label:"Client Java 2.10.1"},l=void 0,p={unversionedId:"versioned/client-java-2.10.1",id:"versioned/client-java-2.10.1",title:"Client Java 2.10.1",description:"- fix Fixes NPE when TableView handles null value message 15951",source:"@site/release-notes/versioned/client-java-2.10.1.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.10.1",permalink:"/release-notes/versioned/client-java-2.10.1",draft:!1,tags:[],version:"current",frontMatter:{id:"client-java-2.10.1",title:"Client Java 2.10.1",sidebar_label:"Client Java 2.10.1"}},o={},s=[],u={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[fix][Java]"," Fixes NPE when TableView handles null value message ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15951"},"15951")),(0,n.kt)("li",{parentName:"ul"},"[fix][Java]"," Fix conversion of ",(0,n.kt)("inlineCode",{parentName:"li"},"TimestampMillisConversion")," has no effect when Jsr310Conversion enabled ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15863"},"15863")),(0,n.kt)("li",{parentName:"ul"},"[fix][Java]"," Fix messages sent by producers without schema cannot be decoded ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15622"},"15622")),(0,n.kt)("li",{parentName:"ul"},"[improve][Java]"," improve logic when ACK grouping tracker checks duplicated message id ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15465"},"15465")),(0,n.kt)("li",{parentName:"ul"},"[improve][Java]"," Add pending messages information while printing the producer stats ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15440"},"15440")),(0,n.kt)("li",{parentName:"ul"},"[fix][Java]"," Fix negative ack not redelivery ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15312"},"15312")),(0,n.kt)("li",{parentName:"ul"},"[improve][admin/client]"," AsyncHttpConnector doesn't use the system properties configured ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15307"},"15307")),(0,n.kt)("li",{parentName:"ul"},"[fix][Java]"," TableView should cache created readers ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15178"},"15178")),(0,n.kt)("li",{parentName:"ul"},"[fix][Java]"," Fix performance regression with message listener ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15162"},"15162")),(0,n.kt)("li",{parentName:"ul"},"[fix][Java]"," Fix internal receive used wrong timeout type  ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15014"},"15014")),(0,n.kt)("li",{parentName:"ul"},"[fix][Java]"," ConsumerBuilderImpl can not set null to deadLetterPolicy. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14980"},"14980")),(0,n.kt)("li",{parentName:"ul"},"[fix][Java]"," Returns immutable data set when use TableView. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14833"},"14833")),(0,n.kt)("li",{parentName:"ul"},"[improve][Java]"," Avoid timer task run before previous subscribe complete. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14818"},"14818"))))}c.isMDXComponent=!0}}]);