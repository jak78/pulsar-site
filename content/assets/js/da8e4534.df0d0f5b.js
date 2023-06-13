"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1278],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>f});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),o=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=o(e.components);return n.createElement(i.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=o(t),d=r,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return t?n.createElement(f,s(s({ref:a},p),{},{components:t})):n.createElement(f,s({ref:a},p))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=d;var u={};for(var i in a)hasOwnProperty.call(a,i)&&(u[i]=a[i]);u.originalType=e,u[m]="string"==typeof e?e:r,s[1]=u;for(var o=2;o<l;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(67294),r=t(86010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:a,hidden:t,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:t},a)}},74866:(e,a,t)=>{t.d(a,{Z:()=>y});var n=t(87462),r=t(67294),l=t(86010),s=t(12466),u=t(16550),i=t(91980),o=t(67392),p=t(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function c(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??m(t);return function(e){const a=(0,o.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function d(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function f(e){let{queryString:a=!1,groupId:t}=e;const n=(0,u.k6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(n.location.search);a.set(l,e),n.replace({...n.location,search:a.toString()})}),[l,n])]}function v(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,l=c(e),[s,u]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[i,o]=f({queryString:t,groupId:n}),[m,v]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,l]=(0,p.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:n}),b=(()=>{const e=i??m;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),o(e),v(e)}),[o,v,l]),tabValues:l}}var b=t(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:a,block:t,selectedValue:u,selectValue:i,tabValues:o}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),c=e=>{const a=e.currentTarget,t=p.indexOf(a),n=o[t].value;n!==u&&(m(a),i(n))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},a)},o.map((e=>{let{value:a,label:t,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===a?0:-1,"aria-selected":u===a,key:a,ref:e=>p.push(e),onKeyDown:d,onClick:c},s,{className:(0,l.Z)("tabs__item",k.tabItem,s?.className,{"tabs__item--active":u===a})}),t??a)})))}function g(e){let{lazy:a,children:t,selectedValue:n}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function T(e){const a=v(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(h,(0,n.Z)({},e,a)),r.createElement(g,(0,n.Z)({},e,a)))}function y(e){const a=(0,b.Z)();return r.createElement(T,(0,n.Z)({key:String(a)},e))}},33785:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>u,metadata:()=>o,toc:()=>m});var n=t(87462),r=(t(67294),t(3905)),l=t(74866),s=t(85162);const u={id:"admin-api-tenants",title:"Managing Tenants",sidebar_label:"Tenants"},i=void 0,o={unversionedId:"admin-api-tenants",id:"version-2.3.1/admin-api-tenants",title:"Managing Tenants",description:"Important",source:"@site/versioned_docs/version-2.3.1/admin-api-tenants.md",sourceDirName:".",slug:"/admin-api-tenants",permalink:"/docs/2.3.1/admin-api-tenants",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.1/admin-api-tenants.md",tags:[],version:"2.3.1",frontMatter:{id:"admin-api-tenants",title:"Managing Tenants",sidebar_label:"Tenants"},sidebar:"version-2.3.1/docsSidebar",previous:{title:"Clusters",permalink:"/docs/2.3.1/admin-api-clusters"},next:{title:"Brokers",permalink:"/docs/2.3.1/admin-api-brokers"}},p={},m=[{value:"Tenant resources",id:"tenant-resources",level:2},{value:"List",id:"list",level:3},{value:"Create",id:"create",level:3},{value:"Get configuration",id:"get-configuration",level:3},{value:"Delete",id:"delete",level:3},{value:"Update",id:"update",level:3}],c={toc:m},d="wrapper";function f(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important")),(0,r.kt)("p",{parentName:"blockquote"},"This page only shows ",(0,r.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,r.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see Pulsar admin doc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,r.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,r.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/"},"Java admin API doc"),".")))),(0,r.kt)("p",null,"Tenants, like namespaces, can be managed using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/admin-api-overview"},"admin API"),". There are currently two configurable aspects of tenants:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Admin roles"),(0,r.kt)("li",{parentName:"ul"},"Allowed clusters")),(0,r.kt)("h2",{id:"tenant-resources"},"Tenant resources"),(0,r.kt)("h3",{id:"list"},"List"),(0,r.kt)("p",null,"You can list all of the tenants associated with an ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/reference-terminology#instance"},"instance"),"."),(0,r.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#tenants-list"},(0,r.kt)("inlineCode",{parentName:"a"},"list"))," subcommand."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants list\nmy-tenant-1\nmy-tenant-2\n\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.3.1&apiversion=v2#operation/getTenants"},"GET /admin/v2/tenants/getTenants"))),(0,r.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.tenants().getTenants();\n\n")))),(0,r.kt)("h3",{id:"create"},"Create"),(0,r.kt)("p",null,"You can create a new tenant."),(0,r.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#tenants-create"},(0,r.kt)("inlineCode",{parentName:"a"},"create"))," subcommand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants create my-tenant\n\n")),(0,r.kt)("p",null,"When creating a tenant, you can optionally assign admin roles using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-r"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"--admin-roles"),"\nflag, and clusters using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-c"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"--allowed-clusters")," flag. You can specify multiple values\nas a comma-separated list. Here are some examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants create my-tenant \\\n  --admin-roles role1,role2,role3 \\\n  --allowed-clusters cluster1\n\n$ pulsar-admin tenants create my-tenant \\\n  -r role1\n  -c cluster1\n\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.3.1&apiversion=v2#operation/createTenant"},"PUT /admin/v2/tenants/:tenant/createTenant"))),(0,r.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.tenants().createTenant(tenantName, tenantInfo);\n\n")))),(0,r.kt)("h3",{id:"get-configuration"},"Get configuration"),(0,r.kt)("p",null,"You can fetch the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/reference-configuration"},"configuration")," for an existing tenant at any time."),(0,r.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#tenants-get"},(0,r.kt)("inlineCode",{parentName:"a"},"get"))," subcommand and specify the name of the tenant. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin tenants get my-tenant\n{\n  "adminRoles": [\n    "admin1",\n    "admin2"\n  ],\n  "allowedClusters": [\n    "cl1",\n    "cl2"\n  ]\n}\n\n'))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.3.1&apiversion=v2#operation/getTenant"},"GET /admin/v2/tenants/:tenant/getTenant"))),(0,r.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.tenants().getTenantInfo(tenantName);\n\n")))),(0,r.kt)("h3",{id:"delete"},"Delete"),(0,r.kt)("p",null,"Tenants can be deleted from a Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/reference-terminology#instance"},"instance"),"."),(0,r.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#tenants-delete"},(0,r.kt)("inlineCode",{parentName:"a"},"delete"))," subcommand and specify the name of the tenant."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants delete my-tenant\n\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.3.1&apiversion=v2#operation/deleteTenant"},"DELETE /admin/v2/tenants/:tenant/deleteTenant"))),(0,r.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.Tenants().deleteTenant(tenantName);\n\n")))),(0,r.kt)("h3",{id:"update"},"Update"),(0,r.kt)("p",null,"You can update a tenant's configuration."),(0,r.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#tenants-update"},(0,r.kt)("inlineCode",{parentName:"a"},"update"))," subcommand."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants update my-tenant\n\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.3.1&apiversion=v2#operation/updateTenant"},"POST /admin/v2/tenants/:tenant/updateTenant"))),(0,r.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.tenants().updateTenant(tenantName, tenantInfo);\n\n")))))}f.isMDXComponent=!0}}]);