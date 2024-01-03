"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[28977],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=o(a),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(k,p(p({ref:t},u),{},{components:a})):n.createElement(k,p({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,p[1]=l;for(var o=2;o<i;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},28802:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(67294),r=a(86010);const i={tabItem:"tabItem_Ymn6"};function p(e){let{children:t,hidden:a,className:p}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,p),hidden:a},t)}},10599:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(87462),r=a(67294),i=a(86010),p=a(12466),l=a(16550),s=a(91980),o=a(67392),u=a(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function N(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=m(e),[p,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,o]=k({queryString:a,groupId:n}),[c,N]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),g=(()=>{const e=s??c;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:p,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),o(e),N(e)}),[o,N,i]),tabValues:i}}var g=a(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,p.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=o[a].value;n!==l&&(c(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:p}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},p,{className:(0,i.Z)("tabs__item",h.tabItem,p?.className,{"tabs__item--active":l===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=N(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},16735:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),i=a(10599),p=a(28802);const l={id:"admin-api-get-started",title:"Get started",sidebar_label:"Get started"},s=void 0,o={unversionedId:"admin-api-get-started",id:"version-3.1.x/admin-api-get-started",title:"Get started",description:"This guide walks you through the quickest way to get started with the following methods to manage topics.",source:"@site/versioned_docs/version-3.1.x/admin-get-started.md",sourceDirName:".",slug:"/admin-api-get-started",permalink:"/docs/3.1.x/admin-api-get-started",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/admin-get-started.md",tags:[],version:"3.1.x",frontMatter:{id:"admin-api-get-started",title:"Get started",sidebar_label:"Get started"},sidebar:"docsSidebar",previous:{title:"Tools",permalink:"/docs/3.1.x/admin-api-tools"},next:{title:"Tutorial",permalink:"/docs/3.1.x/admin-api-tutorial"}},u={},c=[{value:"Related topics",id:"related-topics",level:2}],m={toc:c},d="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide walks you through the quickest way to get started with the following methods to manage topics. "),(0,r.kt)(i.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.1.x/pulsar-admin/"},"pulsar-admin CLI"),": it\u2019s a command-line tool and is available in the bin folder of your Pulsar installation.")),(0,r.kt)(p.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"pathname:///admin-rest-api/?version=3.1.2"},"REST API"),": HTTP calls, which are made against the admin APIs provided by brokers. In addition, both the Java admin API and pulsar-admin CLI use the REST API.")),(0,r.kt)(p.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/3.1.x/"},"Java admin API"),": it\u2019s a programmable interface written in Java."))),(0,r.kt)("p",null,"Check the detailed steps below."),(0,r.kt)(i.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"This tutorial guides you through every step of using pulsar-admin CLI to manage topics. It includes the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the service URL.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a partitioned topic.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the number of a partition.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Produce messages to the topic.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the stats of the topic.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the topic. "))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisites")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install and start Pulsar standalone. This tutorial runs Pulsar 2.11 as an example.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the service URLs to point to the broker service in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/conf/client.conf"},"client.conf"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"webServiceUrl=http://localhost:8080/\nbrokerServiceUrl=pulsar://localhost:6650/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a persistent topic named ",(0,r.kt)("em",{parentName:"p"},"test-topic-1")," with 6 partitions."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics create-partitioned-topic \\\npersistent://public/default/test-topic-1 \\\n--partitions 6\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("p",{parentName:"li"},"There is no output. You can check the status of the topic in Step 5.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the number of the partition to 8."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics update-partitioned-topic \\\npersistent://public/default/test-topic-1 \\\n--partitions 8\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("p",{parentName:"li"},"There is no output. You can check the number of partitions in Step 5.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Produce some messages to the partitioned topic ",(0,r.kt)("em",{parentName:"p"},"test-topic-1"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-perf produce -u pulsar://localhost:6650 -r 1000 -i 1000 persistent://public/default/test-topic-1\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'2023-03-07T15:33:56,832+0800 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Starting Pulsar perf producer with config: {\n  "confFile" : "/Users/yu/apache-pulsar-2.11.0/conf/client.conf",\n  "serviceURL" : "pulsar://localhost:6650",\n  "authPluginClassName" : "",\n  "authParams" : "",\n  "tlsTrustCertsFilePath" : "",\n  "tlsAllowInsecureConnection" : false,\n  "tlsHostnameVerificationEnable" : false,\n  "maxConnections" : 1,\n  "statsIntervalSeconds" : 1000,\n  "ioThreads" : 1,\n  "enableBusyWait" : false,\n  "listenerName" : null,\n  "listenerThreads" : 1,\n  "maxLookupRequest" : 50000,\n  "topics" : [ "persistent://public/default/test-topic-1" ],\n  "numTestThreads" : 1,\n  "msgRate" : 1000,\n  "msgSize" : 1024,\n  "numTopics" : 1,\n"numProducers" : 1,\n  "separator" : "-",\n  "sendTimeout" : 0,\n  "producerName" : null,\n  "adminURL" : "http://localhost:8080/",\n\n...\n\n2023-03-07T15:35:03,769+0800 [Thread-0] INFO  org.apache.pulsar.testclient.PerformanceProducer - Aggregated latency stats --- Latency: mean:   8.931 ms - med:   3.775 - 95pct:  32.144 - 99pct:  98.432 - 99.9pct: 216.088 - 99.99pct: 304.807 - 99.999pct: 349.391 - Max: 351.235\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the internal stats of the partitioned topic ",(0,r.kt)("em",{parentName:"p"},"test-topic-1"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics partitioned-stats-internal \\\npersistent://public/default/test-topic-1\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("p",{parentName:"li"},"Below is a part of the output. For detailed explanations of topic stats, see Pulsar statistics."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "metadata" : {\n    "partitions" : 8\n  },\n  "partitions" : {\n    "persistent://public/default/test-topic-1-partition-1" : {\n      "entriesAddedCounter" : 4213,\n      "numberOfEntries" : 4213,\n      "totalSize" : 8817693,\n      "currentLedgerEntries" : 4212,\n      "currentLedgerSize" : 8806289,\n      "lastLedgerCreatedTimestamp" : "2023-03-07T15:33:59.367+08:00",\n      "waitingCursorsCount" : 0,\n      "pendingAddEntriesCount" : 0,\n      "lastConfirmedEntry" : "65:4211",\n      "state" : "LedgerOpened",\n      "ledgers" : [ {\n        "ledgerId" : 49,\n        "entries" : 1,\n        "size" : 11404,\n        "offloaded" : false,\n        "underReplicated" : false\n      }, {\n        "ledgerId" : 65,\n        "entries" : 0,\n        "size" : 0,\n        "offloaded" : false,\n        "underReplicated" : false\n      } ],\n      "cursors" : {\n        "test-subscriptio-1" : {\n          "markDeletePosition" : "49:-1",\n          "readPosition" : "49:0",\n          "waitingReadOp" : false,\n          "pendingReadOps" : 0,\n          "messagesConsumedCounter" : 0,\n          "cursorLedger" : -1,\n          "cursorLedgerLastEntry" : -1,\n  "individuallyDeletedMessages" : "[]",\n          "lastLedgerSwitchTimestamp" : "2023-03-06T16:41:32.801+08:00",\n          "state" : "NoLedger",\n          "numberOfEntriesSinceFirstNotAckedMessage" : 1,\n          "totalNonContiguousDeletedMessagesRange" : 0,\n          "subscriptionHavePendingRead" : false,\n          "subscriptionHavePendingReplayRead" : false,\n          "properties" : { }\n        },\n        "test-subscription-1" : {\n          "markDeletePosition" : "49:-1",\n          "readPosition" : "49:0",\n          "waitingReadOp" : false,\n          "pendingReadOps" : 0,\n          "messagesConsumedCounter" : 0,\n          "cursorLedger" : -1,\n          "cursorLedgerLastEntry" : -1,\n          "individuallyDeletedMessages" : "[]",\n          "lastLedgerSwitchTimestamp" : "2023-03-06T16:41:32.801+08:00",\n          "state" : "NoLedger",\n          "numberOfEntriesSinceFirstNotAckedMessage" : 1,\n          "totalNonContiguousDeletedMessagesRange" : 0,\n          "subscriptionHavePendingRead" : false,\n          "subscriptionHavePendingReplayRead" : false,\n          "properties" : { }\n        }\n      },\n      "schemaLedgers" : [ ],\n      "compactedLedger" : {\n        "ledgerId" : -1,\n        "entries" : -1,\n        "size" : -1,\n        "offloaded" : false,\n        "underReplicated" : false\n      }\n    },\n...\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the topic ",(0,r.kt)("em",{parentName:"p"},"test-topic-1"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics delete-partitioned-topic persistent://public/default/test-topic-1\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("p",{parentName:"li"},"There is no output. You can verify whether the ",(0,r.kt)("em",{parentName:"p"},"test-topic-1")," exists or not using the following command."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("p",{parentName:"li"},"List topics in ",(0,r.kt)("inlineCode",{parentName:"p"},"public/default")," namespace."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics list public/default\n"))))),(0,r.kt)(p.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,"This tutorial guides you through every step of using REST API to manage topics. It includes the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a partitioned topic")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the number of a partition.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Produce messages to the topic.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the stats of the topic.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the topic."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisites")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install and start Pulsar standalone. This tutorial runs Pulsar 2.11 as an example.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a persistent topic named ",(0,r.kt)("em",{parentName:"p"},"test-topic-2")," with 4 partitions."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X PUT http://localhost:8080/admin/v2/persistent/public/default/test-topic-2/partitions -H 'Content-Type: application/json' -d \"4\"\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("p",{parentName:"li"},"There is no output. You can check the topic in Step 4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the number of the partition to 5."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST http://localhost:8080/admin/v2/persistent/public/default/test-topic-2/partitions -H 'Content-Type: application/json' -d \"5\"\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("p",{parentName:"li"},"There is no output. You can check the status of the topic in Step 4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Produce some messages to the partitioned topic ",(0,r.kt)("em",{parentName:"p"},"test-topic-2"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-perf produce -u pulsar://localhost:6650 -r 1000 -i 1000 persistent://public/default/test-topic-2\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'2023-03-08T15:47:06,268+0800 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Starting Pulsar perf producer with config: {\n  "confFile" : "/Users/yu/apache-pulsar-2.11.0/conf/client.conf",\n  "serviceURL" : "pulsar://localhost:6650",\n  "authPluginClassName" : "",\n  "authParams" : "",\n  "tlsTrustCertsFilePath" : "",\n  "tlsAllowInsecureConnection" : false,\n  "tlsHostnameVerificationEnable" : false,\n  "maxConnections" : 1,\n  "statsIntervalSeconds" : 1000,\n  "ioThreads" : 1,\n  "enableBusyWait" : false,\n  "listenerName" : null,\n  "listenerThreads" : 1,\n  "maxLookupRequest" : 50000,\n  "topics" : [ "persistent://public/default/test-topic-2" ],\n  "numTestThreads" : 1,\n  "msgRate" : 1000,\n  "msgSize" : 1024,\n  "numTopics" : 1,\n"numProducers" : 1,\n  "separator" : "-",\n  "sendTimeout" : 0,\n  "producerName" : null,\n  "adminURL" : "http://localhost:8080/",\n  "deprecatedAuthPluginClassName" : null,\n  "maxOutstanding" : 0,\n  "maxPendingMessagesAcrossPartitions" : 0,\n  "partitions" : null,\n  "numMessages" : 0,\n  "compression" : "NONE",\n  "payloadFilename" : null,\n  "payloadDelimiter" : "\\\\n",\n  "batchTimeMillis" : 1.0,\n  "batchMaxMessages" : 1000,\n  "batchMaxBytes" : 4194304,\n  "testTime" : 0,\n  "warmupTimeSeconds" : 1.0,\n  "encKeyName" : null,\n  "encKeyFile" : null,\n  "delay" : 0,\n  "exitOnFailure" : false,\n  "messageKeyGenerationMode" : null,\n  "producerAccessMode" : "Shared",\n  "formatPayload" : false,\n  "formatterClass" : "org.apache.pulsar.testclient.DefaultMessageFormatter",\n  "transactionTimeout" : 10,\n  "numMessagesPerTransaction" : 50,\n  "isEnableTransaction" : false,\n\n  "isAbortTransaction" : false,\n  "histogramFile" : null\n}\n\n...\n\n2023-03-08T15:53:28,178+0800 [Thread-0] INFO  org.apache.pulsar.testclient.PerformanceProducer - Aggregated latency stats --- Latency: mean:   4.481 ms - med:   2.918 - 95pct:  10.710 - 99pct:  38.928 - 99.9pct: 112.689 - 99.99pct: 154.241 - 99.999pct: 193.249 - Max: 241.717\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the internal stats of the topic ",(0,r.kt)("em",{parentName:"p"},"test-topic-2"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET http://localhost:8080/admin/v2/persistent/public/default/test-topic-2/partitioned-internalStats\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("p",{parentName:"li"},"For detailed explanations of topic stats, see Pulsar statistics."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{"metadata":{"partitions":5},"partitions":{"persistent://public/default/test-topic-2-partition-3":{"entriesAddedCounter":47087,"numberOfEntries":47087,"totalSize":80406959,"currentLedgerEntries":47087,"currentLedgerSize":80406959,"lastLedgerCreatedTimestamp":"2023-03-08T15:47:07.273+08:00","waitingCursorsCount":0,"pendingAddEntriesCount":0,"lastConfirmedEntry":"117:47086","state":"LedgerOpened","ledgers":[{"ledgerId":117,"entries":0,"size":0,"offloaded":false,"underReplicated":false}],"cursors":{},"schemaLedgers":[],"compactedLedger":{"ledgerId":-1,"entries":-1,"size":-1,"offloaded":false,"underReplicated":false}},"persistent://public/default/test-topic-2-partition-2":{"entriesAddedCounter":46995,"numberOfEntries":46995,"totalSize":80445417,"currentLedgerEntries":46995,"currentLedgerSize":80445417,"lastLedgerCreatedTimestamp":"2023-03-08T15:47:07.43+08:00","waitingCursorsCount":0,"pendingAddEntriesCount":0,"lastConfirmedEntry":"118:46994","state":"LedgerOpened","ledgers":[{"ledgerId":118,"entries":0,"size":0,"offloaded":false,"underReplicated":false}],...\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the topic ",(0,r.kt)("em",{parentName:"p"},"test-topic-2"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"curl -X DELETE http://localhost:8080/admin/v2/persistent/public/default/test-topic-2/partitions\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("p",{parentName:"li"},"There is no output. You can verify whether the ",(0,r.kt)("em",{parentName:"p"},"test-topic-2")," exists or not using the following command."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("p",{parentName:"li"},"List topics in ",(0,r.kt)("inlineCode",{parentName:"p"},"public/default")," namespace."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"curl -X GET http://localhost:8080/admin/v2/persistent/public/default\n"))))),(0,r.kt)(p.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("p",null,"This tutorial guides you through every step of using Java admin API to manage topics. It includes the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Initiate a Pulsar Java client.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a partitioned topic")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the number of a partition.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Produce messages to the topic.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the stats of the topic.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the topic."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisites")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Prepare a Java project and add the following dependency to your POM file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"<dependency>\n      <groupId>org.apache.pulsar</groupId>\n      <artifactId>pulsar-client-admin</artifactId>\n      <version>2.11.0</version>\n  </dependency>\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Initiate a Pulsar Java client in your Java project."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String url = "http://localhost:8080";\nPulsarAdmin admin = PulsarAdmin.builder()\n    .serviceHttpUrl(url)\n    .build();\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a partitioned topic ",(0,r.kt)("em",{parentName:"p"},"test-topic-1")," with 4 partitions."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'admin.topics().createPartitionedTopic("persistent://public/default/test-topic-1", 4);\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the number of the partition to 5."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'admin.topics().updatePartitionedTopic("test-topic-1", 5);\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Produce some messages to the topic ",(0,r.kt)("em",{parentName:"p"},"test-topic-1"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'PulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://localhost:6650")\n    .build();\n\nProducer<String> producer = client.newProducer(Schema.STRING)\n    .topic("test-topic-1")\n    .blockIfQueueFull(true)\n    .create();\n\nfor (int i = 0; i < 100; ++i) {\n    producer.newMessage().value("test").send();\n}\nproducer.close();\nclient.close();\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the stats of the topic ",(0,r.kt)("em",{parentName:"p"},"test-topic-1"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'PartitionedTopicStats stats = admin.topics().getPartitionedStats("persistent://public/default/test-topic-1",false);\nSystem.out.println(stats.getMsgInCounter());\n')),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"100\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the topic ",(0,r.kt)("em",{parentName:"p"},"test-topic-1"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'admin.topics().deletePartitionedTopic("test-topic-1");\n')))))),(0,r.kt)("h2",{id:"related-topics"},"Related topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To understand basics, see ",(0,r.kt)("a",{parentName:"p",href:"admin-api-overview.md"},"Pulsar admin API - Overview"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To learn usage scenarios, see ",(0,r.kt)("a",{parentName:"p",href:"admin-api-use-cases.md"},"Pulsar admin API - Use cases"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To learn common administrative tasks, see ",(0,r.kt)("a",{parentName:"p",href:"admin-api-features.md"},"Pulsar admin API - Features"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To perform administrative operations, see ",(0,r.kt)("a",{parentName:"p",href:"admin-api-tools.md"},"Pulsar admin API - Tools"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To check the detailed usage, see the references below."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.1.x/pulsar-admin/"},"pulsar-admin CLI"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pulsar admin APIs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"reference-rest-api-overview.md"},"REST API"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/3.1.x/"},"Java admin API")))))))))}k.isMDXComponent=!0}}]);