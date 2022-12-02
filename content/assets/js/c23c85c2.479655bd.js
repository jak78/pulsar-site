"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[71696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={id:"security-athenz",title:"Authentication using Athenz",sidebar_label:"Authentication using Athenz",original_id:"security-athenz"},i=void 0,s={unversionedId:"security-athenz",id:"version-2.10.x/security-athenz",title:"Authentication using Athenz",description:"Athenz is a role-based authentication/authorization system. In Pulsar, you can use Athenz role tokens (also known as z-tokens) to establish the identify of the client.",source:"@site/versioned_docs/version-2.10.x/security-athenz.md",sourceDirName:".",slug:"/security-athenz",permalink:"/docs/2.10.x/security-athenz",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/security-athenz.md",tags:[],version:"2.10.x",frontMatter:{id:"security-athenz",title:"Authentication using Athenz",sidebar_label:"Authentication using Athenz",original_id:"security-athenz"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"Authentication using JWT",permalink:"/docs/2.10.x/security-jwt"},next:{title:"Authentication using Kerberos",permalink:"/docs/2.10.x/security-kerberos"}},l={},c=[{value:"Athenz authentication settings",id:"athenz-authentication-settings",level:2},{value:"Create the tenant domain and service",id:"create-the-tenant-domain-and-service",level:3},{value:"Create the provider domain and add the tenant service to some role members",id:"create-the-provider-domain-and-add-the-tenant-service-to-some-role-members",level:3},{value:"Configure the broker for Athenz",id:"configure-the-broker-for-athenz",level:2},{value:"Configure clients for Athenz",id:"configure-clients-for-athenz",level:2},{value:"Configure CLI tools for Athenz",id:"configure-cli-tools-for-athenz",level:2}],p={toc:c};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AthenZ/athenz"},"Athenz")," is a role-based authentication/authorization system. In Pulsar, you can use Athenz role tokens (also known as ",(0,r.kt)("em",{parentName:"p"},"z-tokens"),") to establish the identify of the client."),(0,r.kt)("h2",{id:"athenz-authentication-settings"},"Athenz authentication settings"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AthenZ/athenz/blob/master/docs/decent_authz_flow.md"},"decentralized Athenz system")," contains an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AthenZ/athenz/blob/master/docs/setup_zms.md"},"authori",(0,r.kt)("strong",{parentName:"a"},"Z"),"ation ",(0,r.kt)("strong",{parentName:"a"},"M"),"anagement ",(0,r.kt)("strong",{parentName:"a"},"S"),"ystem")," (ZMS) server and an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AthenZ/athenz/blob/master/docs/setup_zts"},"authori",(0,r.kt)("strong",{parentName:"a"},"Z"),"ation ",(0,r.kt)("strong",{parentName:"a"},"T"),"oken ",(0,r.kt)("strong",{parentName:"a"},"S"),"ystem")," (ZTS) server."),(0,r.kt)("p",null,"To begin, you need to set up Athenz service access control. You need to create domains for the ",(0,r.kt)("em",{parentName:"p"},"provider")," (which provides some resources to other services with some authentication/authorization policies) and the ",(0,r.kt)("em",{parentName:"p"},"tenant")," (which is provisioned to access some resources in a provider). In this case, the provider corresponds to the Pulsar service itself and the tenant corresponds to each application using Pulsar (typically, a ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.10.x/reference-terminology#tenant"},"tenant")," in Pulsar)."),(0,r.kt)("h3",{id:"create-the-tenant-domain-and-service"},"Create the tenant domain and service"),(0,r.kt)("p",null,"On the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.10.x/reference-terminology#tenant"},"tenant")," side, you need to do the following things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a domain, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"shopping")),(0,r.kt)("li",{parentName:"ol"},"Generate a private/public key pair"),(0,r.kt)("li",{parentName:"ol"},"Create a service, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"some_app"),", on the domain with the public key")),(0,r.kt)("p",null,"Note that you need to specify the private key generated in step 2 when the Pulsar client connects to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.10.x/reference-terminology#broker"},"broker")," (see client configuration examples for ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.10.x/client-libraries-java#tls-authentication"},"Java")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.10.x/client-libraries-cpp#tls-authentication"},"C++"),")."),(0,r.kt)("p",null,"For more specific steps involving the Athenz UI, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AthenZ/athenz/blob/master/docs/example_service_athenz_setup.md#client-tenant-domain"},"Example Service Access Control Setup"),"."),(0,r.kt)("h3",{id:"create-the-provider-domain-and-add-the-tenant-service-to-some-role-members"},"Create the provider domain and add the tenant service to some role members"),(0,r.kt)("p",null,"On the provider side, you need to do the following things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a domain, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"pulsar")),(0,r.kt)("li",{parentName:"ol"},"Create a role"),(0,r.kt)("li",{parentName:"ol"},"Add the tenant service to members of the role")),(0,r.kt)("p",null,"Note that you can specify any action and resource in step 2 since they are not used on Pulsar. In other words, Pulsar uses the Athenz role token only for authentication, ",(0,r.kt)("em",{parentName:"p"},"not")," for authorization."),(0,r.kt)("p",null,"For more specific steps involving UI, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AthenZ/athenz/blob/master/docs/example_service_athenz_setup.md#server-provider-domain"},"Example Service Access Control Setup"),"."),(0,r.kt)("h2",{id:"configure-the-broker-for-athenz"},"Configure the broker for Athenz"),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"tls-encryption"},"TLS encryption"),(0,r.kt)("p",{parentName:"blockquote"},"Note that when you are using Athenz as an authentication provider, you had better use TLS encryption\nas it can protect role tokens from being intercepted and reused. (for more details involving TLS encryption see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AthenZ/athenz/blob/master/docs/data_model"},"Architecture - Data Model"),").")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," configuration file in your Pulsar installation, you need to provide the class name of the Athenz authentication provider as well as a comma-separated list of provider domain names."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},'\n# Add the Athenz auth provider\nauthenticationEnabled=true\nauthorizationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderAthenz\nathenzDomainNames=pulsar\n\n# Enable TLS\ntlsEnabled=true\ntlsCertificateFilePath=/path/to/broker-cert.pem\ntlsKeyFilePath=/path/to/broker-key.pem\n\n# Authentication settings of the broker itself. Used when the broker connects to other brokers, either in same or other clusters\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationAthenz\nbrokerClientAuthenticationParameters={"tenantDomain":"shopping","tenantService":"some_app","providerDomain":"pulsar","privateKey":"file:///path/to/private.pem","keyId":"v1"}\n\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A full listing of parameters is available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," file, you can also find the default\nvalues for those parameters in ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.10.x/reference-configuration#broker"},"Broker Configuration"),".")),(0,r.kt)("h2",{id:"configure-clients-for-athenz"},"Configure clients for Athenz"),(0,r.kt)("p",null,"For more information on Pulsar client authentication using Athenz, see the following language-specific docs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/2.10.x/client-libraries-java#athenz"},"Java client"))),(0,r.kt)("h2",{id:"configure-cli-tools-for-athenz"},"Configure CLI tools for Athenz"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/2.10.x/reference-cli-tools"},"Command-line tools")," like ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.10.x/pulsar-admin"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.10.x/reference-cli-tools#pulsar-perf"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-perf")),", and ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.10.x/reference-cli-tools#pulsar-client"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," use the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," config file in a Pulsar installation."),(0,r.kt)("p",null,"You need to add the following authentication parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," config file to use Athenz with CLI tools of Pulsar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},'\n# URL for the broker\nserviceUrl=https://broker.example.com:8443/\n\n# Set Athenz auth plugin and its parameters\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationAthenz\nauthParams={"tenantDomain":"shopping","tenantService":"some_app","providerDomain":"pulsar","privateKey":"file:///path/to/private.pem","keyId":"v1"}\n\n# Enable TLS\nuseTls=true\ntlsAllowInsecureConnection=false\ntlsTrustCertsFilePath=/path/to/cacert.pem\n\n')))}h.isMDXComponent=!0}}]);