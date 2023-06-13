"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[41862],{3905:(e,a,r)=>{r.d(a,{Zo:()=>p,kt:()=>f});var t=r(67294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=t.createContext({}),u=function(e){var a=t.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},p=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return r?t.createElement(f,o(o({ref:a},p),{},{components:r})):t.createElement(f,o({ref:a},p))}));function f(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,a,r)=>{r.d(a,{Z:()=>o});var t=r(67294),n=r(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:r,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:r},a)}},74866:(e,a,r)=>{r.d(a,{Z:()=>T});var t=r(87462),n=r(67294),l=r(86010),o=r(12466),i=r(16550),s=r(91980),u=r(67392),p=r(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:r,attributes:t,default:n}}=e;return{value:a,label:r,attributes:t,default:n}}))}function m(e){const{values:a,children:r}=e;return(0,n.useMemo)((()=>{const e=a??c(r);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,r])}function d(e){let{value:a,tabValues:r}=e;return r.some((e=>e.value===a))}function f(e){let{queryString:a=!1,groupId:r}=e;const t=(0,i.k6)(),l=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(t.location.search);a.set(l,e),t.replace({...t.location,search:a.toString()})}),[l,t])]}function k(e){const{defaultValue:a,queryString:r=!1,groupId:t}=e,l=m(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:l}))),[s,u]=f({queryString:r,groupId:t}),[c,k]=function(e){let{groupId:a}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,l]=(0,p.Nk)(r);return[t,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:t}),b=(()=>{const e=s??c;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),k(e)}),[u,k,l]),tabValues:l}}var b=r(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:a,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const a=e.currentTarget,r=p.indexOf(a),t=u[r].value;t!==i&&(c(a),s(t))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;a=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;a=p[r]??p[p.length-1];break}}a?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},a)},u.map((e=>{let{value:a,label:r,attributes:o}=e;return n.createElement("li",(0,t.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>p.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":i===a})}),r??a)})))}function h(e){let{lazy:a,children:r,selectedValue:t}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function y(e){const a=k(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},n.createElement(v,(0,t.Z)({},e,a)),n.createElement(h,(0,t.Z)({},e,a)))}function T(e){const a=(0,b.Z)();return n.createElement(y,(0,t.Z)({key:String(a)},e))}},24747:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var t=r(87462),n=(r(67294),r(3905)),l=r(74866),o=r(85162);const i={id:"admin-api-brokers",title:"Managing Brokers",sidebar_label:"Brokers",original_id:"admin-api-brokers"},s=void 0,u={unversionedId:"admin-api-brokers",id:"version-2.7.2/admin-api-brokers",title:"Managing Brokers",description:"Pulsar brokers consist of two components:",source:"@site/versioned_docs/version-2.7.2/admin-api-brokers.md",sourceDirName:".",slug:"/admin-api-brokers",permalink:"/docs/2.7.2/admin-api-brokers",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.2/admin-api-brokers.md",tags:[],version:"2.7.2",frontMatter:{id:"admin-api-brokers",title:"Managing Brokers",sidebar_label:"Brokers",original_id:"admin-api-brokers"},sidebar:"version-2.7.2/docsSidebar",previous:{title:"Tenants",permalink:"/docs/2.7.2/admin-api-tenants"},next:{title:"Namespaces",permalink:"/docs/2.7.2/admin-api-namespaces"}},p={},c=[{value:"Brokers resources",id:"brokers-resources",level:2},{value:"List active brokers",id:"list-active-brokers",level:3},{value:"list of namespaces owned by a given broker",id:"list-of-namespaces-owned-by-a-given-broker",level:4},{value:"Dynamic broker configuration",id:"dynamic-broker-configuration",level:3},{value:"Update dynamic configuration",id:"update-dynamic-configuration",level:3},{value:"List updated values",id:"list-updated-values",level:3},{value:"List all",id:"list-all",level:3}],m={toc:c},d="wrapper";function f(e){let{components:a,...r}=e;return(0,n.kt)(d,(0,t.Z)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Pulsar brokers consist of two components:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"An HTTP server exposing a ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," interface administration and ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.7.2/reference-terminology#topic"},"topic")," lookup."),(0,n.kt)("li",{parentName:"ol"},"A dispatcher that handles all Pulsar ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.7.2/reference-terminology#message"},"message")," transfers.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/2.7.2/reference-terminology#broker"},"Brokers")," can be managed via:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.7.2/reference-pulsar-admin#brokers"},(0,n.kt)("inlineCode",{parentName:"a"},"brokers"))," command of the ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.7.2/reference-pulsar-admin"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"/admin/v2/brokers")," endpoint of the admin ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"brokers")," method of the ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdmin.html"},"PulsarAdmin")," object in the ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.7.2/client-libraries-java"},"Java API"))),(0,n.kt)("p",null,"In addition to being configurable when you start them up, brokers can also be ",(0,n.kt)("a",{parentName:"p",href:"#dynamic-broker-configuration"},"dynamically configured"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"See the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.7.2/reference-configuration#broker"},"Configuration")," page for a full listing of broker-specific configuration parameters.")),(0,n.kt)("h2",{id:"brokers-resources"},"Brokers resources"),(0,n.kt)("h3",{id:"list-active-brokers"},"List active brokers"),(0,n.kt)("p",null,"Fetch all available active brokers that are serving traffic."),(0,n.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers list use\n\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\nbroker1.use.org.com:8080\n\n"))),(0,n.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.7.2&apiversion=v2#operation/getActiveBrokers"},"GET /admin/v2/brokers/:cluster/getActiveBrokers"))),(0,n.kt)(o.Z,{value:"JAVA",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getActiveBrokers(clusterName)\n\n")))),(0,n.kt)("h4",{id:"list-of-namespaces-owned-by-a-given-broker"},"list of namespaces owned by a given broker"),(0,n.kt)("p",null,"It finds all namespaces which are owned and served by a given broker."),(0,n.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers namespaces use \\\n  --url broker1.use.org.com:8080\n\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "my-property/use/my-ns/0x00000000_0xffffffff": {\n    "broker_assignment": "shared",\n    "is_controlled": false,\n    "is_active": true\n  }\n}\n\n'))),(0,n.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.7.2&apiversion=v2#operation/getOwnedNamespaes"},"GET /admin/v2/brokers/:cluster/:broker/ownedNamespaces/getOwnedNamespaes"))),(0,n.kt)(o.Z,{value:"JAVA",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getOwnedNamespaces(cluster,brokerUrl);\n\n")))),(0,n.kt)("h3",{id:"dynamic-broker-configuration"},"Dynamic broker configuration"),(0,n.kt)("p",null,"One way to configure a Pulsar ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.7.2/reference-terminology#broker"},"broker")," is to supply a ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.7.2/reference-configuration#broker"},"configuration")," when the broker is ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.7.2/reference-cli-tools#pulsar-broker"},"started up"),"."),(0,n.kt)("p",null,"But since all broker configuration in Pulsar is stored in ZooKeeper, configuration values can also be dynamically updated ",(0,n.kt)("em",{parentName:"p"},"while the broker is running"),". When you update broker configuration dynamically, ZooKeeper will notify the broker of the change and the broker will then override any existing configuration values."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.7.2/reference-pulsar-admin#brokers"},(0,n.kt)("inlineCode",{parentName:"a"},"brokers"))," command for the ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.7.2/reference-pulsar-admin"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool has a variety of subcommands that enable you to manipulate a broker's configuration dynamically, enabling you to ",(0,n.kt)("a",{parentName:"li",href:"#update-dynamic-configuration"},"update config values")," and more."),(0,n.kt)("li",{parentName:"ul"},"In the Pulsar admin ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API, dynamic configuration is managed through the ",(0,n.kt)("inlineCode",{parentName:"li"},"/admin/v2/brokers/configuration")," endpoint.")),(0,n.kt)("h3",{id:"update-dynamic-configuration"},"Update dynamic configuration"),(0,n.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#brokers-update-dynamic-config"},(0,n.kt)("inlineCode",{parentName:"a"},"update-dynamic-config"))," subcommand will update existing configuration. It takes two arguments: the name of the parameter and the new value using the ",(0,n.kt)("inlineCode",{parentName:"p"},"config")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"value")," flag respectively. Here's an example for the ",(0,n.kt)("a",{parentName:"p",href:"reference-configuration.md#broker-brokerShutdownTimeoutMs"},(0,n.kt)("inlineCode",{parentName:"a"},"brokerShutdownTimeoutMs"))," parameter:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers update-dynamic-config --config brokerShutdownTimeoutMs --value 100\n\n"))),(0,n.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.7.2&apiversion=v2#operation/updateDynamicConfiguration"},"POST /admin/v2/brokers/configuration/:configName/:configValue/updateDynamicConfiguration"))),(0,n.kt)(o.Z,{value:"JAVA",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().updateDynamicConfiguration(configName, configValue);\n\n")))),(0,n.kt)("h3",{id:"list-updated-values"},"List updated values"),(0,n.kt)("p",null,"Fetch a list of all potentially updatable configuration parameters."),(0,n.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers list-dynamic-config\nbrokerShutdownTimeoutMs\n\n"))),(0,n.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.7.2&apiversion=v2#operation/getDynamicConfigurationName"},"GET /admin/v2/brokers/configuration/getDynamicConfigurationName"))),(0,n.kt)(o.Z,{value:"JAVA",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getDynamicConfigurationNames();\n\n")))),(0,n.kt)("h3",{id:"list-all"},"List all"),(0,n.kt)("p",null,"Fetch a list of all parameters that have been dynamically updated."),(0,n.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers get-all-dynamic-config\nbrokerShutdownTimeoutMs:100\n\n"))),(0,n.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.7.2&apiversion=v2#operation/getAllDynamicConfigurations"},"GET /admin/v2/brokers/configuration/values/getAllDynamicConfigurations"))),(0,n.kt)(o.Z,{value:"JAVA",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getAllDynamicConfigurations();\n\n")))))}f.isMDXComponent=!0}}]);