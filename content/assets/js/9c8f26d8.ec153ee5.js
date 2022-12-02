"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[31097],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>h});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)o=c[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)o=c[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(o),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||c;return o?a.createElement(h,r(r({ref:t},l),{},{components:o})):a.createElement(h,r({ref:t},l))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=o.length,r=new Array(c);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,r[1]=i;for(var p=2;p<c;p++)r[p]=o[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},41841:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var a=o(87462),n=(o(67294),o(3905));const c={id:"cookbooks-compaction",title:"Topic compaction",sidebar_label:"Topic compaction",original_id:"cookbooks-compaction"},r=void 0,i={unversionedId:"cookbooks-compaction",id:"version-2.10.x/cookbooks-compaction",title:"Topic compaction",description:"Pulsar's topic compaction feature enables you to create compacted topics in which older, \"obscured\" entries are pruned from the topic, allowing for faster reads through the topic's history (which messages are deemed obscured/outdated/irrelevant will depend on your use case).",source:"@site/versioned_docs/version-2.10.x/cookbooks-compaction.md",sourceDirName:".",slug:"/cookbooks-compaction",permalink:"/docs/2.10.x/cookbooks-compaction",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/cookbooks-compaction.md",tags:[],version:"2.10.x",frontMatter:{id:"cookbooks-compaction",title:"Topic compaction",sidebar_label:"Topic compaction",original_id:"cookbooks-compaction"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"Apache Storm",permalink:"/docs/2.10.x/adaptors-storm"},next:{title:"Message deduplication",permalink:"/docs/2.10.x/cookbooks-deduplication"}},s={},p=[{value:"When should I use compacted topics?",id:"when-should-i-use-compacted-topics",level:2},{value:"Configure compaction to run automatically",id:"configure-compaction-to-run-automatically",level:2},{value:"Trigger compaction manually",id:"trigger-compaction-manually",level:2},{value:"Configure consumers",id:"configure-consumers",level:2}],l={toc:p};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Pulsar's ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.10.x/concepts-topic-compaction#compaction"},"topic compaction")," feature enables you to create ",(0,n.kt)("strong",{parentName:"p"},"compacted"),' topics in which older, "obscured" entries are pruned from the topic, allowing for faster reads through the topic\'s history (which messages are deemed obscured/outdated/irrelevant will depend on your use case).'),(0,n.kt)("p",null,"To use compaction:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You need to give messages keys, as topic compaction in Pulsar takes place on a ",(0,n.kt)("em",{parentName:"li"},"per-key basis")," (i.e. messages are compacted based on their key). For a stock ticker use case, the stock symbol---e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"AAPL")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"GOOG"),"---could serve as the key (more on this ",(0,n.kt)("a",{parentName:"li",href:"#when-should-i-use-compacted-topics"},"below"),"). Messages without keys will be left alone by the compaction process."),(0,n.kt)("li",{parentName:"ul"},"Compaction can be configured to run ",(0,n.kt)("a",{parentName:"li",href:"#configure-compaction-to-run-automatically"},"automatically"),", or you can manually ",(0,n.kt)("a",{parentName:"li",href:"#trigger-compaction-manually"},"trigger")," compaction using the Pulsar administrative API."),(0,n.kt)("li",{parentName:"ul"},"Your consumers must be ",(0,n.kt)("a",{parentName:"li",href:"#configure-consumers"},"configured")," to read from compacted topics (Java consumers, for example, have a ",(0,n.kt)("inlineCode",{parentName:"li"},"readCompacted")," setting that must be set to ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"). If this configuration is not set, consumers will still be able to read from the non-compacted topic.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Compaction only works on messages that have keys (as in the stock ticker example the stock symbol serves as the key for each message). Keys can thus be thought of as the axis along which compaction is applied. Messages that don't have keys are simply ignored by compaction.")),(0,n.kt)("h2",{id:"when-should-i-use-compacted-topics"},"When should I use compacted topics?"),(0,n.kt)("p",null,"The classic example of a topic that could benefit from compaction would be a stock ticker topic through which consumers can access up-to-date values for specific stocks. Imagine a scenario in which messages carrying stock value data use the stock symbol as the key (",(0,n.kt)("inlineCode",{parentName:"p"},"GOOG"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"AAPL"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"TWTR"),", etc.). Compacting this topic would give consumers on the topic two options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'They can read from the "original," non-compacted topic in case they need access to "historical" values, i.e. the entirety of the topic\'s messages.'),(0,n.kt)("li",{parentName:"ul"},"They can read from the compacted topic if they only want to see the most up-to-date messages.")),(0,n.kt)("p",null,"Thus, if you're using a Pulsar topic called ",(0,n.kt)("inlineCode",{parentName:"p"},"stock-values"),", some consumers could have access to all messages in the topic (perhaps because they're performing some kind of number crunching of all values in the last hour) while the consumers used to power the real-time stock ticker only see the compacted topic (and thus aren't forced to process outdated messages). Which variant of the topic any given consumer pulls messages from is determined by the consumer's ",(0,n.kt)("a",{parentName:"p",href:"#configure-consumers"},"configuration"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"One of the benefits of compaction in Pulsar is that you aren't forced to choose between compacted and non-compacted topics, as the compaction process leaves the original topic as-is and essentially adds an alternate topic. In other words, you can run compaction on a topic and consumers that need access to the non-compacted version of the topic will not be adversely affected.")),(0,n.kt)("h2",{id:"configure-compaction-to-run-automatically"},"Configure compaction to run automatically"),(0,n.kt)("p",null,"Compaction policy specifies how large the topic backlog can grow before compaction is triggered."),(0,n.kt)("p",null,"Tenant administrators can configure a compaction policy at namespace or topic levels. Configuring the compaction policy at the namespace level applies to all topics within that namespace. "),(0,n.kt)("p",null,"For example, to trigger compaction in a namespace when the backlog reaches 100MB:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin namespaces set-compaction-threshold \\\n  --threshold 100M my-tenant/my-namespace\n\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To configure the compaction policy at the topic level, you need to enable ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.10.x/concepts-multi-tenancy#namespace-change-events-and-topic-level-policies"},"topic-level policy")," first.")),(0,n.kt)("h2",{id:"trigger-compaction-manually"},"Trigger compaction manually"),(0,n.kt)("p",null,"In order to run compaction on a topic, you need to use the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.10.x/pulsar-admin#topics-compact"},(0,n.kt)("inlineCode",{parentName:"a"},"topics compact"))," command for the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.10.x/pulsar-admin"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," CLI tool. Here's an example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin topics compact \\\n  persistent://my-tenant/my-namespace/my-topic\n\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," tool runs compaction via the Pulsar ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API. To run compaction in its own dedicated process, i.e. ",(0,n.kt)("em",{parentName:"p"},"not")," through the REST API, you can use the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.10.x/reference-cli-tools#pulsar-compact-topic"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar compact-topic"))," command. Here's an example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar compact-topic \\\n  --topic persistent://my-tenant-namespace/my-topic\n\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Running compaction in its own process is recommended when you want to avoid interfering with the broker's performance. Broker performance should only be affected, however, when running compaction on topics with a large keyspace (i.e when there are many keys on the topic). The first phase of the compaction process keeps a copy of each key in the topic, which can create memory pressure as the number of keys grows. Using the ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics compact")," command to run compaction through the REST API should present no issues in the overwhelming majority of cases; using ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar compact-topic")," should correspondingly be considered an edge case.")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar compact-topic")," command communicates with ",(0,n.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org"},"ZooKeeper")," directly. In order to establish communication with ZooKeeper, though, the ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar")," CLI tool will need to have a valid ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.10.x/reference-configuration#broker"},"broker configuration"),". You can either supply a proper configuration in ",(0,n.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," or specify a non-default location for the configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar compact-topic \\\n  --broker-conf /path/to/broker.conf \\\n  --topic persistent://my-tenant/my-namespace/my-topic\n\n# If the configuration is in conf/broker.conf\n$ bin/pulsar compact-topic \\\n  --topic persistent://my-tenant/my-namespace/my-topic\n\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The frequency to trigger topic compaction varies widely based on use cases. If you want a compacted topic to be extremely speedy on read, then you need to run compaction fairly frequently.")),(0,n.kt)("h2",{id:"configure-consumers"},"Configure consumers"),(0,n.kt)("p",null,"Pulsar consumers and readers need to be configured to read from compacted topics. The section below introduces how to enable compacted topic reads for Java clients."),(0,n.kt)("p",null,"In order to read from a compacted topic using a Java consumer, the ",(0,n.kt)("inlineCode",{parentName:"p"},"readCompacted")," parameter must be set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),". Here's an example consumer for a compacted topic:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'\nConsumer<byte[]> compactedTopicConsumer = client.newConsumer()\n        .topic("some-compacted-topic")\n        .readCompacted(true)\n        .subscribe();\n\n')),(0,n.kt)("p",null,"As mentioned above, topic compaction in Pulsar works on a ",(0,n.kt)("em",{parentName:"p"},"per-key basis"),". That means that messages that you produce on compacted topics need to have keys (the content of the key will depend on your use case). Messages that don't have keys will be ignored by the compaction process. Here's an example Pulsar message with a key:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.client.api.Message;\nimport org.apache.pulsar.client.api.MessageBuilder;\n\nMessage<byte[]> msg = MessageBuilder.create()\n        .setContent(someByteArray)\n        .setKey("some-key")\n        .build();\n\n')),(0,n.kt)("p",null,"The example below shows a message with a key being produced on a compacted Pulsar topic:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.client.api.Message;\nimport org.apache.pulsar.client.api.MessageBuilder;\nimport org.apache.pulsar.client.api.Producer;\nimport org.apache.pulsar.client.api.PulsarClient;\n\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650")\n        .build();\n\nProducer<byte[]> compactedTopicProducer = client.newProducer()\n        .topic("some-compacted-topic")\n        .create();\n\nMessage<byte[]> msg = MessageBuilder.create()\n        .setContent(someByteArray)\n        .setKey("some-key")\n        .build();\n\ncompactedTopicProducer.send(msg);\n\n')))}m.isMDXComponent=!0}}]);