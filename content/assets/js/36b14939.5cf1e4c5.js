"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[97318],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return a?r.createElement(k,i(i({ref:t},u),{},{components:a})):r.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},28802:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,i),hidden:a},t)}},10599:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),n=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),p=a(67392),u=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,p]=k({queryString:a,groupId:r}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=s??c;return d({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),h(e)}),[p,h,o]),tabValues:o}}var f=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),r=p[a].value;r!==l&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},n.createElement(g,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},10579:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),o=a(10599),i=a(28802);const l={id:"administration-zk-bk",title:"ZooKeeper and BookKeeper administration",sidebar_label:"ZooKeeper and BookKeeper",description:"Get a comprehensive understanding of ZooKeeper and BookKeeper in Pulsar."},s=void 0,p={unversionedId:"administration-zk-bk",id:"administration-zk-bk",title:"ZooKeeper and BookKeeper administration",description:"Get a comprehensive understanding of ZooKeeper and BookKeeper in Pulsar.",source:"@site/docs/administration-zk-bk.md",sourceDirName:".",slug:"/administration-zk-bk",permalink:"/docs/next/administration-zk-bk",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/administration-zk-bk.md",tags:[],version:"current",frontMatter:{id:"administration-zk-bk",title:"ZooKeeper and BookKeeper administration",sidebar_label:"ZooKeeper and BookKeeper",description:"Get a comprehensive understanding of ZooKeeper and BookKeeper in Pulsar."},sidebar:"docsSidebar",previous:{title:"Docker",permalink:"/docs/next/deploy-docker"},next:{title:"Configure metadata store",permalink:"/docs/next/administration-metadata-store"}},u={},c=[{value:"ZooKeeper",id:"zookeeper",level:2},{value:"Deploy local ZooKeeper",id:"deploy-local-zookeeper",level:3},{value:"Deploy configuration store",id:"deploy-configuration-store",level:3},{value:"Single-cluster Pulsar instance",id:"single-cluster-pulsar-instance",level:4},{value:"Multi-cluster Pulsar instance",id:"multi-cluster-pulsar-instance",level:4},{value:"Start the service",id:"start-the-service",level:5},{value:"ZooKeeper configuration",id:"zookeeper-configuration",level:3},{value:"Configure batching operations",id:"configure-batching-operations",level:4},{value:"BookKeeper",id:"bookkeeper",level:2},{value:"Hardware requirements",id:"hardware-requirements",level:3},{value:"Configure BookKeeper",id:"configure-bookkeeper",level:3},{value:"Deploy BookKeeper",id:"deploy-bookkeeper",level:3},{value:"Start bookies manually",id:"start-bookies-manually",level:3},{value:"Decommission bookies cleanly",id:"decommission-bookies-cleanly",level:3},{value:"BookKeeper persistence policies",id:"bookkeeper-persistence-policies",level:2},{value:"Set persistence policies",id:"set-persistence-policies",level:3},{value:"List persistence policies",id:"list-persistence-policies",level:3}],m={toc:c},d="wrapper";function k(e){let{components:t,...l}=e;return(0,n.kt)(d,(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Pulsar relies on two external systems for essential tasks:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://zookeeper.apache.org/"},"ZooKeeper")," is responsible for a wide variety of configuration-related and coordination-related tasks."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://bookkeeper.apache.org/"},"BookKeeper")," is responsible for ",(0,n.kt)("a",{parentName:"li",href:"/docs/next/concepts-architecture-overview#persistent-storage"},"persistent storage")," of message data.")),(0,n.kt)("p",null,"ZooKeeper and BookKeeper are both open-source ",(0,n.kt)("a",{parentName:"p",href:"https://www.apache.org/"},"Apache")," projects.\nThis diagram illustrates the role of ZooKeeper and BookKeeper in a Pulsar cluster:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Role of ZooKeeper and BookKeeper in Pulsar cluster",src:a(83258).Z,width:"1181",height:"781"})),(0,n.kt)("p",null,"Each Pulsar cluster consists of one or more message brokers. Each broker relies on an ensemble of bookies."),(0,n.kt)("h2",{id:"zookeeper"},"ZooKeeper"),(0,n.kt)("p",null,"Each Pulsar instance relies on two separate ZooKeeper quorums."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#deploy-local-zookeeper"},"Local ZooKeeper")," operates at the cluster level and provides cluster-specific configuration management and coordination. Each Pulsar cluster needs to have a dedicated ZooKeeper cluster."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#deploy-configuration-store"},"Configuration Store")," operates at the instance level and provides configuration management for the entire system (and thus across clusters). An independent cluster of machines or the same machines that local ZooKeeper uses can provide the configuration store quorum.")),(0,n.kt)("h3",{id:"deploy-local-zookeeper"},"Deploy local ZooKeeper"),(0,n.kt)("p",null,"ZooKeeper manages a variety of essential coordination-related and configuration-related tasks for Pulsar."),(0,n.kt)("p",null,"To deploy a Pulsar instance, you need to stand up one local ZooKeeper cluster ",(0,n.kt)("em",{parentName:"p"},"per Pulsar cluster"),"."),(0,n.kt)("p",null,"To begin, add all ZooKeeper servers to the quorum configuration specified in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/reference-configuration#zookeeper"},(0,n.kt)("inlineCode",{parentName:"a"},"conf/zookeeper.conf"))," file. Add a ",(0,n.kt)("inlineCode",{parentName:"p"},"server.N")," line for each node in the cluster to the configuration, where ",(0,n.kt)("inlineCode",{parentName:"p"},"N")," is the number of the ZooKeeper node. The following is an example of a three-node cluster:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"server.1=zk1.us-west.example.com:2888:3888\nserver.2=zk2.us-west.example.com:2888:3888\nserver.3=zk3.us-west.example.com:2888:3888\n")),(0,n.kt)("p",null,"On each host, you need to specify the node ID in ",(0,n.kt)("inlineCode",{parentName:"p"},"myid")," file of each node, which is in ",(0,n.kt)("inlineCode",{parentName:"p"},"data/zookeeper")," folder of each server by default (you can change the file location via the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/reference-configuration#zookeeper-dataDir"},(0,n.kt)("inlineCode",{parentName:"a"},"dataDir"))," parameter)."),(0,n.kt)("p",null,"For detailed information on ",(0,n.kt)("inlineCode",{parentName:"p"},"myid")," and more, see the ",(0,n.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org/doc/r3.4.10/zookeeperAdmin.html#sc_zkMulitServerSetup"},"Multi-server setup guide")," in the ZooKeeper documentation."),(0,n.kt)("p",null,"On a ZooKeeper server at ",(0,n.kt)("inlineCode",{parentName:"p"},"zk1.us-west.example.com"),", for example, you can set the ",(0,n.kt)("inlineCode",{parentName:"p"},"myid")," value like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p data/zookeeper\necho 1 > data/zookeeper/myid\n")),(0,n.kt)("p",null,"On ",(0,n.kt)("inlineCode",{parentName:"p"},"zk2.us-west.example.com")," the command is ",(0,n.kt)("inlineCode",{parentName:"p"},"echo 2 > data/zookeeper/myid")," and so on."),(0,n.kt)("p",null,"Once you add each server to the ",(0,n.kt)("inlineCode",{parentName:"p"},"zookeeper.conf")," configuration and each server has the appropriate ",(0,n.kt)("inlineCode",{parentName:"p"},"myid")," entry, you can start ZooKeeper on all hosts (in the background, using nohup) with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/reference-cli-tools"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar-daemon"))," CLI tool:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-daemon start zookeeper\n")),(0,n.kt)("h3",{id:"deploy-configuration-store"},"Deploy configuration store"),(0,n.kt)("p",null,"The ZooKeeper cluster configured and started up in the section above is a ",(0,n.kt)("em",{parentName:"p"},"local")," ZooKeeper cluster that you can use to manage a single Pulsar cluster. In addition to a local cluster, however, a full Pulsar instance also requires a configuration store for handling some instance-level configuration and coordination tasks."),(0,n.kt)("p",null,"If you deploy a ",(0,n.kt)("a",{parentName:"p",href:"#single-cluster-pulsar-instance"},"single-cluster")," instance, you do not need a separate cluster for the configuration store. If, however, you deploy a ",(0,n.kt)("a",{parentName:"p",href:"#multi-cluster-pulsar-instance"},"multi-cluster")," instance, you need to stand up a separate ZooKeeper cluster for configuration tasks."),(0,n.kt)("h4",{id:"single-cluster-pulsar-instance"},"Single-cluster Pulsar instance"),(0,n.kt)("p",null,"If your Pulsar instance consists of just one cluster, then you can deploy a configuration store on the same machines as the local ZooKeeper quorum but run on different TCP ports."),(0,n.kt)("p",null,"To deploy a ZooKeeper configuration store in a single-cluster instance, add the same ZooKeeper servers that the local quorum uses to the configuration file in ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/reference-configuration#configuration-store"},(0,n.kt)("inlineCode",{parentName:"a"},"conf/global_zookeeper.conf"))," using the same method for ",(0,n.kt)("a",{parentName:"p",href:"#deploy-local-zookeeper"},"local ZooKeeper"),", but make sure to use a different port (2181 is the default for ZooKeeper). The following is an example that uses port 2184 for a three-node ZooKeeper cluster:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"clientPort=2184\nserver.1=zk1.us-west.example.com:2185:2186\nserver.2=zk2.us-west.example.com:2185:2186\nserver.3=zk3.us-west.example.com:2185:2186\n")),(0,n.kt)("p",null,"As before, create the ",(0,n.kt)("inlineCode",{parentName:"p"},"myid")," files for each server on ",(0,n.kt)("inlineCode",{parentName:"p"},"data/global-zookeeper/myid"),"."),(0,n.kt)("h4",{id:"multi-cluster-pulsar-instance"},"Multi-cluster Pulsar instance"),(0,n.kt)("p",null,"When you deploy a global Pulsar instance, with clusters distributed across different geographical regions, the configuration store serves as a highly available and strongly consistent metadata store that can tolerate failures and partitions spanning whole regions."),(0,n.kt)("p",null,"The key here is to make sure the ZK quorum members are spread across at least 3 regions and that other regions run as observers."),(0,n.kt)("p",null,"Again, given the very low expected load on the configuration store servers, you can share the same hosts used for the local ZooKeeper quorum."),(0,n.kt)("p",null,"For example, you can assume a Pulsar instance with the following clusters ",(0,n.kt)("inlineCode",{parentName:"p"},"us-west"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"us-east"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"us-central"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"eu-central"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ap-south"),". Also you can assume, each cluster has its own local ZK servers named such as ",(0,n.kt)("inlineCode",{parentName:"p"},"zk[1-3].${CLUSTER}.example.com"),"."),(0,n.kt)("p",null,"In this scenario, you want to pick the quorum participants from a few clusters and let all the others be ZK observers. For example, to form a 7 servers quorum, you can pick 3 servers from ",(0,n.kt)("inlineCode",{parentName:"p"},"us-west"),", 2 from ",(0,n.kt)("inlineCode",{parentName:"p"},"us-central")," and 2 from ",(0,n.kt)("inlineCode",{parentName:"p"},"us-east"),"."),(0,n.kt)("p",null,"This guarantees writing to the configuration store is possible even if one of these regions is unreachable."),(0,n.kt)("p",null,"The ZK configuration in all the servers looks like below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"clientPort=2184\nserver.1=zk1.us-west.example.com:2185:2186\nserver.2=zk2.us-west.example.com:2185:2186\nserver.3=zk3.us-west.example.com:2185:2186\nserver.4=zk1.us-central.example.com:2185:2186\nserver.5=zk2.us-central.example.com:2185:2186\nserver.6=zk3.us-central.example.com:2185:2186:observer\nserver.7=zk1.us-east.example.com:2185:2186\nserver.8=zk2.us-east.example.com:2185:2186\nserver.9=zk3.us-east.example.com:2185:2186:observer\nserver.10=zk1.eu-central.example.com:2185:2186:observer\nserver.11=zk2.eu-central.example.com:2185:2186:observer\nserver.12=zk3.eu-central.example.com:2185:2186:observer\nserver.13=zk1.ap-south.example.com:2185:2186:observer\nserver.14=zk2.ap-south.example.com:2185:2186:observer\nserver.15=zk3.ap-south.example.com:2185:2186:observer\n")),(0,n.kt)("p",null,"Additionally, ZK observers need to have:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"peerType=observer\n")),(0,n.kt)("h5",{id:"start-the-service"},"Start the service"),(0,n.kt)("p",null,"Once your configuration store configuration is in place, you can start up the service using ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/reference-cli-tools"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar-daemon"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-daemon start configuration-store\n")),(0,n.kt)("h3",{id:"zookeeper-configuration"},"ZooKeeper configuration"),(0,n.kt)("p",null,"In Pulsar, ZooKeeper configuration is handled by two separate configuration files in the ",(0,n.kt)("inlineCode",{parentName:"p"},"conf")," directory of your Pulsar installation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"conf/zookeeper.conf")," file handles the configuration for local ZooKeeper."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"conf/global-zookeeper.conf")," file handles the configuration for the configuration store.\nSee ",(0,n.kt)("a",{parentName:"li",href:"/docs/next/reference-configuration#zookeeper"},"parameters")," for more details.")),(0,n.kt)("h4",{id:"configure-batching-operations"},"Configure batching operations"),(0,n.kt)("p",null,"Using the batching operations reduces the remote procedure call (RPC) traffic between the ZooKeeper client and servers. It also reduces the number of write transactions, because each batching operation corresponds to a single ZooKeeper transaction, containing multiple read and write operations."),(0,n.kt)("p",null,"The following figure demonstrates a basic benchmark of batching read/write operations that can be requested to ZooKeeper in one second:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Zookeeper batching benchmark",src:a(88040).Z,width:"2364",height:"728"})),(0,n.kt)("p",null,"To enable batching operations, set the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/reference-configuration#broker"},(0,n.kt)("inlineCode",{parentName:"a"},"metadataStoreBatchingEnabled"))," parameter to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," on the broker side."),(0,n.kt)("h2",{id:"bookkeeper"},"BookKeeper"),(0,n.kt)("p",null,"BookKeeper is a scalable, low-latency persistent log storage service that Pulsar uses to store all durable data. BookKeeper is a distributed ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Write-ahead_logging"},"write-ahead log")," WAL system that guarantees read consistency of independent message logs calls ledgers. Individual BookKeeper servers are also called ",(0,n.kt)("em",{parentName:"p"},"bookies"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"To manage message persistence, retention, and expiry in Pulsar, refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/cookbooks-retention-expiry"},"cookbook"),".")),(0,n.kt)("h3",{id:"hardware-requirements"},"Hardware requirements"),(0,n.kt)("p",null,"Bookie hosts store message data on disk. To provide optimal performance, ensure that the bookies have a suitable hardware configuration. The following are two key dimensions of bookie hardware capacity:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Disk I/O capacity read/write"),(0,n.kt)("li",{parentName:"ul"},"Storage capacity")),(0,n.kt)("p",null,"Message entries written to bookies are always synced to disk before returning an acknowledgment to the Pulsar broker by default. To ensure low write latency, BookKeeper is designed to use multiple devices:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"journal")," to ensure durability. For sequential writes, it is critical to have fast ",(0,n.kt)("a",{parentName:"li",href:"https://linux.die.net/man/2/fsync"},"fsync")," operations on bookie hosts. Typically, small and fast ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Solid-state_drive"},"solid-state drives")," (SSDs) should suffice, or ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Hard_disk_drive"},"hard disk drives")," (HDDs) with a ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/RAID"},"RAID")," controller and a battery-backed write cache. Both solutions can reach fsync latency of ~0.4 ms."),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"ledger storage device")," stores data. Writes happen in the background, so writing I/O is not a big concern. Reads happen sequentially most of the time and the backlog is drained only in case of consumer drain. To store large amounts of data, a typical configuration involves multiple HDDs with a RAID controller.")),(0,n.kt)("h3",{id:"configure-bookkeeper"},"Configure BookKeeper"),(0,n.kt)("p",null,"You can configure BookKeeper bookies using the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/reference-configuration#bookkeeper"},(0,n.kt)("inlineCode",{parentName:"a"},"conf/bookkeeper.conf"))," configuration file. When you configure each bookie, ensure that the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/reference-configuration#bookkeeper-zkServers"},(0,n.kt)("inlineCode",{parentName:"a"},"zkServers"))," parameter is set to the connection string for local ZooKeeper of the Pulsar cluster."),(0,n.kt)("p",null,"The minimum configuration changes required in ",(0,n.kt)("inlineCode",{parentName:"p"},"conf/bookkeeper.conf")," are as follows:"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Set ",(0,n.kt)("inlineCode",{parentName:"p"},"journalDirectory")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"ledgerDirectories")," carefully. It is difficult to change them later.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"# Change to point to journal disk mount point\njournalDirectory=data/bookkeeper/journal\n\n# Point to ledger storage disk mount point\nledgerDirectories=data/bookkeeper/ledgers\n\n# Point to local ZK quorum\nzkServers=zk1.example.com:2181,zk2.example.com:2181,zk3.example.com:2181\n\n#It is recommended to set this parameter. Otherwise, BookKeeper can't start normally in certain environments (for example, Huawei Cloud).\nadvertisedAddress=\n")),(0,n.kt)("p",null,"To change the ZooKeeper root path that BookKeeper uses, use ",(0,n.kt)("inlineCode",{parentName:"p"},"zkLedgersRootPath=/MY-PREFIX/ledgers")," instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"zkServers=localhost:2181/MY-PREFIX"),"."),(0,n.kt)("p",null,"For more information about BookKeeper, refer to the official ",(0,n.kt)("a",{parentName:"p",href:"http://bookkeeper.apache.org"},"BookKeeper docs"),"."),(0,n.kt)("h3",{id:"deploy-bookkeeper"},"Deploy BookKeeper"),(0,n.kt)("p",null,"BookKeeper provides ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/concepts-architecture-overview#persistent-storage"},"persistent message storage")," for Pulsar. Each Pulsar broker has its own cluster of bookies. The BookKeeper cluster shares a local ZooKeeper quorum with the Pulsar cluster."),(0,n.kt)("h3",{id:"start-bookies-manually"},"Start bookies manually"),(0,n.kt)("p",null,"You can start a bookie in the foreground or as a background daemon."),(0,n.kt)("p",null,"To start a bookie in the foreground, use the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/reference-cli-tools"},(0,n.kt)("inlineCode",{parentName:"a"},"bookkeeper"))," CLI tool:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"bin/bookkeeper bookie\n")),(0,n.kt)("p",null,"To start a bookie in the background, use the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/reference-cli-tools"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar-daemon"))," CLI tool:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-daemon start bookie\n")),(0,n.kt)("p",null,"You can verify whether the bookie works properly with the ",(0,n.kt)("inlineCode",{parentName:"p"},"bookiesanity")," command for the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/reference-cli-tools"},"BookKeeper shell"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"bin/bookkeeper shell bookiesanity\n")),(0,n.kt)("p",null,"When you use this command, you create a new ledger on the local bookie, write a few entries, read them back and finally delete the ledger."),(0,n.kt)("h3",{id:"decommission-bookies-cleanly"},"Decommission bookies cleanly"),(0,n.kt)("p",null,"Before you decommission a bookie, you need to check your environment and meet the following requirements."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ensure the state of your cluster supports decommissioning the target bookie. Check if ",(0,n.kt)("inlineCode",{parentName:"p"},"EnsembleSize >= Write Quorum >= Ack Quorum")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," with one less bookie.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ensure the target bookie is listed after using the ",(0,n.kt)("inlineCode",{parentName:"p"},"listbookies")," command.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ensure that no other process is ongoing (upgrade etc)."))),(0,n.kt)("p",null,"And then you can decommission bookies safely. To decommission bookies, complete the following steps."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log in to the bookie node, and check if there are under-replicated ledgers. The decommission command force to replicate the underreplicated ledgers.\n",(0,n.kt)("inlineCode",{parentName:"p"},"bin/bookkeeper shell listunderreplicated"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Stop the bookie by killing the bookie process. Make sure that no liveness/readiness probes setup for the bookies to spin them back up if you deploy it in a Kubernetes environment.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the decommission command."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you have logged in to the node to be decommissioned, you do not need to provide ",(0,n.kt)("inlineCode",{parentName:"li"},"-bookieid"),"."),(0,n.kt)("li",{parentName:"ul"},"If you are running the decommission command for the target bookie node from another bookie node, you should mention the target bookie ID in the arguments for ",(0,n.kt)("inlineCode",{parentName:"li"},"-bookieid"),(0,n.kt)("inlineCode",{parentName:"li"},"bin/bookkeeper shell decommissionbookie"),"\nor\n",(0,n.kt)("inlineCode",{parentName:"li"},"bin/bookkeeper shell decommissionbookie -bookieid <target bookieid>")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Validate that no ledgers are on the decommissioned bookie.\n",(0,n.kt)("inlineCode",{parentName:"p"},"bin/bookkeeper shell listledgers -bookieid <target bookieid>")))),(0,n.kt)("p",null,"You can run the following command to check if the bookie you have decommissioned is listed:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"bin/bookkeeper shell listbookies -rw -h\nbin/bookkeeper shell listbookies -ro -h\n")),(0,n.kt)("h2",{id:"bookkeeper-persistence-policies"},"BookKeeper persistence policies"),(0,n.kt)("p",null,"In Pulsar, you can set ",(0,n.kt)("em",{parentName:"p"},"persistence policies")," at the namespace level, which determines how BookKeeper handles persistent storage of messages. Policies determine four things:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ensemble (E) size, Number of ",(0,n.kt)("a",{parentName:"li",href:"/docs/next/reference-terminology#bookie"},"bookies")," to use for storing entries in a ledger."),(0,n.kt)("li",{parentName:"ul"},"Write quorum (Q",(0,n.kt)("sub",null,"w"),") size, Replication factor for storing entries (messages) in a ledger."),(0,n.kt)("li",{parentName:"ul"},"Ack quorum (Q",(0,n.kt)("sub",null,"a"),") size, Number of guaranteed copies (acks to wait for before a write is considered completed)."),(0,n.kt)("li",{parentName:"ul"},"The throttling rate for mark-delete operations.")),(0,n.kt)("h3",{id:"set-persistence-policies"},"Set persistence policies"),(0,n.kt)("p",null,"You can set persistence policies for BookKeeper at the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#namespace"},"namespace")," level."),(0,n.kt)(o.Z,{groupId:"policies",defaultValue:"Pulsar-admin",values:[{label:"Pulsar-admin",value:"Pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Pulsar-admin",mdxType:"TabItem"},(0,n.kt)("p",null,"Use the ",(0,n.kt)("a",{parentName:"p",href:"pathname:///reference/#/next/pulsar-admin/namespaces?id=set-persistence"},(0,n.kt)("inlineCode",{parentName:"a"},"set-persistence"))," subcommand and specify a namespace as well as any policies that you want to apply. The available flags are:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Flag"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"-e"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"--bookkeeper-ensemble")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Ensemble (E) size, Number of ",(0,n.kt)("a",{parentName:"td",href:"reference-terminology.md#bookie"},"bookies")," to use for storing entries in a ledger."),(0,n.kt)("td",{parentName:"tr",align:"left"},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"-w"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"--bookkeeper-write-quorum")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Write quorum (Q",(0,n.kt)("sub",null,"w"),") size, Replication factor for storing entries (messages) in a ledger."),(0,n.kt)("td",{parentName:"tr",align:"left"},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"-a"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"--bookkeeper-ack-quorum")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Ack quorum (Q",(0,n.kt)("sub",null,"a"),") size, Number of guaranteed copies (acks to wait for before a write is considered completed)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"-r"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"--ml-mark-delete-max-rate")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Throttling rate for mark-delete operations (0 means no throttle)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0")))),(0,n.kt)("p",null,"Please notice that sticky reads enabled by ",(0,n.kt)("inlineCode",{parentName:"p"},"bookkeeperEnableStickyReads=true")," are not used unless ensemble size (E) equals write quorum (Q",(0,n.kt)("sub",null,"w"),") size. Sticky reads improve the efficiency of the Bookkeeper read ahead cache when all reads for a single ledger are sent to a single bookie."),(0,n.kt)("p",null,"Some rules for choosing the values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rule"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"E >= Q",(0,n.kt)("sub",null,"w")," >= Q",(0,n.kt)("sub",null,"a")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Ensemble size must be larger or equal than write quorum size, write quorum size must be larger or equal than ack quorum size.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Max bookie failures = Q",(0,n.kt)("sub",null,"a"),"-1,"),(0,n.kt)("td",{parentName:"tr",align:"left"},"This rule must be fulfilled if data durability is desired in case of bookie failures. To safely tolerate at least one bookie failure at a time in the ensemble, Q",(0,n.kt)("sub",null,"a")," must be set to a value at least 2.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"E == Q",(0,n.kt)("sub",null,"w")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sticky reads enabled by ",(0,n.kt)("inlineCode",{parentName:"td"},"bookkeeperEnableStickyReads=true")," aren't used unless ensemble size (E) equals write quorum (Q",(0,n.kt)("sub",null,"w"),") size.")))),(0,n.kt)("p",null,"The following is an example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin namespaces set-persistence my-tenant/my-ns \\\n--bookkeeper-ensemble 3 \\\n--bookkeeper-write-quorum 3 \\\n--bookkeeper-ack-quorum 3\n")),(0,n.kt)("p",null,"Short example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin namespaces set-persistence my-tenant/my-ns -e 3 -w 3 -a 3\n"))),(0,n.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.1.2&apiversion=v2#operation/setPersistence"},"POST /admin/v2/namespaces/:tenant/:namespace/persistence/setPersistence"))),(0,n.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// The following must be true: bkEnsemble >= bkWriteQuorum >= bkAckQuorum\n// Please notice that sticky reads cannot be used unless bkEnsemble == bkWriteQuorum.\nint bkEnsemble = 3;\nint bkWriteQuorum = 3;\nint bkAckQuorum = 3;\ndouble markDeleteRate = 0.7;\nPersistencePolicies policies =\n  new PersistencePolicies(bkEnsemble, bkWriteQuorum, bkAckQuorum, markDeleteRate);\nadmin.namespaces().setPersistence(namespace, policies);\n")))),(0,n.kt)("h3",{id:"list-persistence-policies"},"List persistence policies"),(0,n.kt)("p",null,"You can see which persistence policy currently applies to a namespace."),(0,n.kt)(o.Z,{groupId:"policies",defaultValue:"Pulsar-admin",values:[{label:"Pulsar-admin",value:"Pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Pulsar-admin",mdxType:"TabItem"},(0,n.kt)("p",null,"Use the ",(0,n.kt)("a",{parentName:"p",href:"pathname:///reference/#/next/pulsar-admin/namespaces?id=get-persistence"},(0,n.kt)("inlineCode",{parentName:"a"},"get-persistence"))," subcommand and specify the namespace."),(0,n.kt)("p",null,"The following is an example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'pulsar-admin namespaces get-persistence my-tenant/my-ns\n{\n  "bookkeeperEnsemble": 1,\n  "bookkeeperWriteQuorum": 1,\n  "bookkeeperAckQuorum", 1,\n  "managedLedgerMaxMarkDeleteRate": 0\n}\n'))),(0,n.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.1.2&apiversion=v2#operation/getPersistence"},"GET /admin/v2/namespaces/:tenant/:namespace/persistence/getPersistence"))),(0,n.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"PersistencePolicies policies = admin.namespaces().getPersistence(namespace);\n")))))}k.isMDXComponent=!0},83258:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/pulsar-system-architecture-6890df6b0c59a065a56492659ba87933.png"},88040:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/zookeeper-batching-de05ac49b05431155d275bd026b18c0a.png"}}]);