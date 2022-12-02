"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[25258],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,p=e.originalType,o=e.parentName,s=n(e,["components","mdxType","originalType","parentName"]),c=u(a),m=l,k=c["".concat(o,".").concat(m)]||c[m]||h[m]||p;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=a.length,i=new Array(p);i[0]=m;var n={};for(var o in t)hasOwnProperty.call(t,o)&&(n[o]=t[o]);n.originalType=e,n[c]="string"==typeof e?e:l,i[1]=n;for(var u=2;u<p;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},75533:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>n,toc:()=>u});var r=a(87462),l=(a(67294),a(3905));const p={id:"pulsar-2.6.1",title:"Apache Pulsar 2.6.1",sidebar_label:"Apache Pulsar 2.6.1"},i=void 0,n={unversionedId:"versioned/pulsar-2.6.1",id:"versioned/pulsar-2.6.1",title:"Apache Pulsar 2.6.1",description:"2020-08-21",source:"@site/release-notes/versioned/pulsar-2.6.1.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.6.1",permalink:"/release-notes/versioned/pulsar-2.6.1",draft:!1,tags:[],version:"current",frontMatter:{id:"pulsar-2.6.1",title:"Apache Pulsar 2.6.1",sidebar_label:"Apache Pulsar 2.6.1"}},o={},u=[{value:"2020-08-21",id:"2020-08-21",level:4},{value:"Broker",id:"broker",level:4},{value:"Zookeeper",id:"zookeeper",level:4},{value:"Pulsar SQL",id:"pulsar-sql",level:4},{value:"Pulsar Schema",id:"pulsar-schema",level:4},{value:"Pulsar Functions",id:"pulsar-functions",level:4},{value:"Go Function",id:"go-function",level:4},{value:"Pulsar Perf",id:"pulsar-perf",level:4}],s={toc:u};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"2020-08-21"},"2020-08-21"),(0,l.kt)("p",null,"The following lists fixes and enhancements in 2.6.1 release."),(0,l.kt)("h4",{id:"broker"},"Broker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Limit batch size to the minimum of the ",(0,l.kt)("inlineCode",{parentName:"li"},"maxNumberOfMessages")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"maxSizeOfMessages")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6865"},"#6865")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix hash range conflict issue in Key_Shared with sticky hash range ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7231"},"#7231")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix the issue that get lookup permission error ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7234"},"#7234")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Update Jetty to version 9.4.29 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7235"},"#7235")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix readers backlog stats after data is skipped ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7236"},"#7236")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix the regression in ",(0,l.kt)("inlineCode",{parentName:"li"},"isSupperUser")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7241"},"#7241")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Avoid introducing null read position for the managed cursor ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7264"},"#7264")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix permission operation check on setRetention admin operation ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7281"},"#7281")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix error in creation of non-durable cursor ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7355"},"#7355")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix bug related to managedLedger properties ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7357"},"#7357")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Add tenant name check in list namespaces function ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7369"},"#7369")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Avoid the NPE occurs in method ",(0,l.kt)("inlineCode",{parentName:"li"},"ManagedLedgerImpl.isOffloadedNeedsDelete")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7389"},"#7389")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix producer stuck issue due to NPE thrown when creating a new ledger ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7401"},"#7401")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Avoid NPEs at ledger creation when DNS failures happen ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7403"},"#7403")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Support decompression payload if needed in KeyShared subscription ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7416"},"#7416")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix update-cluster cli updates proxy-url ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7422"},"#7422")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Handle ",(0,l.kt)("inlineCode",{parentName:"li"},"NotAllowed Exception")," at the client side ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7430"},"#7430")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Shade jclouds to avoid Gson conflict ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7435"},"#7435")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Consumer is registered on dispatcher even if hash range conflicts on Key_Shared subscription ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7444"},"#7444")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Add pulsar-client-messagecrypto-bc into pulsar-client dependency to avoid method not found ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7447"},"#7447")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix update partitions error for non-persistent topic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7459"},"#7459")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Use CGroup CPU usage when present ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7475"},"#7475")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix ArrayIndexOutOfBoundsException when dispatch messages to consumer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7483"},"#7483")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Get last entry is trying to read entry -1 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7495"},"#7495")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix timeout opening managed ledger operation ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7506"},"#7506")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fixes the exception that occurred when the geo-replication policy is updated ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7514"},"#7514")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Update Jackson to version 2.11.1 and ensure all dependencies are pinned ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7519"},"#7519")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix protobuf generation on handling repeated long number ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7540"},"#7540")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Add more logging to the auth operations on failure ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7567"},"#7567")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Use Consume/Produce/Lookup interfaces for specific operations in allowTopicOperation ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7587"},"#7587")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Support configuring ",(0,l.kt)("inlineCode",{parentName:"li"},"DeleteInactiveTopic")," setting in namespace policy ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7598"},"#7598")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix NPE when using advertisedListeners ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7620"},"#7620")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix the issue that deduplication cursor can not be deleted after disabling message deduplication ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7656"},"#7656")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Add missing AuthenticationDataSource to canConsumeAsync method call ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7694"},"#7694")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Close the previous reader of the health check topic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7724"},"#7724")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Change some WebApplicationException log level to debug ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7725"},"#7725")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Replay delayed messages in order ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7731"},"#7731")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix the wrong returned URL for lookup when specify advertised listener ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7737"},"#7737")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix topic getting recreated immediately after deletion ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7524"},"#7524")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Set default root log level to debug ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7789"},"#7789")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix producer stucks on creating ledger timeout ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7319"},"#7319")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," AllowTopicOperationAsync should check the original role is super user ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7788"},"#7788"))),(0,l.kt)("h4",{id:"zookeeper"},"Zookeeper"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Zookeeper]"," Use hostname for bookie rackawareness mapping ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7361"},"#7361"))),(0,l.kt)("h4",{id:"pulsar-sql"},"Pulsar SQL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Pulsar SQL]"," Make Pulsar SQL get correct offload configurations ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7701"},"#7701"))),(0,l.kt)("h4",{id:"pulsar-schema"},"Pulsar Schema"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Schema]"," Fix the error that occurs when getting schemaName by partitioned topic name ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7708"},"#7708"))),(0,l.kt)("h4",{id:"pulsar-functions"},"Pulsar Functions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Pulsar Function]"," Use fully qualified hostname as default to advertise worker ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7360"},"#7360")),(0,l.kt)("li",{parentName:"ul"},"[Pulsar Function]"," Fix the function BC issue introduced in release 2.6.0 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7528"},"#7528")),(0,l.kt)("li",{parentName:"ul"},"[Pulsar Function]"," Improve security setting of Pulsar Functions ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7578"},"#7578")),(0,l.kt)("li",{parentName:"ul"},"[Pulsar Function]"," Differentiate authorization between source/sink/function operations ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7466"},"#7466"))),(0,l.kt)("h4",{id:"go-function"},"Go Function"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Go Function]"," Fix Go instance config port ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7322"},"#7322")),(0,l.kt)("li",{parentName:"ul"},"[Go Function]"," Remove timestamp from metrics ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7539"},"#7539"))),(0,l.kt)("h4",{id:"pulsar-perf"},"Pulsar Perf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Pulsar Perf]"," Supports ",(0,l.kt)("inlineCode",{parentName:"li"},"tlsAllowInsecureConnection")," in pulsar-perf produce/consume/read ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7300"},"#7300"))))}c.isMDXComponent=!0}}]);