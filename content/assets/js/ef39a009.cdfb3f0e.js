"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[99679],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return a?n.createElement(f,l(l({ref:t},i),{},{components:a})):n.createElement(f,l({ref:t},i))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},75276:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const s={Id:"tutorials-namespace",title:"How to create a namespace",sidebar_label:"\u201cTutorials\u201d"},l=void 0,o={unversionedId:"tutorials-namespace",id:"tutorials-namespace",title:"How to create a namespace",description:"Pulsar namespaces are logical groupings of topics.",source:"@site/docs/tutorials-namespace.md",sourceDirName:".",slug:"/tutorials-namespace",permalink:"/docs/next/tutorials-namespace",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/tutorials-namespace.md",tags:[],version:"current",frontMatter:{Id:"tutorials-namespace",title:"How to create a namespace",sidebar_label:"\u201cTutorials\u201d"}},c={},p=[{value:"Related Topics",id:"related-topics",level:4}],i={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pulsar namespaces are logical groupings of topics."),(0,r.kt)("p",null,"Namespaces can be managed via:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The namespaces command of the pulsar-admin tool"),(0,r.kt)("li",{parentName:"ul"},"The /admin/v2/namespaces endpoint of the admin ",(0,r.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API"),(0,r.kt)("li",{parentName:"ul"},"The namespaces method of the PulsarAdmin object in the Java API")),(0,r.kt)("p",null,"In this tutorial, we create a namespace called pulsar in the tenant apache. Then we list namespaces of tenant apache to see if the namespace is created successfully."),(0,r.kt)("p",null,"Create the namespace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces create apache/pulsar\n")),(0,r.kt)("p",null,"Verify the namespace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces list apache\n")),(0,r.kt)("p",null,"You should see similar output to show the namespace apache/pulsar has been successfully created."),(0,r.kt)("h4",{id:"related-topics"},"Related Topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/tutorials-tenant"},"Set up a tenant")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/tutorials-topic"},"Create a topic")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/tutorials-produce-consume"},"Produce and consume messages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/admin-api-clusters"},"Manage clusters"))))}u.isMDXComponent=!0}}]);