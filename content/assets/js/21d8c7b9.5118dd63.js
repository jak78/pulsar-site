"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[85341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const r={title:"What\u2019s New in Apache Pulsar 2.7.5",date:new Date("2022-09-09T00:00:00.000Z"),author:"Jason918, momo-jun"},i=void 0,s={permalink:"/blog/2022/09/09/Apache-Pulsar-2-7-5",editUrl:"https://github.com/apache/pulsar-site/edit/main/site2/website-next/blog/2022-09-09-Apache-Pulsar-2-7-5.md",source:"@site/blog/2022-09-09-Apache-Pulsar-2-7-5.md",title:"What\u2019s New in Apache Pulsar 2.7.5",description:"The Apache Pulsar community releases version 2.7.5! 23 contributors provided improvements and bug fixes that delivered 89 commits. Thanks for all your contributions.",date:"2022-09-09T00:00:00.000Z",formattedDate:"September 9, 2022",tags:[],readingTime:2.55,hasTruncateMarker:!1,authors:[{name:"Jason918, momo-jun"}],frontMatter:{title:"What\u2019s New in Apache Pulsar 2.7.5",date:"2022-09-09T00:00:00.000Z",author:"Jason918, momo-jun"},prevItem:{title:"Announcing Conference Schedule for Pulsar Summit Asia 2022",permalink:"/blog/2022/11/04/pulsar-summit-asia-2022-schedule-announced"},nextItem:{title:"Pulsar Summit Asia 2022: CFP Is Open Now!",permalink:"/blog/2022/08/22/pulsar-summit-asia-2022-cfp"}},l={authorsImageUrls:[void 0]},u=[{value:"Fixed the deadlock on metadata cache missing while checking replications. PR-16889",id:"fixed-the-deadlock-on-metadata-cache-missing-while-checking-replications-pr-16889",level:3},{value:"Issue",id:"issue",level:4},{value:"Resolution",id:"resolution",level:4},{value:"Fixed the deadlock when using the key_shared mode. PR-11965",id:"fixed-the-deadlock-when-using-the-key_shared-mode-pr-11965",level:3},{value:"Issue",id:"issue-1",level:4},{value:"Resolution",id:"resolution-1",level:4},{value:"Fixed the message loss issue due to ledger rollover. PR-14703",id:"fixed-the-message-loss-issue-due-to-ledger-rollover-pr-14703",level:3},{value:"Issue",id:"issue-2",level:4},{value:"Resolution",id:"resolution-2",level:4},{value:"Fixed the port exhaustion and connection issues in Pulsar Proxy. PR-14078",id:"fixed-the-port-exhaustion-and-connection-issues-in-pulsar-proxy-pr-14078",level:3},{value:"Issue",id:"issue-3",level:4},{value:"Resolution",id:"resolution-3",level:4},{value:"Fixed the compaction data loss due to missed compaction properties during cursor reset. PR-16404",id:"fixed-the-compaction-data-loss-due-to-missed-compaction-properties-during-cursor-reset-pr-16404",level:3},{value:"Issue",id:"issue-4",level:4},{value:"Resolution",id:"resolution-4",level:4}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Apache Pulsar community releases version 2.7.5! 23 contributors provided improvements and bug fixes that delivered 89 commits. Thanks for all your contributions."),(0,a.kt)("p",null,"The highlight of the 2.7.5 release is that it fixes some critical bugs on broker, proxy, and storage, including message/data loss, broker deadlock, and connection leak. Note that 2.7.5 is the last release of 2.7.x."),(0,a.kt)("p",null,"This blog walks through the most noteworthy changes. For the complete list, including all feature enhancements and bug fixes, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/release-notes/versioned/pulsar-2.7.5/"},"Pulsar 2.7.5 Release Notes"),"."),(0,a.kt)("h3",{id:"fixed-the-deadlock-on-metadata-cache-missing-while-checking-replications-pr-16889"},"Fixed the deadlock on metadata cache missing while checking replications. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/16889"},"PR-16889")),(0,a.kt)("h4",{id:"issue"},"Issue"),(0,a.kt)("p",null,"After the changes in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12340"},"#12340"),", there are still a couple of places making blocking calls. These calls occupy all the ordered scheduler threads preventing the callbacks from completing until the 30 seconds timeout expires."),(0,a.kt)("h4",{id:"resolution"},"Resolution"),(0,a.kt)("p",null,"Change the blocking calls to async mode on the metadata callback thread."),(0,a.kt)("h3",{id:"fixed-the-deadlock-when-using-the-key_shared-mode-pr-11965"},"Fixed the deadlock when using the key_shared mode. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11965"},"PR-11965")),(0,a.kt)("h4",{id:"issue-1"},"Issue"),(0,a.kt)("p",null,"When the key_shared mode is used in consumers, deadlock may happen in the broker due to some race conditions and result in a lot of ",(0,a.kt)("inlineCode",{parentName:"p"},"CLOSE_WAIT")," status connections."),(0,a.kt)("h4",{id:"resolution-1"},"Resolution"),(0,a.kt)("p",null,"Change unlock before the callback in the ",(0,a.kt)("inlineCode",{parentName:"p"},"asyncDelete")," function of ",(0,a.kt)("inlineCode",{parentName:"p"},"ManagedCursorImpl"),"."),(0,a.kt)("h3",{id:"fixed-the-message-loss-issue-due-to-ledger-rollover-pr-14703"},"Fixed the message loss issue due to ledger rollover. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/14703"},"PR-14703")),(0,a.kt)("h4",{id:"issue-2"},"Issue"),(0,a.kt)("p",null,"If users config ",(0,a.kt)("inlineCode",{parentName:"p"},"managedLedgerMaxLedgerRolloverTimeMinutes > 0"),", and the rollover happens when the ManagedLedger state is ",(0,a.kt)("inlineCode",{parentName:"p"},"CreatingLedger"),", the messages written during that time are lost."),(0,a.kt)("h4",{id:"resolution-2"},"Resolution"),(0,a.kt)("p",null,"Rollover only when the ledger state is ",(0,a.kt)("inlineCode",{parentName:"p"},"LedgerOpened"),". "),(0,a.kt)("h3",{id:"fixed-the-port-exhaustion-and-connection-issues-in-pulsar-proxy-pr-14078"},"Fixed the port exhaustion and connection issues in Pulsar Proxy. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/14078"},"PR-14078")),(0,a.kt)("h4",{id:"issue-3"},"Issue"),(0,a.kt)("p",null,"Pulsar Proxy can get into a state where it stops proxying Broker connections while Admin API proxying keeps working."),(0,a.kt)("h4",{id:"resolution-3"},"Resolution"),(0,a.kt)("p",null,"Optimize the proxy connection to fail-fast when the target broker isn't active.\nFix the race conditions in Pulsar Proxy when establishing a connection, leading to invalid states and hanging connections.\nAdd connection timeout handling to proxy connections.\nAdd read timeout handling to incoming connections and proxied connections."),(0,a.kt)("h3",{id:"fixed-the-compaction-data-loss-due-to-missed-compaction-properties-during-cursor-reset-pr-16404"},"Fixed the compaction data loss due to missed compaction properties during cursor reset. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/16404"},"PR-16404")),(0,a.kt)("h4",{id:"issue-4"},"Issue"),(0,a.kt)("p",null,"The compaction reader seeks the earliest position to read data from the topic, but the compaction properties are missed during cursor reset, which leads to the initialized compaction subscribe without a compaction horizon, so the compaction reader skips the last compacted data. It only happens when initializing the compaction subscription and can be introduced by the load balance or topic unloading manually."),(0,a.kt)("h4",{id:"resolution-4"},"Resolution"),(0,a.kt)("p",null,"Keep the properties for resetting the cursor while the cursor is for data compaction.\nCopy the properties to the new mark delete entry while advancing the cursor, which is triggered by the managed ledger internal. It's not only for the compacted topic, and the internal task should not lose the properties when trimming the cursor."),(0,a.kt)("h1",{id:"whats-next"},"What\u2019s Next?"),(0,a.kt)("p",null,"If you are interested in learning more about Pulsar 2.7.5, you can ",(0,a.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/en/versions/"},"download")," and try it out now! "),(0,a.kt)("p",null,"For more information about the Apache Pulsar project and current progress, visit the ",(0,a.kt)("a",{parentName:"p",href:"https://pulsar.apache.org"},"Pulsar website"),", follow the project on Twitter ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/apache_pulsar"},"@apache_pulsar"),", and join ",(0,a.kt)("a",{parentName:"p",href:"https://apache-pulsar.herokuapp.com/"},"Pulsar Slack"),"!"))}p.isMDXComponent=!0}}]);