"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"functions-worker-stateful",title:"Enable stateful functions",sidebar_label:"Enable stateful functions"},i=void 0,l={unversionedId:"functions-worker-stateful",id:"functions-worker-stateful",title:"Enable stateful functions",description:"When the stateful APIs of Pulsar Functions are required \u2013 for example, putState() and queryState() related interfaces \u2013 you need to enable the stateful function feature in function workers.",source:"@site/docs/functions-worker-stateful.md",sourceDirName:".",slug:"/functions-worker-stateful",permalink:"/docs/next/functions-worker-stateful",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/functions-worker-stateful.md",tags:[],version:"current",frontMatter:{id:"functions-worker-stateful",title:"Enable stateful functions",sidebar_label:"Enable stateful functions"},sidebar:"docsSidebar",previous:{title:"Configure temporary file path",permalink:"/docs/next/functions-worker-temp-file-path"},next:{title:"Configure function workers for geo-replicated clusters",permalink:"/docs/next/functions-worker-for-geo-replication"}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"When the stateful APIs of Pulsar Functions are required \u2013 for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"putState()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"queryState()")," related interfaces \u2013 you need to enable the stateful function feature in function workers.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"streamStorage")," service in BookKeeper.\nCurrently, the service uses the NAR package, so you need to set the configuration in the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/bookkeeper.conf")," file."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"##################################################################\n##################################################################\n# Settings below are used by stream/table service\n##################################################################\n##################################################################\n\n### Grpc Server ###\n\n# the grpc server port to listen on. default is 4181\nstorageserver.grpc.port=4181\n\n### Dlog Settings for table service ###\n\n#### Replication Settings\ndlog.bkcEnsembleSize=3\ndlog.bkcWriteQuorumSize=2\ndlog.bkcAckQuorumSize=2\n\n### Storage ###\n\n# local storage directories for storing table ranges data (e.g. rocksdb sst files)\nstorage.range.store.dirs=data/bookkeeper/ranges\n\n# whether the storage server capable of serving readonly tables. default is false.\nstorage.serve.readonly.tables=false\n\n# the cluster controller schedule interval, in milliseconds. default is 30 seconds.\nstorage.cluster.controller.schedule.interval.ms=30000\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After starting the bookie, use the following methods to check whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"streamStorage")," service has been started successfully."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Input:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"telnet localhost 4181\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Output:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Trying 127.0.0.1...\nConnected to localhost.\nEscape character is '^]'.\n"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure ",(0,a.kt)("inlineCode",{parentName:"p"},"stateStorageServiceUrl")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/functions_worker.yml")," file.\n",(0,a.kt)("inlineCode",{parentName:"p"},"bk-service-url")," is the service URL pointing to the BookKeeper table service."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"stateStorageServiceUrl: bk://<bk-service-url>:4181\n")))))}p.isMDXComponent=!0}}]);