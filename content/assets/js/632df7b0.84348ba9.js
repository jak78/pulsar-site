"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8018],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>k});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),p=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},m=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(l,".").concat(d)]||u[d]||c[d]||s;return n?t.createElement(k,o(o({ref:a},m),{},{components:n})):t.createElement(k,o({ref:a},m))}));function k(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,a,n)=>{n.d(a,{Z:()=>o});var t=n(67294),r=n(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:n,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n},a)}},74866:(e,a,n)=>{n.d(a,{Z:()=>N});var t=n(87462),r=n(67294),s=n(86010),o=n(12466),i=n(16550),l=n(91980),p=n(67392),m=n(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}function c(e){const{values:a,children:n}=e;return(0,r.useMemo)((()=>{const e=a??u(n);return function(e){const a=(0,p.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function d(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function k(e){let{queryString:a=!1,groupId:n}=e;const t=(0,i.k6)(),s=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(t.location.search);a.set(s,e),t.replace({...t.location,search:a.toString()})}),[s,t])]}function f(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,s=c(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:s}))),[l,p]=k({queryString:n,groupId:t}),[u,f]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,s]=(0,m.Nk)(n);return[t,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:t}),v=(()=>{const e=l??u;return d({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),f(e)}),[p,f,s]),tabValues:s}}var v=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:a,block:n,selectedValue:i,selectValue:l,tabValues:p}=e;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const a=e.currentTarget,n=m.indexOf(a),t=p[n].value;t!==i&&(u(a),l(t))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;a=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;a=m[n]??m[m.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},a)},p.map((e=>{let{value:a,label:n,attributes:o}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>m.push(e),onKeyDown:d,onClick:c},o,{className:(0,s.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":i===a})}),n??a)})))}function g(e){let{lazy:a,children:n,selectedValue:t}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=s.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function y(e){const a=f(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",h.tabList)},r.createElement(b,(0,t.Z)({},e,a)),r.createElement(g,(0,t.Z)({},e,a)))}function N(e){const a=(0,v.Z)();return r.createElement(y,(0,t.Z)({key:String(a)},e))}},96522:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var t=n(87462),r=(n(67294),n(3905)),s=n(74866),o=n(85162);const i={id:"admin-api-permissions",title:"Managing permissions",sidebar_label:"Permissions"},l=void 0,p={unversionedId:"admin-api-permissions",id:"version-2.3.2/admin-api-permissions",title:"Managing permissions",description:"Important",source:"@site/versioned_docs/version-2.3.2/admin-api-permissions.md",sourceDirName:".",slug:"/admin-api-permissions",permalink:"/docs/2.3.2/admin-api-permissions",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.2/admin-api-permissions.md",tags:[],version:"2.3.2",frontMatter:{id:"admin-api-permissions",title:"Managing permissions",sidebar_label:"Permissions"},sidebar:"version-2.3.2/docsSidebar",previous:{title:"Namespaces",permalink:"/docs/2.3.2/admin-api-namespaces"},next:{title:"Persistent topics",permalink:"/docs/2.3.2/admin-api-persistent-topics"}},m={},u=[{value:"Grant permissions",id:"grant-permissions",level:2},{value:"Get permissions",id:"get-permissions",level:2},{value:"Revoke permissions",id:"revoke-permissions",level:2}],c={toc:u},d="wrapper";function k(e){let{components:a,...n}=e;return(0,r.kt)(d,(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important")),(0,r.kt)("p",{parentName:"blockquote"},"This page only shows ",(0,r.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,r.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see Pulsar admin doc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,r.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,r.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/"},"Java admin API doc"),".")))),(0,r.kt)("p",null,"Pulsar allows you to grant namespace-level or topic-level permission to users."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you grant a namespace-level permission to a user, then the user can access all the topics under the namespace.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you grant a topic-level permission to a user, then the user can access only the topic."))),(0,r.kt)("p",null,"The chapters below demonstrate how to grant namespace-level permissions to users. For how to grant topic-level permissions to users, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.2/admin-api-topics/#grant-permission"},"manage topics"),"."),(0,r.kt)("h2",{id:"grant-permissions"},"Grant permissions"),(0,r.kt)("p",null,"You can grant permissions to specific roles for lists of operations such as ",(0,r.kt)("inlineCode",{parentName:"p"},"produce")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"consume"),"."),(0,r.kt)(s.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#grant-permission"},(0,r.kt)("inlineCode",{parentName:"a"},"grant-permission"))," subcommand and specify a namespace, actions using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--actions")," flag, and a role using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--role")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces grant-permission test-tenant/ns1 \\\n  --actions produce,consume \\\n  --role admin10\n\n")),(0,r.kt)("p",null,"Wildcard authorization can be performed when ",(0,r.kt)("inlineCode",{parentName:"p"},"authorizationAllowWildcardsMatching")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf"),"."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces grant-permission test-tenant/ns1 \\\n                        --actions produce,consume \\\n                        --role 'my.role.*'\n\n")),(0,r.kt)("p",null,"Then, roles ",(0,r.kt)("inlineCode",{parentName:"p"},"my.role.1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"my.role.2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"my.role.foo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"my.role.bar"),", etc. can produce and consume."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces grant-permission test-tenant/ns1 \\\n                        --actions produce,consume \\\n                        --role '*.role.my'\n\n")),(0,r.kt)("p",null,"Then, roles ",(0,r.kt)("inlineCode",{parentName:"p"},"1.role.my"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"2.role.my"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"foo.role.my"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bar.role.my"),", etc. can produce and consume."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": A wildcard matching works at ",(0,r.kt)("strong",{parentName:"p"},"the beginning or end of the role name only"),"."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces grant-permission test-tenant/ns1 \\\n                        --actions produce,consume \\\n                        --role 'my.*.role'\n\n")),(0,r.kt)("p",null,"In this case, only the role ",(0,r.kt)("inlineCode",{parentName:"p"},"my.*.role")," has permissions.\nRoles ",(0,r.kt)("inlineCode",{parentName:"p"},"my.1.role"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"my.2.role"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"my.foo.role"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"my.bar.role"),", etc. ",(0,r.kt)("strong",{parentName:"p"},"cannot")," produce and consume.")),(0,r.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.3.2&apiversion=v2#operation/grantPermissionOnNamespace"},"POST /admin/v2/namespaces/:tenant/:namespace/permissions/:role/grantPermissionOnNamespace"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().grantPermissionOnNamespace(namespace, role, getAuthActions(actions));\n\n")))),(0,r.kt)("h2",{id:"get-permissions"},"Get permissions"),(0,r.kt)("p",null,"You can see which permissions have been granted to which roles in a namespace."),(0,r.kt)(s.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"reference-pulsar-admin#permissions"},(0,r.kt)("inlineCode",{parentName:"a"},"permissions"))," subcommand and specify a namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin namespaces permissions test-tenant/ns1\n{\n  "admin10": [\n    "produce",\n    "consume"\n  ]\n}\n\n'))),(0,r.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.3.2&apiversion=v2#operation/getPermissions"},"GET /admin/v2/namespaces/:tenant/:namespace/permissions/getPermissions"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().getPermissions(namespace);\n\n")))),(0,r.kt)("h2",{id:"revoke-permissions"},"Revoke permissions"),(0,r.kt)("p",null,"You can revoke permissions from specific roles, which means that those roles will no longer have access to the specified namespace."),(0,r.kt)(s.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#revoke-permission"},(0,r.kt)("inlineCode",{parentName:"a"},"revoke-permission"))," subcommand and specify a namespace and a role using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--role")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces revoke-permission test-tenant/ns1 \\\n  --role admin10\n\n"))),(0,r.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.3.2&apiversion=v2#operation/revokePermissionsOnNamespace"},"DELETE /admin/v2/namespaces/:tenant/:namespace/permissions/:role/revokePermissionsOnNamespace"))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().revokePermissionsOnNamespace(namespace, role);\n\n")))))}k.isMDXComponent=!0}}]);