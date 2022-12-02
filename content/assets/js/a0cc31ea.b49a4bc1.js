"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[68349],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>d});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},o=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,p=e.originalType,u=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),h=s(a),m=l,d=h["".concat(u,".").concat(m)]||h[m]||c[m]||p;return a?r.createElement(d,n(n({ref:t},o),{},{components:a})):r.createElement(d,n({ref:t},o))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=a.length,n=new Array(p);n[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[h]="string"==typeof e?e:l,n[1]=i;for(var s=2;s<p;s++)n[s]=a[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},91104:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>h,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var r=a(87462),l=(a(67294),a(3905));const p={id:"client-java-2.8.0",title:"Client Java 2.8.0",sidebar_label:"Client Java 2.8.0"},n=void 0,i={unversionedId:"versioned/client-java-2.8.0",id:"versioned/client-java-2.8.0",title:"Client Java 2.8.0",description:"- Fix warn log on the producer side when duplicated messages have been dropped #8729",source:"@site/release-notes/versioned/client-java-2.8.0.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.8.0",permalink:"/release-notes/versioned/client-java-2.8.0",draft:!1,tags:[],version:"current",frontMatter:{id:"client-java-2.8.0",title:"Client Java 2.8.0",sidebar_label:"Client Java 2.8.0"}},u={},s=[],o={toc:s};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fix warn log on the producer side when duplicated messages have been dropped ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8729"},"#8729")),(0,l.kt)("li",{parentName:"ul"},"Allow setting subscription name for Reader ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8801"},"#8801")),(0,l.kt)("li",{parentName:"ul"},"Fix authParams showing in log with secret string(",(0,l.kt)("strong",{parentName:"li"},"*"),") ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8910"},"#8910")),(0,l.kt)("li",{parentName:"ul"},"Avoid enabling DLQ on Key_Shared subscription ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9163"},"#9163")),(0,l.kt)("li",{parentName:"ul"},"Add support for the JSON format token ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9313"},"#9313")),(0,l.kt)("li",{parentName:"ul"},"Expose reached end of topic API for Reader/Consumer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9381"},"#9381")),(0,l.kt)("li",{parentName:"ul"},"Fix returned a completed future when acknowledging a batch message before complete the individual acknowledgments ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9383"},"#9383")),(0,l.kt)("li",{parentName:"ul"},"Fix NPE when strip checksum for the producer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9400"},"#9400")),(0,l.kt)("li",{parentName:"ul"},"Fix inconsistent equals and hashCode for MessageIds ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9440"},"#9440")),(0,l.kt)("li",{parentName:"ul"},"Allow disabling producer max queue size ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9650"},"#9650")),(0,l.kt)("li",{parentName:"ul"},"Include pulsar-client-admin-api in the shaded version of pulsar-client-admin ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9689"},"#9689")),(0,l.kt)("li",{parentName:"ul"},"Fix NPE in the ClientCnx ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9761"},"#9761")),(0,l.kt)("li",{parentName:"ul"},"Fix DLQ can't work with AUTO_CONSUME schema ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/issues/9935"},"#9935")),(0,l.kt)("li",{parentName:"ul"},"Fix NPE caused by null value of SchemaInfo's properties ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9985"},"#9985")),(0,l.kt)("li",{parentName:"ul"},"Support multi-topic reader ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9995"},"#9995")),(0,l.kt)("li",{parentName:"ul"},"Process messages from different partitions on different listener threads ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10017"},"#10017")),(0,l.kt)("li",{parentName:"ul"},"Ensure close resource to avoid memory leak ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10028"},"#10028")),(0,l.kt)("li",{parentName:"ul"},"Support set start message ID for each topic/partition on Reader ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10033"},"#10033")),(0,l.kt)("li",{parentName:"ul"},"Add a JSON RecordBuilder to the GenericJsonSchema ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10052"},"#10052")),(0,l.kt)("li",{parentName:"ul"},"Allow GenericRecord to wrap any Java Object ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10057"},"#10057")),(0,l.kt)("li",{parentName:"ul"},"Fix NPE while configuring consumer builder ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10063"},"#10063")),(0,l.kt)("li",{parentName:"ul"},"Support get native schema ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10076"},"#10076")),(0,l.kt)("li",{parentName:"ul"},"Support KeyValue on Message.getValue() when using AutoConsumeSchema ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10107"},"#10107")),(0,l.kt)("li",{parentName:"ul"},"Change the default retry topic name and dead letter topic name ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10129"},"#10129")),(0,l.kt)("li",{parentName:"ul"},"Fix KeyValue with SEPARATED encoding for the GenericObject ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10186"},"#10186")),(0,l.kt)("li",{parentName:"ul"},"Ensure download schema before decoding the payload for the AUTO_CONSUME schema ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10248"},"#10248")),(0,l.kt)("li",{parentName:"ul"},"Fix typo of the maxPendingChunkedMessage method ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10223"},"#10223")),(0,l.kt)("li",{parentName:"ul"},"Trait NONE schema as BYTE schema for AUTO_CONSUME schema ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10277"},"#10277")),(0,l.kt)("li",{parentName:"ul"},"Fix pause consume issue with MultiTopicsConsumerImpl ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10305"},"#10305")),(0,l.kt)("li",{parentName:"ul"},"Make message consumption thread safe and lock-free ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10352"},"#10352")),(0,l.kt)("li",{parentName:"ul"},"Reset state before recycling OpSendMsg instance ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10405"},"#10405")),(0,l.kt)("li",{parentName:"ul"},"Fix hasMessageAvailable return true but can't read message ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10414"},"#10414")),(0,l.kt)("li",{parentName:"ul"},"Fix NPE in GenericJsonRecord ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10482"},"#10482")),(0,l.kt)("li",{parentName:"ul"},"Fix behaviour of Schema.AUTO_CONSUME() with KeyValueSchema and multi versions ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10492"},"#10492")),(0,l.kt)("li",{parentName:"ul"},"Avoid sending flow requests with zero permits ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10507"},"#10507")),(0,l.kt)("li",{parentName:"ul"},"Make failPendingMessages called from within the ProducerImpl object mutex ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10528"},"#10528")),(0,l.kt)("li",{parentName:"ul"},"Add schemaType field in SchemaHash ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10573"},"#10573")),(0,l.kt)("li",{parentName:"ul"},"Fix NPE when ACK grouping tracker checks duplicated message id ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10586"},"#10586")),(0,l.kt)("li",{parentName:"ul"},"Support consume multiple schema types messages by AutoConsumeSchema ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10604"},"#10604")),(0,l.kt)("li",{parentName:"ul"},"Fixed issues in pulsar-client shading configuration ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10614"},"#10614")),(0,l.kt)("li",{parentName:"ul"},"MessageCrypto interface should not expose Netty ByteBuf class in the API ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10616"},"#10616")),(0,l.kt)("li",{parentName:"ul"},"Added org.apache.bookkeeper:cpu-affinity to shaded profile ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10681"},"#10681")),(0,l.kt)("li",{parentName:"ul"},"Skip the periodic re-check of the partitions count on non-partitioned topic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10708"},"#10708")),(0,l.kt)("li",{parentName:"ul"},"Unlock the write lock of the UnAckedMessageTracker before call redeliverUnacknowledgedMessages ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10768"},"#10768")),(0,l.kt)("li",{parentName:"ul"},"Fix AutoConsumeSchema decode data without schema version ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10811"},"#10811"))))}h.isMDXComponent=!0}}]);