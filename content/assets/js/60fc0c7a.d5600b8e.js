"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[78163],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={id:"functions-deploy-cluster-resource",title:"Allocate resources to function instance",sidebar_label:"Allocate resources to function instance"},l=void 0,c={unversionedId:"functions-deploy-cluster-resource",id:"functions-deploy-cluster-resource",title:"Allocate resources to function instance",description:"When running functions in cluster mode, you can specify the resources that can be allocated to each function instance.",source:"@site/docs/functions-deploy-cluster-resource.md",sourceDirName:".",slug:"/functions-deploy-cluster-resource",permalink:"/docs/next/functions-deploy-cluster-resource",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/functions-deploy-cluster-resource.md",tags:[],version:"current",frontMatter:{id:"functions-deploy-cluster-resource",title:"Allocate resources to function instance",sidebar_label:"Allocate resources to function instance"},sidebar:"docsSidebar",previous:{title:"Deploy a function in cluster mode",permalink:"/docs/next/functions-deploy-cluster"},next:{title:"Enable parallel processing",permalink:"/docs/next/functions-deploy-cluster-parallelism"}},i={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When running functions in cluster mode, you can specify the resources that can be allocated to each function instance."),(0,a.kt)("p",null,"The following table outlines the resources that can be allocated to function instances."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Resource"),(0,a.kt)("th",{parentName:"tr",align:null},"Specified as"),(0,a.kt)("th",{parentName:"tr",align:null},"Supported runtime"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CPU"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of cores"),(0,a.kt)("td",{parentName:"tr",align:null},"Kubernetes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RAM"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of bytes"),(0,a.kt)("td",{parentName:"tr",align:null},"Kubernetes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Disk space"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of bytes"),(0,a.kt)("td",{parentName:"tr",align:null},"Kubernetes")))),(0,a.kt)("p",null,"For example, the following command allocates 8 cores, 8GB of RAM, and 10GB of disk space to a function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create \\\n  --jar target/my-functions.jar \\\n  --classname org.example.functions.MyFunction \\\n  --cpu 8 \\\n  --ram 8589934592 \\\n  --disk 10737418240\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The resources allocated to a given function are applied to each instance of the function. For example, if you apply 8GB of RAM to a function with a ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/functions-deploy-cluster-parallelism"},"parallelism")," of 5, you are applying 40GB of RAM for the function in total. ")))}p.isMDXComponent=!0}}]);