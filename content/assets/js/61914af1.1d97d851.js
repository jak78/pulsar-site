"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[39654],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24301:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={id:"deploy-kubernetes",title:"Overview",sidebar_label:"Kubernetes"},l=void 0,i={unversionedId:"deploy-kubernetes",id:"deploy-kubernetes",title:"Overview",description:"The Apache Pulsar Helm Chart provides one of the most convenient ways to deploy and operate Pulsar on Kubernetes. With all the required components, the Helm Chart is scalable and thus suitable for large-scale deployments.",source:"@site/docs/deploy-kubernetes.md",sourceDirName:".",slug:"/deploy-kubernetes",permalink:"/docs/next/deploy-kubernetes",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/deploy-kubernetes.md",tags:[],version:"current",frontMatter:{id:"deploy-kubernetes",title:"Overview",sidebar_label:"Kubernetes"},sidebar:"docsSidebar",previous:{title:"Terraform (AWS)",permalink:"/docs/next/deploy-aws"},next:{title:"Prepare",permalink:"/docs/next/helm-prepare"}},p={},s=[{value:"What&#39;s Next?",id:"whats-next",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Apache Pulsar Helm Chart provides one of the most convenient ways to deploy and operate Pulsar on Kubernetes. With all the required components, the Helm Chart is scalable and thus suitable for large-scale deployments."),(0,a.kt)("p",null,"The Apache Pulsar Helm Chart contains all components to support the features and functions that Pulsar delivers. You can install and configure these components separately. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-helm-chart#readme"},"README")," for more details."),(0,a.kt)("h2",{id:"whats-next"},"What's Next?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To get up and running with Pulsar Helm Chart as fast as possible for Proof of Concept (PoC) in a ",(0,a.kt)("strong",{parentName:"p"},"non-production")," use case, see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/getting-started-helm"},"Quick Start Guide"),". ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To get up and running with Pulsar Helm Chart in production under sustained load, see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/helm-prepare"},"preparations")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/helm-deploy"},"Deployment Guide"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To upgrade your existing Pulsar Helm Chart, see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/helm-upgrade"},"Upgrade Guide"),"."))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Templating in Helm is done through Golang's ",(0,a.kt)("a",{parentName:"p",href:"https://golang.org/pkg/text/template/"},"text/template")," and ",(0,a.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/Masterminds/sprig"},"sprig"),". For more information about how all the inner workings behave, check these documents:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/docs/chart_template_guide/functions_and_pipelines/"},"Functions and Pipelines")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/docs/chart_template_guide/subcharts_and_globals/"},"Subcharts and Globals")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For additional information on developing with Helm, check ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/docs/howto/charts_tips_and_tricks/"},"tips and tricks")," in the Helm repository.")))))}c.isMDXComponent=!0}}]);