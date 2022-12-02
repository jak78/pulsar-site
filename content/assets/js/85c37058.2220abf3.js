"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[93098],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||o;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},16922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={title:"What\u2019s New in Apache Pulsar 2.9.3",date:new Date("2022-07-27T00:00:00.000Z"),author:"mattisonchao, momo-jun"},i=void 0,s={permalink:"/blog/2022/07/27/Apache-Pulsar-2-9-3",editUrl:"https://github.com/apache/pulsar-site/edit/main/site2/website-next/blog/2022-07-27-Apache-Pulsar-2-9-3.md",source:"@site/blog/2022-07-27-Apache-Pulsar-2-9-3.md",title:"What\u2019s New in Apache Pulsar 2.9.3",description:"The Apache Pulsar community releases version 2.9.3! 50 contributors provided improvements and bug fixes that delivered 200+ commits. Thanks for all your contributions.",date:"2022-07-27T00:00:00.000Z",formattedDate:"July 27, 2022",tags:[],readingTime:3.445,hasTruncateMarker:!1,authors:[{name:"mattisonchao, momo-jun"}],frontMatter:{title:"What\u2019s New in Apache Pulsar 2.9.3",date:"2022-07-27T00:00:00.000Z",author:"mattisonchao, momo-jun"},prevItem:{title:"Pulsar Summit Asia 2022: CFP Is Open Now!",permalink:"/blog/2022/08/22/pulsar-summit-asia-2022-cfp"},nextItem:{title:"Apache Pulsar Sessions in ApacheCon Asia 2022: Join Us Now and Check the Schedule",permalink:"/blog/2022/07/26/pulsar-sessions-in-apachecon-aisa-2022"}},l={authorsImageUrls:[void 0]},u=[{value:"Enabled cursor data compression to reduce persistent cursor data size. 14542",id:"enabled-cursor-data-compression-to-reduce-persistent-cursor-data-size-14542",level:3},{value:"Issue",id:"issue",level:4},{value:"Resolution",id:"resolution",level:4},{value:"Reduced the memory occupied by <code>metadataPositions</code> and avoid OOM. 15137",id:"reduced-the-memory-occupied-by-metadatapositions-and-avoid-oom-15137",level:3},{value:"Issue",id:"issue-1",level:4},{value:"Resolution",id:"resolution-1",level:4},{value:"Checked <code>lowWaterMark</code> before appending transaction entries to Transaction Buffer. 15424",id:"checked-lowwatermark-before-appending-transaction-entries-to-transaction-buffer-15424",level:3},{value:"Issue",id:"issue-2",level:4},{value:"Resolution",id:"resolution-2",level:4},{value:"Fixed the consumption performance regression. PR-15162",id:"fixed-the-consumption-performance-regression-pr-15162",level:3},{value:"Issue",id:"issue-3",level:4},{value:"Resolution",id:"resolution-3",level:4},{value:"Fixed a deadlock issue of topic creation. PR-15570",id:"fixed-a-deadlock-issue-of-topic-creation-pr-15570",level:3},{value:"Issue",id:"issue-4",level:4},{value:"Optimized the memory usage of brokers.",id:"optimized-the-memory-usage-of-brokers",level:3},{value:"Issue",id:"issue-5",level:4},{value:"Resolution",id:"resolution-4",level:4}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Apache Pulsar community releases version 2.9.3! 50 contributors provided improvements and bug fixes that delivered 200+ commits. Thanks for all your contributions."),(0,n.kt)("p",null,"The highlight of the 2.9.3 release is introducing 30+ transaction fixes and improvements. Earlier-adoption users of Pulsar transactions have documented long-term use in their production environments and reported valuable findings in real applications. This provides the Pulsar community with the opportunity to make a difference. "),(0,n.kt)("p",null,"This blog walks through the most noteworthy changes. For the complete list including all feature enhancements and bug fixes, check out the ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/release-notes/versioned/pulsar-2.9.3/"},"Pulsar 2.9.3 Release Notes"),"."),(0,n.kt)("h3",{id:"enabled-cursor-data-compression-to-reduce-persistent-cursor-data-size-14542"},"Enabled cursor data compression to reduce persistent cursor data size. ",(0,n.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/14542"},"14542")),(0,n.kt)("h4",{id:"issue"},"Issue"),(0,n.kt)("p",null,"The cursor data is managed by the ZooKeeper/Etcd metadata store. When the data size increases, it may take too much time to pull the data, and brokers may end up writing large chunks of data to the ZooKeeper/Etcd metadata store."),(0,n.kt)("h4",{id:"resolution"},"Resolution"),(0,n.kt)("p",null,"Provide the ability to enable compression mechanisms to reduce cursor data size and the pulling time."),(0,n.kt)("h3",{id:"reduced-the-memory-occupied-by-metadatapositions-and-avoid-oom-15137"},"Reduced the memory occupied by ",(0,n.kt)("inlineCode",{parentName:"h3"},"metadataPositions")," and avoid OOM. ",(0,n.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/15137"},"15137")),(0,n.kt)("h4",{id:"issue-1"},"Issue"),(0,n.kt)("p",null,"The map ",(0,n.kt)("inlineCode",{parentName:"p"},"metadataPositions")," in MLPendingAckStore is used to clear useless data in PendingAck, where the key is the position that is persistent in PendingAck and the value is the max position acked by an operation. It judges whether the max subscription cursor position is smaller than the subscription cursor\u2019s ",(0,n.kt)("inlineCode",{parentName:"p"},"markDeletePosition"),". If the max position is smaller, then the log cursor will mark to delete the position. It causes two main issues:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In normal cases, this map stores all transaction ack operations. This is a waste of memory and CPU."),(0,n.kt)("li",{parentName:"ul"},"If a transaction that has not been committed for a long time acks a message in a later position, the map will not be cleaned up, which finally leads to OOM (out-of-memory).")),(0,n.kt)("h4",{id:"resolution-1"},"Resolution"),(0,n.kt)("p",null,"Regularly store a small amount of data according to certain rules. For more detailed implementation, refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues/15073"},"PIP-153"),"."),(0,n.kt)("h3",{id:"checked-lowwatermark-before-appending-transaction-entries-to-transaction-buffer-15424"},"Checked ",(0,n.kt)("inlineCode",{parentName:"h3"},"lowWaterMark")," before appending transaction entries to Transaction Buffer. ",(0,n.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/15424"},"15424")),(0,n.kt)("h4",{id:"issue-2"},"Issue"),(0,n.kt)("p",null,"When a client sends messages using a previously committed transaction, these messages are visible to consumers unexpectedly."),(0,n.kt)("h4",{id:"resolution-2"},"Resolution"),(0,n.kt)("p",null,"Add a map to store the ",(0,n.kt)("inlineCode",{parentName:"p"},"lowWaterMark")," of Transaction Coordinator in Trasanction Buffer, and check ",(0,n.kt)("inlineCode",{parentName:"p"},"lowWaterMark")," before appending transaction entries to Trasanction Buffer. So when sending messages using an invalid transaction, clients will receive ",(0,n.kt)("inlineCode",{parentName:"p"},"NotAllowedException"),". "),(0,n.kt)("h3",{id:"fixed-the-consumption-performance-regression-pr-15162"},"Fixed the consumption performance regression. ",(0,n.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/15162"},"PR-15162")),(0,n.kt)("h4",{id:"issue-3"},"Issue"),(0,n.kt)("p",null,"This performance regression was introduced in 2.10.0, 2.9.1, and 2.8.3. You may find a significant performance drop with message listeners while using Java Client. The root cause is each message will introduce the thread switching from the external thread pool to the internal thread poll and then to the external thread pool."),(0,n.kt)("h4",{id:"resolution-3"},"Resolution"),(0,n.kt)("p",null,"Avoid the thread switching for each message to improve consumption throughput."),(0,n.kt)("h3",{id:"fixed-a-deadlock-issue-of-topic-creation-pr-15570"},"Fixed a deadlock issue of topic creation. ",(0,n.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/15570"},"PR-15570")),(0,n.kt)("h4",{id:"issue-4"},"Issue"),(0,n.kt)("p",null,"This deadlock issue occurred during topic creation by trying to re-acquire the same ",(0,n.kt)("inlineCode",{parentName:"p"},"StampedLock")," from the same thread when removing it. This will cause the topic to stop service for a long time, and ultimately with a failure in the deduplication or geo-replication check. The workaround is restarting the broker."),(0,n.kt)("h3",{id:"optimized-the-memory-usage-of-brokers"},"Optimized the memory usage of brokers."),(0,n.kt)("h4",{id:"issue-5"},"Issue"),(0,n.kt)("p",null,"Pulsar has some internal data structures, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"ConcurrentLongLongPairHashMap"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"ConcurrentLongPairHashMap"),", which can reduce the memory usage rather than using the Boxing type. However, in earlier versions, the data structures were not supported for shrinking even if the data was removed, which wasted a certain amount of memory in certain situations."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pull requests")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15354"},"https://github.com/apache/pulsar/pull/15354")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15342"},"https://github.com/apache/pulsar/pull/15342")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14663"},"https://github.com/apache/pulsar/pull/14663")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14515"},"https://github.com/apache/pulsar/pull/14515")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14497"},"https://github.com/apache/pulsar/pull/14497"))),(0,n.kt)("h4",{id:"resolution-4"},"Resolution"),(0,n.kt)("p",null,"Support the shrinking of the internal data structures, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"ConcurrentSortedLongPairSet"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ConcurrentOpenHashMap"),", and so on."),(0,n.kt)("h1",{id:"whats-next"},"What\u2019s Next?"),(0,n.kt)("p",null,"If you are interested in learning more about Pulsar 2.9.3, you can ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/versions/"},"download")," and try it out now! "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pulsar Summit San Francisco 2022")," will take place on August 18th, 2022. ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar-summit.org/"},"Register now")," and help us make it an even bigger success by spreading the word on social media!"),(0,n.kt)("p",null,"For more information about the Apache Pulsar project and current progress, visit\nthe ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org"},"Pulsar website"),", follow the project on Twitter\n",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/apache_pulsar"},"@apache_pulsar"),", and join ",(0,n.kt)("a",{parentName:"p",href:"https://apache-pulsar.herokuapp.com/"},"Pulsar Slack"),"!"))}c.isMDXComponent=!0}}]);