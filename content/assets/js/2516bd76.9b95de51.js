"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2101],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),i=a(86010),l=a(12466),o=a(16550),s=a(91980),c=a(67392),p=a(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=d(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,c]=h({queryString:a,groupId:n}),[u,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),k=(()=>{const e=s??u;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),g(e)}),[c,g,i]),tabValues:i}}var k=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==o&&(u(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":o===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},77761:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),i=a(74866),l=a(85162);const o={id:"administration-geo",title:"Pulsar geo-replication",sidebar_label:"Geo-replication"},s=void 0,c={unversionedId:"administration-geo",id:"version-2.3.0/administration-geo",title:"Pulsar geo-replication",description:"Enable geo-replication for a namespace",source:"@site/versioned_docs/version-2.3.0/administration-geo.md",sourceDirName:".",slug:"/administration-geo",permalink:"/docs/2.3.0/administration-geo",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.0/administration-geo.md",tags:[],version:"2.3.0",frontMatter:{id:"administration-geo",title:"Pulsar geo-replication",sidebar_label:"Geo-replication"},sidebar:"version-2.3.0/docsSidebar",previous:{title:"ZooKeeper and BookKeeper",permalink:"/docs/2.3.0/administration-zk-bk"},next:{title:"Dashboard",permalink:"/docs/2.3.0/administration-dashboard"}},p={},u=[{value:"Enable geo-replication for a namespace",id:"enable-geo-replication-for-a-namespace",level:2},{value:"Local persistence and forwarding",id:"local-persistence-and-forwarding",level:2},{value:"Configure replication",id:"configure-replication",level:2},{value:"Connect replication clusters",id:"connect-replication-clusters",level:3},{value:"Grant permissions to properties",id:"grant-permissions-to-properties",level:3},{value:"Enable geo-replication",id:"enable-geo-replication",level:3},{value:"Enable geo-replication at namespace level",id:"enable-geo-replication-at-namespace-level",level:4},{value:"Use topics with geo-replication",id:"use-topics-with-geo-replication",level:3},{value:"Selective replication",id:"selective-replication",level:4},{value:"Topic stats",id:"topic-stats",level:4},{value:"Delete a geo-replication topic",id:"delete-a-geo-replication-topic",level:4},{value:"Replicated subscriptions",id:"replicated-subscriptions",level:2},{value:"Enable replicated subscription",id:"enable-replicated-subscription",level:3},{value:"Advantages",id:"advantages",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Migrate data between clusters using geo-replication",id:"migrate-data-between-clusters-using-geo-replication",level:2}],d={toc:u},m="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"enable-geo-replication-for-a-namespace"},"Enable geo-replication for a namespace"),(0,r.kt)("p",null,"You must enable geo-replication on a ",(0,r.kt)("a",{parentName:"p",href:"#concepts-multi-tenancy"},"per-tenant basis")," in Pulsar. For example, you can enable geo-replication between two specific clusters only when a tenant has access to both clusters."),(0,r.kt)("p",null,"Geo-replication is managed at the namespace level, which means you only need to create and configure a namespace to replicate messages between two or more provisioned clusters that a tenant can access."),(0,r.kt)("p",null,"Complete the following tasks to enable geo-replication for a namespace:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enable-geo-replication-at-namespace-level"},"Enable a geo-replication namespace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/2.3.0/admin-api-namespaces/#configure-replication-clusters"},"Configure that namespace to replicate across two or more provisioned clusters"))),(0,r.kt)("p",null,"Any message published on ",(0,r.kt)("em",{parentName:"p"},"any")," topic in that namespace is replicated to all clusters in the specified set."),(0,r.kt)("h2",{id:"local-persistence-and-forwarding"},"Local persistence and forwarding"),(0,r.kt)("p",null,"When messages are produced on a Pulsar topic, messages are first persisted in the local cluster, and then forwarded asynchronously to the remote clusters."),(0,r.kt)("p",null,"In normal cases, when connectivity issues are none, messages are replicated immediately, at the same time as they are dispatched to local consumers. Typically, the network ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-trip_delay_time"},"round-trip time")," (RTT) between the remote regions defines end-to-end delivery latency."),(0,r.kt)("p",null,"Applications can create producers and consumers in any of the clusters, even when the remote clusters are not reachable (like during a network partition)."),(0,r.kt)("p",null,"Producers and consumers can publish messages to and consume messages from any cluster in a Pulsar instance. However, subscriptions cannot only be local to the cluster where the subscriptions are created but also can be transferred between clusters after replicated subscription is enabled. Once replicated subscription is enabled, you can keep subscription state in synchronization. Therefore, a topic can be asynchronously replicated across multiple geographical regions. In case of failover, a consumer can restart consuming messages from the failure point in a different cluster."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A typical geo-replication example with full-mesh pattern",src:a(4005).Z,width:"709",height:"349"})),(0,r.kt)("p",null,"In the aforementioned example, the ",(0,r.kt)("strong",{parentName:"p"},"T1")," topic is replicated among three clusters, ",(0,r.kt)("strong",{parentName:"p"},"Cluster-A"),", ",(0,r.kt)("strong",{parentName:"p"},"Cluster-B"),", and ",(0,r.kt)("strong",{parentName:"p"},"Cluster-C"),"."),(0,r.kt)("p",null,"All messages produced in any of the three clusters are delivered to all subscriptions in other clusters. In this case, ",(0,r.kt)("strong",{parentName:"p"},"C1")," and ",(0,r.kt)("strong",{parentName:"p"},"C2")," consumers receive all messages that ",(0,r.kt)("strong",{parentName:"p"},"P1"),", ",(0,r.kt)("strong",{parentName:"p"},"P2"),", and ",(0,r.kt)("strong",{parentName:"p"},"P3")," producers publish. Ordering is still guaranteed on a per-producer basis."),(0,r.kt)("h2",{id:"configure-replication"},"Configure replication"),(0,r.kt)("p",null,"This section guides you through the steps to configure geo-replicated clusters."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#connect-replication-clusters"},"Connect replication clusters")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#grant-permissions-to-properties"},"Grant permissions to properties")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#enable-geo-replication"},"Enable geo-replication")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#use-topics-with-geo-replication"},"Use topics with geo-replication"))),(0,r.kt)("h3",{id:"connect-replication-clusters"},"Connect replication clusters"),(0,r.kt)("p",null,"To replicate data among clusters, you need to configure each cluster to connect to the other. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," tool to create a connection."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Suppose that you have 3 replication clusters: ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"us-cent"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"us-east"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the connection from ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"us-east"),"."),(0,r.kt)("p",{parentName:"li"},"Run the following command on ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin clusters create \\\n  --broker-url pulsar://<DNS-OF-US-EAST>:<PORT> \\\n  --url http://<DNS-OF-US-EAST>:<PORT> \\\n  us-east\n\n")),(0,r.kt)("p",null,"   :::tip"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you want to use a secure connection for a cluster, you can use the flags ",(0,r.kt)("inlineCode",{parentName:"p"},"--broker-url-secure")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--url-secure"),". For more information, see pulsar-admin clusters create.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Different clusters may have different authentications. You can use the authentication flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--auth-plugin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--auth-parameters")," together to set cluster authentication, which overrides ",(0,r.kt)("inlineCode",{parentName:"p"},"brokerClientAuthenticationPlugin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"brokerClientAuthenticationParameters")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"authenticationEnabled")," sets to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"standalone.conf"),". For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.0/concepts-authentication"},"authentication and authorization"),"."),(0,r.kt)("p",{parentName:"li"},":::"))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the connection from ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"us-cent"),"."),(0,r.kt)("p",{parentName:"li"},"Run the following command on ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin clusters create \\\n  --broker-url pulsar://<DNS-OF-US-CENT>:<PORT> \\\n  --url http://<DNS-OF-US-CENT>:<PORT> \\\n  us-cent\n\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Run similar commands on ",(0,r.kt)("inlineCode",{parentName:"li"},"us-east")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"us-cent")," to create connections among clusters.")),(0,r.kt)("h3",{id:"grant-permissions-to-properties"},"Grant permissions to properties"),(0,r.kt)("p",null,"To replicate to a cluster, the tenant needs permission to use that cluster. You can grant permission to the tenant when you create the tenant or grant later."),(0,r.kt)("p",null,"Specify all the intended clusters when you create a tenant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin tenants create my-tenant \\\n  --admin-roles my-admin-role \\\n  --allowed-clusters us-west,us-east,us-cent\n\n")),(0,r.kt)("p",null,"To update permissions of an existing tenant, use ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"create"),"."),(0,r.kt)("h3",{id:"enable-geo-replication"},"Enable geo-replication"),(0,r.kt)("p",null,"You can enable geo-replication at ",(0,r.kt)("strong",{parentName:"p"},"namespace")," or ",(0,r.kt)("strong",{parentName:"p"},"topic")," level."),(0,r.kt)("h4",{id:"enable-geo-replication-at-namespace-level"},"Enable geo-replication at namespace level"),(0,r.kt)("p",null,"You can create a namespace with the following command sample."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin namespaces create my-tenant/my-namespace\n\n")),(0,r.kt)("p",null,"Initially, the namespace is not assigned to any cluster. You can assign the namespace to clusters using the ",(0,r.kt)("inlineCode",{parentName:"p"},"set-clusters")," subcommand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin namespaces set-clusters my-tenant/my-namespace \\\n  --clusters us-west,us-east,us-cent\n\n")),(0,r.kt)("h3",{id:"use-topics-with-geo-replication"},"Use topics with geo-replication"),(0,r.kt)("h4",{id:"selective-replication"},"Selective replication"),(0,r.kt)("p",null,"By default, messages are replicated to all clusters configured for the namespace. You can restrict replication selectively by specifying a replication list for a message, and then that message is replicated only to the subset in the replication list."),(0,r.kt)("p",null,"The following is an example for the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.0/client-libraries-java"},"Java API"),". Note the use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"setReplicationClusters")," method when you construct the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/Message"},"Message")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nList<String> restrictReplicationTo = Arrays.asList(\n        "us-west",\n        "us-east"\n);\n\nProducer producer = client.newProducer()\n        .topic("some-topic")\n        .create();\n\nproducer.newMessage()\n        .value("my-payload".getBytes())\n        .setReplicationClusters(restrictReplicationTo)\n        .send();\n\n')),(0,r.kt)("h4",{id:"topic-stats"},"Topic stats"),(0,r.kt)("p",null,"You can check topic-specific statistics for geo-replication topics using one of the following methods."),(0,r.kt)(i.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics stats")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin topics stats persistent://my-tenant/my-namespace/my-topic\n\n"))),(0,r.kt)(l.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.3.0&apiversion=v2#operation/getStats"},"GET /admin/v2/:schema/:tenant/:namespace/:topic/stats/getStats")))),(0,r.kt)("p",null,"Each cluster reports its own local stats, including the incoming and outgoing replication rates and backlogs."),(0,r.kt)("h4",{id:"delete-a-geo-replication-topic"},"Delete a geo-replication topic"),(0,r.kt)("p",null,"Given that geo-replication topics exist in multiple regions, directly deleting a geo-replication topic is not possible. Instead, you should rely on automatic topic garbage collection."),(0,r.kt)("p",null,"In Pulsar, a topic is automatically deleted when the topic meets the following three conditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"no producers or consumers are connected to it;"),(0,r.kt)("li",{parentName:"ul"},"no subscriptions to it;"),(0,r.kt)("li",{parentName:"ul"},"no more messages are kept for retention.\nFor geo-replication topics, each region uses a fault-tolerant mechanism to decide when deleting the topic locally is safe.")),(0,r.kt)("p",null,"You can explicitly disable topic garbage collection by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"brokerDeleteInactiveTopicsEnabled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in your ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-configuration#broker"},"broker configuration"),"."),(0,r.kt)("p",null,"To delete a geo-replication topic, close all producers and consumers on the topic, and delete all of its local subscriptions in every replication cluster. When Pulsar determines that no valid subscription for the topic remains across the system, it will garbage collect the topic."),(0,r.kt)("h2",{id:"replicated-subscriptions"},"Replicated subscriptions"),(0,r.kt)("p",null,"Pulsar supports replicated subscriptions, so you can keep subscription state in sync, within a sub-second timeframe, in the context of a topic that is being asynchronously replicated across multiple geographical regions."),(0,r.kt)("p",null,"In case of failover, a consumer can restart consuming from the failure point in a different cluster."),(0,r.kt)("h3",{id:"enable-replicated-subscription"},"Enable replicated subscription"),(0,r.kt)("p",null,"Replicated subscription is disabled by default. You can enable replicated subscription when creating a consumer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nConsumer<String> consumer = client.newConsumer(Schema.STRING)\n            .topic("my-topic")\n            .subscriptionName("my-subscription")\n            .replicateSubscriptionState(true)\n            .subscribe();\n\n')),(0,r.kt)("h3",{id:"advantages"},"Advantages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is easy to implement the logic."),(0,r.kt)("li",{parentName:"ul"},"You can choose to enable or disable replicated subscription."),(0,r.kt)("li",{parentName:"ul"},"When you enable it, the overhead is low, and it is easy to configure."),(0,r.kt)("li",{parentName:"ul"},"When you disable it, the overhead is zero.")),(0,r.kt)("h3",{id:"limitations"},"Limitations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When you enable replicated subscription, you're creating a consistent distributed snapshot to establish an association between message ids from different clusters. The snapshots are taken periodically. The default value is ",(0,r.kt)("inlineCode",{parentName:"li"},"1 second"),". It means that a consumer failing over to a different cluster can potentially receive 1 second of duplicates. You can also configure the frequency of the snapshot in the ",(0,r.kt)("inlineCode",{parentName:"li"},"broker.conf")," file."),(0,r.kt)("li",{parentName:"ul"},"Only the base line cursor position is synced in replicated subscriptions while the individual acknowledgments are not synced. This means the messages acknowledged out-of-order could end up getting delivered again, in the case of a cluster failover.")),(0,r.kt)("h2",{id:"migrate-data-between-clusters-using-geo-replication"},"Migrate data between clusters using geo-replication"),(0,r.kt)("p",null,"Using geo-replication to migrate data between clusters is a special use case of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.0/concepts-replication/#active-active-replication"},"active-active replication pattern")," when you don't have a large amount of data."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create your new cluster."),(0,r.kt)("li",{parentName:"ol"},"Add the new cluster to your old cluster.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n  bin/pulsar-admin cluster create new-cluster\n\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Add the new cluster to your tenant.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n  bin/pulsar-admin tenants update my-tenant --cluster old-cluster,new-cluster\n\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Set the clusters on your namespace.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n  bin/pulsar-admin namespaces set-clusters my-tenant/my-ns --cluster old-cluster,new-cluster\n\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Update your applications using ",(0,r.kt)("a",{parentName:"li",href:"#replicated-subscriptions"},"replicated subscriptions"),"."),(0,r.kt)("li",{parentName:"ol"},"Validate subscription replication is active.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n  bin/pulsar-admin topics stats-internal public/default/t1\n\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Move your consumers and producers to the new cluster by modifying the values of ",(0,r.kt)("inlineCode",{parentName:"li"},"serviceURL"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The replication starts from step 4, which means existing messages in your old cluster are not replicated."),(0,r.kt)("li",{parentName:"ul"},"If you have some older messages to migrate, you can pre-create the replication subscriptions for each topic and set it at the earliest position by using ",(0,r.kt)("inlineCode",{parentName:"li"},"pulsar-admin topics create-subscription -s pulsar.repl.new-cluster -m earliest <topic>"),"."))))}h.isMDXComponent=!0},4005:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/geo-replication-34036a887215513a9173d150f92e093e.png"}}]);