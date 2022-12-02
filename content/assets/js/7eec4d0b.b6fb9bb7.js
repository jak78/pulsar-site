"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[78583],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(a),h=n,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return a?r.createElement(m,s(s({ref:t},c),{},{components:a})):r.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},13286:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={id:"administration-dashboard",title:"Pulsar dashboard",sidebar_label:"Dashboard"},s=void 0,i={unversionedId:"administration-dashboard",id:"administration-dashboard",title:"Pulsar dashboard",description:"Pulsar dashboard is deprecated. We recommend you use Pulsar Manager to manage and monitor the stats of your topics.",source:"@site/docs/administration-dashboard.md",sourceDirName:".",slug:"/administration-dashboard",permalink:"/docs/next/administration-dashboard",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/administration-dashboard.md",tags:[],version:"current",frontMatter:{id:"administration-dashboard",title:"Pulsar dashboard",sidebar_label:"Dashboard"}},l={},d=[{value:"Install",id:"install",level:2}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Pulsar dashboard is deprecated. We recommend you use ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/administration-pulsar-manager"},"Pulsar Manager")," to manage and monitor the stats of your topics. ")),(0,n.kt)("p",null,"Pulsar dashboard is a web application that enables users to monitor current stats for all ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#topic"},"topics")," in tabular form."),(0,n.kt)("p",null,"The dashboard is a data collector that polls stats from all the brokers in a Pulsar instance (across multiple clusters) and stores all the information in a ",(0,n.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL")," database."),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("a",{parentName:"p",href:"https://www.djangoproject.com"},"Django")," web app to render the collected data."),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)("p",null,"The easiest way to use the dashboard is to run it inside a ",(0,n.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker"},"Docker")," container."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"SERVICE_URL=http://broker.example.com:8080/\ndocker run -p 80:80 \\\n-e SERVICE_URL=$SERVICE_URL \\\napachepulsar/pulsar-dashboard:2.10.2\n")),(0,n.kt)("p",null,"You can find the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//dashboard/Dockerfile"},"Dockerfile")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"dashboard")," directory and build an image from scratch as well:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker build -t apachepulsar/pulsar-dashboard dashboard\n")),(0,n.kt)("p",null,"If token authentication is enabled, the provided token should have super-user access. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"SERVICE_URL=http://broker.example.com:8080/\nJWT_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\ndocker run -p 80:80 \\\n-e SERVICE_URL=$SERVICE_URL \\\n-e JWT_TOKEN=$JWT_TOKEN \\\napachepulsar/pulsar-dashboard\n")),(0,n.kt)("p",null,"You need to specify only one service URL for a Pulsar cluster. Internally, the collector figures out all the existing clusters and the brokers from where it needs to pull the metrics. If you connect the dashboard to Pulsar running in standalone mode, the URL is ",(0,n.kt)("inlineCode",{parentName:"p"},"http://<broker-ip>:8080")," by default. ",(0,n.kt)("inlineCode",{parentName:"p"},"<broker-ip>")," is the IP address or hostname of the machine that runs Pulsar standalone. The IP address or hostname should be accessible from the running dashboard in the docker instance."),(0,n.kt)("p",null,"Once the Docker container starts, the web dashboard is accessible via ",(0,n.kt)("inlineCode",{parentName:"p"},"localhost")," or whichever host that the Docker uses."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"SERVICE_URL")," that the dashboard uses needs to be reachable from inside the Docker container.")),(0,n.kt)("p",null,"If the Pulsar service runs in standalone mode in ",(0,n.kt)("inlineCode",{parentName:"p"},"localhost"),", the ",(0,n.kt)("inlineCode",{parentName:"p"},"SERVICE_URL")," has to\nbe the IP address of the machine."),(0,n.kt)("p",null,"Similarly, given the Pulsar standalone advertises itself with localhost by default, you need to\nexplicitly set the advertise address to the host IP address. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar standalone --advertised-address 1.2.3.4\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Currently, only Pulsar Token ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/security-overview#authentication"},"authentication")," is supported.")))}p.isMDXComponent=!0}}]);