"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[32677],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70331:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={slug:"/",id:"about",title:"Apache Pulsar Contribution Guide",sidebar_label:"About",sidebar_position:2},s=void 0,o={unversionedId:"about",id:"about",title:"Apache Pulsar Contribution Guide",description:"The Apache Pulsar community welcomes contributions from anyone with a passion for distributed systems! Pulsar has many opportunities for contributions: write new examples/tutorials, add new user-facing libraries, write new Pulsar IO connectors, or participate on the documentation effort.",source:"@site/contribute/about.md",sourceDirName:".",slug:"/",permalink:"/contribute/",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/about.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1699493437,formattedLastUpdatedAt:"Nov 9, 2023",sidebarPosition:2,frontMatter:{slug:"/",id:"about",title:"Apache Pulsar Contribution Guide",sidebar_label:"About",sidebar_position:2},sidebar:"sidebarDevelopment",next:{title:"Setup and building",permalink:"/contribute/setup-building"}},l={},u=[{value:"Channels",id:"channels",level:2},{value:"Mailing lists",id:"mailing-lists",level:3},{value:"GitHub issues",id:"github-issues",level:3},{value:"Pulsar Improvement Proposal (PIP)",id:"pulsar-improvement-proposal-pip",level:3},{value:"Online discussions",id:"online-discussions",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Apache Pulsar community welcomes contributions from anyone with a passion for distributed systems! Pulsar has many opportunities for contributions: write new examples/tutorials, add new user-facing libraries, write new Pulsar IO connectors, or participate on the documentation effort."),(0,a.kt)("h2",{id:"channels"},"Channels"),(0,a.kt)("p",null,"To engage the Pulsar developers community, you can join the following channels."),(0,a.kt)("h3",{id:"mailing-lists"},"Mailing lists"),(0,a.kt)("p",null,"Pulsar developers discuss design and implementation issues on the ",(0,a.kt)("a",{parentName:"p",href:"mailto:dev@pulsar.apache.org"},"dev@pulsar.apache.org")," mailing list, which is archived ",(0,a.kt)("a",{parentName:"p",href:"https://lists.apache.org/list.html?dev@pulsar.apache.org"},"here"),". Join the list by emailing ",(0,a.kt)("a",{parentName:"p",href:"mailto:dev-subscribe@pulsar.apache.org"},"dev-subscribe@pulsar.apache.org"),"."),(0,a.kt)("h3",{id:"github-issues"},"GitHub issues"),(0,a.kt)("p",null,"Pulsar developers use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues"},"GitHub issues")," for issue tracking and project management, as well as a way to communicate among a very diverse and distributed set of contributors. To be able to gather feedback, avoid frustration, and avoid duplicated efforts all Pulsar related work are being tracked there."),(0,a.kt)("p",null,"If you do not already have a GitHub account, sign up ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/join"},"here"),"."),(0,a.kt)("p",null,"If a quick ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues"},"search")," doesn't turn up an existing GitHub issue for the work you want to contribute, create it. Please discuss your idea with a committer on GitHub or, alternatively, on the developer mailing list."),(0,a.kt)("p",null,"If there\u2019s an existing GitHub issue for your intended contribution, please comment about your intended work. Once the work is understood, a committer will assign the issue to you. If an issue is currently assigned, please check with the current assignee before reassigning."),(0,a.kt)("p",null,"For moderate or large contributions, you should not start coding or writing a design document, a.k.a PIP (see below) unless there is a corresponding GitHub issue assigned to you for that work. Simple changes, like fixing typos, do not require an associated issue."),(0,a.kt)("h3",{id:"pulsar-improvement-proposal-pip"},"Pulsar Improvement Proposal (PIP)"),(0,a.kt)("p",null,"On any change which is either significant (e.g., new features), or changes any public-facing component of Pulsar (API, configuration, metric ...), you need to write a design document known as a ",(0,a.kt)("em",{parentName:"p"},"Pulsar Improvement Proposal (PIP)"),". Before starting to write a PIP, make sure you follow the process ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pip/README.md"},"here")),(0,a.kt)("h3",{id:"online-discussions"},"Online discussions"),(0,a.kt)("p",null,"Pulsar users and developers use ",(0,a.kt)("a",{parentName:"p",href:"https://apache-pulsar.slack.com/"},"Apache Pulsar Slack channel")," for online discussions. You can self-invite yourself by accessing ",(0,a.kt)("a",{parentName:"p",href:"https://communityinviter.com/apps/apache-pulsar/apache-pulsar"},"this link"),"."),(0,a.kt)("p",null,"Slack channels are great for quick questions or discussions on specialized topics. Remember that it's strongly encouraged to communicate via the mailing lists, and you should prefer to discuss more complex subjects by email."),(0,a.kt)("p",null,"Developers should be careful to move or duplicate all the official or useful discussions on GitHub or the dev mailing list."))}d.isMDXComponent=!0}}]);