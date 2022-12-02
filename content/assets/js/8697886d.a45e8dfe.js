"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[38870],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(k,o(o({ref:e},c),{},{components:n})):a.createElement(k,o({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27165:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"txn-use",title:"How to use transactions?",sidebar_label:"How to use transactions?",original_id:"txn-use"},o=void 0,s={unversionedId:"txn-use",id:"version-2.10.x/txn-use",title:"How to use transactions?",description:"Transaction API",source:"@site/versioned_docs/version-2.10.x/txn-use.md",sourceDirName:".",slug:"/txn-use",permalink:"/docs/2.10.x/txn-use",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/txn-use.md",tags:[],version:"2.10.x",frontMatter:{id:"txn-use",title:"How to use transactions?",sidebar_label:"How to use transactions?",original_id:"txn-use"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"How transactions work?",permalink:"/docs/2.10.x/txn-how"},next:{title:"How to monitor transactions?",permalink:"/docs/2.10.x/txn-monitor"}},l={},p=[{value:"Transaction API",id:"transaction-api",level:2},{value:"Quick start",id:"quick-start",level:2}],c={toc:p};function u(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"transaction-api"},"Transaction API"),(0,r.kt)("p",null,"The transaction feature is primarily a server-side and protocol-level feature. You can use the transaction feature via the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.10.x/"},"transaction API"),", which is available in ",(0,r.kt)("strong",{parentName:"p"},"Pulsar 2.8.0 or later"),". "),(0,r.kt)("p",null,"To use the transaction API, you do not need any additional settings in the Pulsar client. ",(0,r.kt)("strong",{parentName:"p"},"By default"),", transactions is ",(0,r.kt)("strong",{parentName:"p"},"disabled"),". "),(0,r.kt)("p",null,"Currently, transaction API is only available for ",(0,r.kt)("strong",{parentName:"p"},"Java")," clients. Support for other language clients will be added in the future releases."),(0,r.kt)("h2",{id:"quick-start"},"Quick start"),(0,r.kt)("p",null,"This section provides an example of how to use the transaction API to send and receive messages in a Java client. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start Pulsar 2.8.0 or later. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enable transaction. "),(0,r.kt)("p",{parentName:"li"},"Change the configuration in the ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\ntransactionCoordinatorEnabled=true\n\n")),(0,r.kt)("p",{parentName:"li"},"If you want to enable batch messages in transactions, follow the steps below."),(0,r.kt)("p",{parentName:"li"},"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"acknowledgmentAtBatchIndexLevelEnabled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"standalone.conf")," file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\nacknowledgmentAtBatchIndexLevelEnabled=true\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Initialize transaction coordinator metadata."),(0,r.kt)("p",{parentName:"li"},"The transaction coordinator can leverage the advantages of partitioned topics (such as load balance)."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\nbin/pulsar initialize-transaction-coordinator-metadata -cs 127.0.0.1:2181 -c standalone\n\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\nTransaction coordinator metadata setup success\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Initialize a Pulsar client."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'\nPulsarClient client = PulsarClient.builder()\n\n.serviceUrl("pulsar://localhost:6650")\n\n.enableTransaction(true)\n\n.build();\n\n')))),(0,r.kt)("p",null,"Now you can start using the transaction API to send and receive messages. Below is an example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"consume-process-produce")," application written in Java."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(24578).Z,width:"1844",height:"1100"})),(0,r.kt)("p",null,"Let\u2019s walk through this example step by step."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Step"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1. Start a transaction."),(0,r.kt)("td",{parentName:"tr",align:null},"The application opens a new transaction by calling PulsarClient.newTransaction. It specifics the transaction timeout as 1 minute. If the transaction is not committed within 1 minute, the transaction is automatically aborted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2. Receive messages from topics."),(0,r.kt)("td",{parentName:"tr",align:null},"The application creates two normal consumers to receive messages from topic input-topic-1 and input-topic-2 respectively.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3. Publish messages to topics with the transaction."),(0,r.kt)("td",{parentName:"tr",align:null},"The application creates two producers to produce the resulting messages to the output topic ",(0,r.kt)("em",{parentName:"td"},"output-topic-1")," and output-topic-2 respectively. The application applies the processing logic and generates two output messages. The application sends those two output messages as part of the transaction opened in the first step via Producer.newMessage(Transaction).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4. Acknowledge the messages with the transaction."),(0,r.kt)("td",{parentName:"tr",align:null},"In the same transaction, the application acknowledges the two input messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5. Commit the transaction."),(0,r.kt)("td",{parentName:"tr",align:null},"The application commits the transaction by calling Transaction.commit() on the open transaction. The commit operation ensures the two input messages are marked as acknowledged and the two output messages are written successfully to the output topics.")))),(0,r.kt)("p",null,"[1]"," Example of enabling batch messages ack in transactions in the consumer builder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\nConsumer<byte[]> sinkConsumer = pulsarClient\n    .newConsumer()\n    .topic(transferTopic)\n    .subscriptionName("sink-topic")\n\n.subscriptionInitialPosition(SubscriptionInitialPosition.Earliest)\n    .subscriptionType(SubscriptionType.Shared)\n    .enableBatchIndexAcknowledgment(true) // enable batch index acknowledgement\n    .subscribe();\n\n')))}u.isMDXComponent=!0},24578:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/txn-9-65da8c1f05f7575701ca8614637c112a.png"}}]);