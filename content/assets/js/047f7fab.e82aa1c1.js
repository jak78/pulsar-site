"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[68113],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,h=p["".concat(u,".").concat(d)]||p[d]||m[d]||s;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),s=n(86010),o=n(72389),i=n(67392),u=n(7094),l=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:o,values:m,groupId:d,className:h}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,i.l)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,u.U)(),[C,w]=(0,r.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,l.o5)();if(null!=d){const e=y[d];null!=e&&e!==C&&g.some((t=>t.value===e))&&w(e)}const q=e=>{const t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==C&&(N(t),w(a),null!=d&&k(d,String(a)))},x=e=>{let t=null;switch(e.key){case"Enter":q(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},h)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>T.push(e),onKeyDown:x,onClick:q},o,{className:(0,s.Z)("tabs__item",p,o?.className,{"tabs__item--active":C===t})}),n??t)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},71159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),s=n(65488),o=n(85162);const i={id:"cookbooks-message-queue",title:"Use Pulsar as a message queue",sidebar_label:"Message queue"},u=void 0,l={unversionedId:"cookbooks-message-queue",id:"cookbooks-message-queue",title:"Use Pulsar as a message queue",description:"Message queues are essential components of many large-scale data architectures. If every single work object that passes through your system absolutely must be processed in spite of the slowness or downright failure of this or that system component, there's a good chance that you'll need a message queue to step in and ensure that unprocessed data is retained---with correct ordering---until the required actions are taken.",source:"@site/docs/cookbooks-message-queue.md",sourceDirName:".",slug:"/cookbooks-message-queue",permalink:"/docs/next/cookbooks-message-queue",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/cookbooks-message-queue.md",tags:[],version:"current",frontMatter:{id:"cookbooks-message-queue",title:"Use Pulsar as a message queue",sidebar_label:"Message queue"},sidebar:"docsSidebar",previous:{title:"Message retention and expiry",permalink:"/docs/next/cookbooks-retention-expiry"},next:{title:"BookKeeper Ledger Metadata",permalink:"/docs/next/cookbooks-bookkeepermetadata"}},c={},p=[{value:"Client configuration changes",id:"client-configuration-changes",level:2},{value:"Example",id:"example",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Message queues are essential components of many large-scale data architectures. If every single work object that passes through your system absolutely ",(0,r.kt)("em",{parentName:"p"},"must")," be processed in spite of the slowness or downright failure of this or that system component, there's a good chance that you'll need a message queue to step in and ensure that unprocessed data is retained---with correct ordering---until the required actions are taken."),(0,r.kt)("p",null,"Pulsar is a great choice for a message queue because:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"it was built with ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/concepts-architecture-overview#persistent-storage"},"persistent message storage")," in mind"),(0,r.kt)("li",{parentName:"ul"},"it offers automatic load balancing across ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/reference-terminology#consumer"},"consumers")," for messages on a topic (or custom load balancing if you wish)")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can use the same Pulsar installation to act as a real-time message bus and as a message queue if you wish (or just one or the other). You can set aside some topics for real-time purposes and other topics for message queue purposes (or use specific namespaces for either purpose if you wish).")),(0,r.kt)("h2",{id:"client-configuration-changes"},"Client configuration changes"),(0,r.kt)("p",null,"To use a Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#topic"},"topic")," as a message queue, you should distribute the receiver load on that topic across several consumers (the optimal number of consumers depends on the load). "),(0,r.kt)("p",null,"Each consumer must establish a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concepts-messaging#shared"},"shared subscription")," and use the same subscription name as the other consumers (otherwise the subscription is not shared and the consumers can't act as a processing ensemble)."),(0,r.kt)("p",null,"If you'd like to have tight control over message dispatching across consumers, set the consumers' ",(0,r.kt)("strong",{parentName:"p"},"receiver queue")," size very low (potentially even to 0 if necessary). Each consumer has a receiver queue that determines how many messages the consumer attempts to fetch at a time. For example, a receiver queue of 1000 (the default) means that the consumer attempts to process 1000 messages from the topic's backlog upon connection. Setting the receiver queue to 0 essentially means ensuring that each consumer is only doing one thing at a time."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The receiver queue size of a partitioned topic consumer adopts the minimum one of the following two values:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"receiver_queue_size")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_total_receiver_queue_size_across_partitions"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"NumPartitions")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Here's an example that uses a shared subscription."),(0,r.kt)(s.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"C++",value:"C++"},{label:"Go",value:"Go"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.client.api.Consumer;\nimport org.apache.pulsar.client.api.PulsarClient;\nimport org.apache.pulsar.client.api.SubscriptionType;\n\nString SERVICE_URL = "pulsar://localhost:6650";\nString TOPIC = "persistent://public/default/mq-topic-1";\nString subscription = "sub-1";\n\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl(SERVICE_URL)\n        .build();\n\nConsumer consumer = client.newConsumer()\n        .topic(TOPIC)\n        .subscriptionName(subscription)\n        .subscriptionType(SubscriptionType.Shared)\n        // If you\'d like to restrict the receiver queue size\n        .receiverQueueSize(10)\n        .subscribe();\n'))),(0,r.kt)(o.Z,{value:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from pulsar import Client, ConsumerType\n\nSERVICE_URL = "pulsar://localhost:6650"\nTOPIC = "persistent://public/default/mq-topic-1"\nSUBSCRIPTION = "sub-1"\n\nclient = Client(SERVICE_URL)\nconsumer = client.subscribe(\n    TOPIC,\n    SUBSCRIPTION,\n    # If you\'d like to restrict the receiver queue size\n    receiver_queue_size=10,\n    consumer_type=ConsumerType.Shared)\n'))),(0,r.kt)(o.Z,{value:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <pulsar/Client.h>\n\nstd::string serviceUrl = "pulsar://localhost:6650";\nstd::string topic = "persistent://public/defaultmq-topic-1";\nstd::string subscription = "sub-1";\n\nClient client(serviceUrl);\n\nConsumerConfiguration consumerConfig;\nconsumerConfig.setConsumerType(ConsumerType.ConsumerShared);\n// If you\'d like to restrict the receiver queue size\nconsumerConfig.setReceiverQueueSize(10);\n\nConsumer consumer;\n\nResult result = client.subscribe(topic, subscription, consumerConfig, consumer);\n'))),(0,r.kt)(o.Z,{value:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/apache/pulsar-client-go/pulsar"\n\nclient, err := pulsar.NewClient(pulsar.ClientOptions{\n    URL: "pulsar://localhost:6650",\n})\nif err != nil {\n    log.Fatal(err)\n}\nconsumer, err := client.Subscribe(pulsar.ConsumerOptions{\n    Topic:             "persistent://public/default/mq-topic-1",\n    SubscriptionName:  "sub-1",\n    Type:              pulsar.Shared,\n    ReceiverQueueSize: 10, // If you\'d like to restrict the receiver queue size\n})\nif err != nil {\n    log.Fatal(err)\n}\n')))))}d.isMDXComponent=!0}}]);