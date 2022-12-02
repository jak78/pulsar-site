"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return n?o.createElement(m,s(s({ref:t},c),{},{components:n})):o.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={author:"Hang Chen, Anonymitaet",title:"Apache Pulsar 2.8.1"},s="What\u2019s New in Apache Pulsar 2.8.1",i={permalink:"/blog/2021/09/23/Apache-Pulsar-2-8-1",editUrl:"https://github.com/apache/pulsar-site/edit/main/site2/website-next/blog/2021-09-23-Apache-Pulsar-2-8-1.md",source:"@site/blog/2021-09-23-Apache-Pulsar-2-8-1.md",title:"Apache Pulsar 2.8.1",description:"The Apache Pulsar community releases version 2.8.1! 49 contributors provided improvements and bug fixes that delivered 213 commits.",date:"2021-09-23T00:00:00.000Z",formattedDate:"September 23, 2021",tags:[],readingTime:5.65,hasTruncateMarker:!0,authors:[{name:"Hang Chen, Anonymitaet"}],frontMatter:{author:"Hang Chen, Anonymitaet",title:"Apache Pulsar 2.8.1"},prevItem:{title:"Log4j2 Zero Day vulnerability (CVE-2021-44228)",permalink:"/blog/2021/12/11/Log4j-CVE"},nextItem:{title:"Announcing Pulsar Summit Asia 2021: CFP Is Open!",permalink:"/blog/2021/08/18/asia-cfp"}},l={authorsImageUrls:[void 0]},p=[{value:"Broker",id:"broker",level:2},{value:"Precise publish rate limit takes effect as expected. PR-11446",id:"precise-publish-rate-limit-takes-effect-as-expected-pr-11446",level:3},{value:"Messages with the same keys are delivered to the correct consumers on Key-Shared subscriptions. PR-10762",id:"messages-with-the-same-keys-are-delivered-to-the-correct-consumers-on-key-shared-subscriptions-pr-10762",level:3},{value:"Active producers with the same name are no longer removed from the topic map. PR-11804",id:"active-producers-with-the-same-name-are-no-longer-removed-from-the-topic-map-pr-11804",level:3},{value:"Topics in a fenced state can recover when producers continue to reconnect to brokers. PR-11737",id:"topics-in-a-fenced-state-can-recover-when-producers-continue-to-reconnect-to-brokers-pr-11737",level:3},{value:"Topic properly initializes the cursor to prevent data loss. PR-11547",id:"topic-properly-initializes-the-cursor-to-prevent-data-loss-pr-11547",level:3},{value:"Deadlock no longer occurs when using <code>hasMessageAvailableAsync</code> and <code>readNextAsync</code>. PR-11183",id:"deadlock-no-longer-occurs-when-using-hasmessageavailableasync-and-readnextasync-pr-11183",level:3},{value:"Memory leak does not occur when calling getLastMessageId API. PR-10977",id:"memory-leak-does-not-occur-when-calling-getlastmessageid-api-pr-10977",level:3},{value:"Compaction is triggered for system topics. PR-10941",id:"compaction-is-triggered-for-system-topics-pr-10941",level:3},{value:"Key-shared subscriptions no longer stop dispatching to consumers when repeatedly opening and closing consumers. PR-10920",id:"key-shared-subscriptions-no-longer-stop-dispatching-to-consumers-when-repeatedly-opening-and-closing-consumers-pr-10920",level:3},{value:"Consumers are not allowed to read data on topics to which they are not subscribed. PR-11912",id:"consumers-are-not-allowed-to-read-data-on-topics-to-which-they-are-not-subscribed-pr-11912",level:3},{value:"Topic Policy",id:"topic-policy",level:2},{value:"Retention policy works as expected. PR-11021",id:"retention-policy-works-as-expected-pr-11021",level:3},{value:"System topic no longer has potential data loss when not configured for compaction. PR-11003",id:"system-topic-no-longer-has-potential-data-loss-when-not-configured-for-compaction-pr-11003",level:3},{value:"Proxy",id:"proxy",level:2},{value:"Pulsar proxy correctly shuts down outbound connections. PR-11848",id:"pulsar-proxy-correctly-shuts-down-outbound-connections-pr-11848",level:3},{value:"Function",id:"function",level:2},{value:"Pulsar Functions support Protobuf schema. PR-11709",id:"pulsar-functions-support-protobuf-schema-pr-11709",level:3},{value:"Client",id:"client",level:2},{value:"Partitioned-topic consumers clean up resources after a failure. PR-11754",id:"partitioned-topic-consumers-clean-up-resources-after-a-failure-pr-11754",level:3},{value:"Race conditions do not occur on multi-topic consumers. PR-11764",id:"race-conditions-do-not-occur-on-multi-topic-consumers-pr-11764",level:3},{value:"Consumers are not blocked on <code>batchReceive</code>. PR-11691",id:"consumers-are-not-blocked-on-batchreceive-pr-11691",level:3},{value:"Python client correctly enables custom logging. PR-11882",id:"python-client-correctly-enables-custom-logging-pr-11882",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Apache Pulsar community releases version 2.8.1! 49 contributors provided improvements and bug fixes that delivered 213 commits."),(0,a.kt)("p",null,"Highlights of this release are as below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Key-shared subscriptions no longer stop dispatching to consumers when repeatedly opening and closing consumers. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10920"},"PR-10920"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"System topic no longer has potential data loss when not configured for compaction. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11003"},"PR-11003"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Consumers are not allowed to read data on topics to which they are not subscribed. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11912"},"PR-11912")))),(0,a.kt)("p",null,"This blog walks through the most noteworthy changes grouped by component. For the complete list including all features, enhancements, and bug fixes, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/release-notes/#281-mdash-2021-09-10-a-id281a"},"Pulsar 2.8.1 Release Notes"),"."),(0,a.kt)("h1",{id:"notable-bug-fixes-and-enhancements"},"Notable bug fixes and enhancements"),(0,a.kt)("h2",{id:"broker"},"Broker"),(0,a.kt)("h3",{id:"precise-publish-rate-limit-takes-effect-as-expected-pr-11446"},"Precise publish rate limit takes effect as expected. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11446"},"PR-11446")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issue"),": Previously, when setting precise publish rate limits on topics, it did not work."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resolution"),": Implemented a new ",(0,a.kt)("inlineCode",{parentName:"p"},"RateLimiter")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"LeakingBucket")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"FixedWindow")," algorithms."),(0,a.kt)("h3",{id:"messages-with-the-same-keys-are-delivered-to-the-correct-consumers-on-key-shared-subscriptions-pr-10762"},"Messages with the same keys are delivered to the correct consumers on Key-Shared subscriptions. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/10762"},"PR-10762")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issue"),": Messages with the same keys were out of order when message redelivery occurred on a Key-Shared subscription."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resolution"),": When sending a message to ",(0,a.kt)("inlineCode",{parentName:"p"},"messagesToRedeliver"),", the broker saved the hash value of the key. If the dispatcher attempted to send newer messages to the consumer that had a key corresponding to any one of the saved hash values, they were added to ",(0,a.kt)("inlineCode",{parentName:"p"},"messagesToRedeliver")," instead of being sent. This prevented messages with the same key from being out of order."),(0,a.kt)("h3",{id:"active-producers-with-the-same-name-are-no-longer-removed-from-the-topic-map-pr-11804"},"Active producers with the same name are no longer removed from the topic map. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11804"},"PR-11804")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issue"),": Previously, when there were producers with the same name, an error would be triggered and the old producer would be removed even though it was still writing to a topic."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resolution"),": Validated producers based on a connection ID (local & remote addresses and unique ID) and a producer ID within that connection rather than a producer name."),(0,a.kt)("h3",{id:"topics-in-a-fenced-state-can-recover-when-producers-continue-to-reconnect-to-brokers-pr-11737"},"Topics in a fenced state can recover when producers continue to reconnect to brokers. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11737"},"PR-11737")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issue"),": Previously, when a producer continued to reconnect to a broker, the fenced state of the topic was always set to true, which caused the topic to be unable to recover."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resolution"),": Add an entry to ",(0,a.kt)("inlineCode",{parentName:"p"},"ManagedLedgerException")," when the polled operation is not equal to the current operation."),(0,a.kt)("h3",{id:"topic-properly-initializes-the-cursor-to-prevent-data-loss-pr-11547"},"Topic properly initializes the cursor to prevent data loss. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11547"},"PR-11547")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issue"),": Previously, when subscribing to a topic with the earliest position, data would be lost because ",(0,a.kt)("inlineCode",{parentName:"p"},"ManagedLedger")," used a wrong position to initialize a cursor."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resolution"),": Added a test to check a cursor's position when subscribing to a topic with the earliest position."),(0,a.kt)("h3",{id:"deadlock-no-longer-occurs-when-using-hasmessageavailableasync-and-readnextasync-pr-11183"},"Deadlock no longer occurs when using ",(0,a.kt)("inlineCode",{parentName:"h3"},"hasMessageAvailableAsync")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"readNextAsync"),". ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11183"},"PR-11183")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issue"),": Previously, when messages were added to an incoming queue, a deadlock might occur. The deadlock might happen in two possible scenarios. First, if the message was added to the queue before the message was read. Second, if ",(0,a.kt)("inlineCode",{parentName:"p"},"readNextAsync")," was completed before ",(0,a.kt)("inlineCode",{parentName:"p"},"future.whenComplete")," was called."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resolution"),": Used an internal thread to process the callback of ",(0,a.kt)("inlineCode",{parentName:"p"},"hasMessageAvailableAsync"),"."),(0,a.kt)("h3",{id:"memory-leak-does-not-occur-when-calling-getlastmessageid-api-pr-10977"},"Memory leak does not occur when calling getLastMessageId API. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/10977"},"PR-10977")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issue"),": Previously, the broker ran out of memory when calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"getLastMessageId")," API."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resolution"),": Added the ",(0,a.kt)("inlineCode",{parentName:"p"},"entry.release()")," call to the ",(0,a.kt)("inlineCode",{parentName:"p"},"PersistentTopic.getLastMessageId"),"."),(0,a.kt)("h3",{id:"compaction-is-triggered-for-system-topics-pr-10941"},"Compaction is triggered for system topics. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/10941"},"PR-10941")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issue"),": Previously, when a topic had only non-durable subscriptions, the compaction was not triggered because it had 0 estimated backlog size. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resolution"),": Used the total backlog size to trigger the compaction. Changed the behavior in the case of no durable subscriptions to use the total backlog size"),(0,a.kt)("h3",{id:"key-shared-subscriptions-no-longer-stop-dispatching-to-consumers-when-repeatedly-opening-and-closing-consumers-pr-10920"},"Key-shared subscriptions no longer stop dispatching to consumers when repeatedly opening and closing consumers. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/10920"},"PR-10920")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issue"),": Repeatedly opening and closing consumers with a Key-Shared subscription might occasionally stop dispatching messages to all consumers."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resolution"),": Moved the mark-delete position and removed the consumer from the selector before calling ",(0,a.kt)("inlineCode",{parentName:"p"},"removeConsumer()"),"."),(0,a.kt)("h3",{id:"consumers-are-not-allowed-to-read-data-on-topics-to-which-they-are-not-subscribed-pr-11912"},"Consumers are not allowed to read data on topics to which they are not subscribed. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11912"},"PR-11912")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issue"),": Previously, the request ledger was not checked whether it belonged to a consumer\u2019s connected topic, which allowed the consumer to read data that does not belong to the connected topic."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resolution"),": Added a check on the ",(0,a.kt)("inlineCode",{parentName:"p"},"ManagedLedger")," level before executing read operations. "),(0,a.kt)("h2",{id:"topic-policy"},"Topic Policy"),(0,a.kt)("h3",{id:"retention-policy-works-as-expected-pr-11021"},"Retention policy works as expected. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11021"},"PR-11021")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issue"),": Previously, the retention policy did not work because it was not set in the ",(0,a.kt)("inlineCode",{parentName:"p"},"managedLedger")," configuration."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resolution"),": Set the retention policy in the ",(0,a.kt)("inlineCode",{parentName:"p"},"managedLedger")," configuration to the ",(0,a.kt)("inlineCode",{parentName:"p"},"onUpdate")," listener method."),(0,a.kt)("h3",{id:"system-topic-no-longer-has-potential-data-loss-when-not-configured-for-compaction-pr-11003"},"System topic no longer has potential data loss when not configured for compaction. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11003"},"PR-11003")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issue"),": Previously, data might be lost if there were no durable subscriptions on topics."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resolution"),": Leveraged the topic compaction cursor to retain data."),(0,a.kt)("h2",{id:"proxy"},"Proxy"),(0,a.kt)("h3",{id:"pulsar-proxy-correctly-shuts-down-outbound-connections-pr-11848"},"Pulsar proxy correctly shuts down outbound connections. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11848"},"PR-11848")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issue"),": Previously, there was a memory leak of outgoing TCP connections in the Pulsar proxy because the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProxyConnectionPool")," instances were created outside the ",(0,a.kt)("inlineCode",{parentName:"p"},"PulsarClientImpl")," instance and not closed when the client was closed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resolution"),": Shut down the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConnectionPool")," correctly."),(0,a.kt)("h2",{id:"function"},"Function"),(0,a.kt)("h3",{id:"pulsar-functions-support-protobuf-schema-pr-11709"},"Pulsar Functions support Protobuf schema. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11709"},"PR-11709")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issue"),": Previously, the exception ",(0,a.kt)("inlineCode",{parentName:"p"},"GeneratedMessageV3 is not assignable")," was thrown when using a Protobuf schema."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resolution"),": Added the relevant dependencies to the Pulsar instance."),(0,a.kt)("h2",{id:"client"},"Client"),(0,a.kt)("h3",{id:"partitioned-topic-consumers-clean-up-resources-after-a-failure-pr-11754"},"Partitioned-topic consumers clean up resources after a failure. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11754"},"PR-11754")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issue"),": Previously, partitioned-topic consumers did not clean up the resources when failing to create consumers. If this failure occurred with non-recoverable errors, it triggered a memory leak, which made applications unstable."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resolution"),": Closed and cleaned timer task references."),(0,a.kt)("h3",{id:"race-conditions-do-not-occur-on-multi-topic-consumers-pr-11764"},"Race conditions do not occur on multi-topic consumers. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11764"},"PR-11764")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issue"),': Previously, there was a race condition between 2 threads when one of the individual consumers was in a "paused" state and the shared queue was full. '),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resolution"),': Validated the state of the shared queue after marking the consumer as "paused". The consumer is not blocked if the other thread has emptied the queue in the meantime. '),(0,a.kt)("h3",{id:"consumers-are-not-blocked-on-batchreceive-pr-11691"},"Consumers are not blocked on ",(0,a.kt)("inlineCode",{parentName:"h3"},"batchReceive"),". ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11691"},"PR-11691")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issue"),": Previously, consumers were blocked when ",(0,a.kt)("inlineCode",{parentName:"p"},"Consumer.batchReceive()")," was called concurrently by different threads due to a race condition in ",(0,a.kt)("inlineCode",{parentName:"p"},"ConsumerBase.java"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resolution"),": Put ",(0,a.kt)("inlineCode",{parentName:"p"},"pinnedInternalExecutor")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"ConsumerBase")," to allow batch timer, ",(0,a.kt)("inlineCode",{parentName:"p"},"ConsumerImpl"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"MultiTopicsConsumerImpl")," to submit work in a single thread."),(0,a.kt)("h3",{id:"python-client-correctly-enables-custom-logging-pr-11882"},"Python client correctly enables custom logging. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11882"},"PR-11882")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issue"),": Previously, deadlock might happen when custom logging was enabled in the Python client."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resolution"),": Detached the worker thread and reduced log level."),(0,a.kt)("h1",{id:"what-is-next"},"What is Next?"),(0,a.kt)("p",null,"If you are interested in learning more about Pulsar 2.8.1, you can ",(0,a.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/download/"},"download")," and try it out now! "),(0,a.kt)("p",null,"The first-ever Pulsar Virtual Summit Europe 2021 will take place in October. ",(0,a.kt)("a",{parentName:"p",href:"https://hopin.com/events/pulsar-summit-europe-2021"},"Register now")," and help us make it an even bigger success by spreading the word on social media!"),(0,a.kt)("p",null,"For more information about the Apache Pulsar project and the progress, visit\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://pulsar.apache.org"},"Pulsar website"),", follow the project on Twitter ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/apache_pulsar"},"@apache_pulsar"),", and join ",(0,a.kt)("a",{parentName:"p",href:"https://apache-pulsar.herokuapp.com/"},"Pulsar Slack"),"!"))}u.isMDXComponent=!0}}]);