"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[80714],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=p(n),s=r,k=u["".concat(d,".").concat(s)]||u[s]||c[s]||l;return n?a.createElement(k,o(o({ref:e},m),{},{components:n})):a.createElement(k,o({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},61397:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={id:"develop-labels",title:"Label strategy"},o=void 0,i={unversionedId:"develop-labels",id:"develop-labels",title:"Label strategy",description:"This guide explains the labels used in the apache/pulsar repository (the main repo).",source:"@site/contribute/develop-labels.md",sourceDirName:".",slug:"/develop-labels",permalink:"/contribute/develop-labels",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/develop-labels.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1697333741,formattedLastUpdatedAt:"Oct 15, 2023",frontMatter:{id:"develop-labels",title:"Label strategy"},sidebar:"sidebarDevelopment",previous:{title:"Triaging an Issue",permalink:"/contribute/develop-triage"},next:{title:"Semantic pull request",permalink:"/contribute/develop-semantic-title"}},d={},p=[{value:"type/*",id:"type",level:2},{value:"component/*",id:"component",level:2},{value:"category/*",id:"category",level:2},{value:"ready-to-test",id:"ready-to-test",level:2},{value:"doc-*",id:"doc-",level:2},{value:"release/*",id:"release",level:2},{value:"cherry-picked/*",id:"cherry-picked",level:2}],m={toc:p},u="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide explains the labels used in the ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/apache/pulsar"},"apache/pulsar")," repository (the main repo)."),(0,r.kt)("h2",{id:"type"},"type/*"),(0,r.kt)("p",null,"The type/* labels are mainly distinguish the issues and PRs are for bug reporting, bug fix, feature requests, feature support."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type/cleanup")),(0,r.kt)("td",{parentName:"tr",align:null},"Code or doc cleanups e.g. remove the outdated documentation or remove the code no longer in use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type/feature")),(0,r.kt)("td",{parentName:"tr",align:null},"The PR added a new feature or issue requested a new feature")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type/bug")),(0,r.kt)("td",{parentName:"tr",align:null},"Your PR fixed a bug or issue reported a bug")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type/refactor")),(0,r.kt)("td",{parentName:"tr",align:null},"Code or doc refactors. e.g. refactor code structure or methods to improve code readability")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type/enhancement")),(0,r.kt)("td",{parentName:"tr",align:null},"The enhancements for the existing features or docs. e.g. reduce memory usage of the delayed messages")))),(0,r.kt)("h2",{id:"component"},"component/*"),(0,r.kt)("p",null,"The component/* labels are indicating which component the issues or PRs have happened"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/function")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/broker")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/cli")),(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-admin, pulsar-client, pulsar-perf ...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/client")),(0,r.kt)("td",{parentName:"tr",align:null},"Java client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/proxy")),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar proxy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/tieredstorage")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/sql")),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar SQL based on trino")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/transaction")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/schema")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/security")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/config")),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar configurations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/authentication")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/build")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/geo-replication")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/metrics")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/metadata")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/tool")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/admin")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/test")),(0,r.kt)("td",{parentName:"tr",align:null},"Improve test coverage or enhance the test")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/ci")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/compaction")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/connector")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/websocket")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/ML")),(0,r.kt)("td",{parentName:"tr",align:null},"Managed Ledger")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/authorization")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component/dependency")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"category"},"category/*"),(0,r.kt)("p",null,"In addition to being able to identify which component that the issue, PR is fixed or enhanced. The category labels will provide more information about the fix or enhancement for functionality, reliability, or performance. For most cases, the category labels only work with type/bug and type/enhancement."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"category/functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"some functions are not working such as get errors.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"category/reliability")),(0,r.kt)("td",{parentName:"tr",align:null},"the function is working for most cases. It does not work properly in certain specific environments or failures. e.g. data lost, consumption stuck")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"category/performance")),(0,r.kt)("td",{parentName:"tr",align:null},"performance issues fix or improvements.")))),(0,r.kt)("h2",{id:"ready-to-test"},"ready-to-test"),(0,r.kt)("p",null,"After ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/17693"},"PR-17693")," merged, pull requests ",(0,r.kt)("strong",{parentName:"p"},"except ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/apache/pulsar/blob/master/.github/changes-filter.yaml#L5"},"docs only changes"))," should be first tested in your own fork since the pulsar CI based on GitHub Actions has constrained resources and quota. GitHub Actions provides separate quota for pull requests that are executed in a forked repository."),(0,r.kt)("p",null,"When a committer believe the PR is ready to test, they will label ",(0,r.kt)("inlineCode",{parentName:"p"},"ready-to-test")," to the PR, and then you can rerun the CI tasks by commenting ",(0,r.kt)("inlineCode",{parentName:"p"},"/pulsarbot run-failure-checks")," and trigger the full CI validation."),(0,r.kt)("p",null,"See also ",(0,r.kt)("a",{parentName:"p",href:"/contribute/personal-ci"},"CI Testing in Fork"),"."),(0,r.kt)("h2",{id:"doc-"},"doc-*"),(0,r.kt)("p",null,"When submitting an issue or PR, you must ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/.github/PULL_REQUEST_TEMPLATE.md#documentation"},"choose one of the documentation checkboxes"),", so the automation can label the PR correctly."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"doc-not-needed")),(0,r.kt)("td",{parentName:"tr",align:null},"Your PR changes do not impact docs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"doc")),(0,r.kt)("td",{parentName:"tr",align:null},"Your PR contains doc changes, no matter whether the changes are in markdown or code files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"doc-required")),(0,r.kt)("td",{parentName:"tr",align:null},"Your PR changes impact docs and you will update later.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"doc-complete")),(0,r.kt)("td",{parentName:"tr",align:null},"Your PR changes impact docs and the related docs have been already added.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"doc-label-missing")),(0,r.kt)("td",{parentName:"tr",align:null},"The Bot applies this label when there is no doc label information in the PR if one of the following conditions is met: ",(0,r.kt)("br",null),(0,r.kt)("li",null,"You do not provide a doc label."),(0,r.kt)("li",null,"You provide multiple doc labels."),(0,r.kt)("li",null,"You delete backticks (``) in doc labels."),(0,r.kt)("li",null,"You add blanks in square brackets."))))),(0,r.kt)("h2",{id:"release"},"release/*"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"release/important-notice")),(0,r.kt)("td",{parentName:"tr",align:null},"The changes which are important should be mentioned in the release note")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"release/blocker")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicate the PR or issue that should block the release until it gets resolved")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"release/<version>")),(0,r.kt)("td",{parentName:"tr",align:null},"The labels are indicating which version the issue/PR has been fixed or will be fixed depending on if the version is released or not")))),(0,r.kt)("h2",{id:"cherry-picked"},"cherry-picked/*"),(0,r.kt)("p",null,"The cherry-picked/* labels are more mainly for Pulsar committers to ensure the fixes are cherry-picked to the release branches. The label only can be added after the cherry-picking is done for a corresponding branch. So that the release manager can have a list of PRs that should to be cherry-picked."))}c.isMDXComponent=!0}}]);