"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[30610],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||r;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),o=t(86010);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>f});var a=t(87462),o=t(67294),r=t(86010),i=t(72389),s=t(67392),l=t(7094),u=t(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:n,block:t,defaultValue:i,values:d,groupId:f,className:m}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??g.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),v=(0,s.l)(h,((e,n)=>e.value===n.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,l.U)(),[w,x]=(0,o.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=f){const e=y[f];null!=e&&e!==w&&h.some((n=>n.value===e))&&x(e)}const T=e=>{const n=e.currentTarget,t=N.indexOf(n),a=h[t].value;a!==w&&(O(n),x(a),null!=f&&k(f,String(a)))},C=e=>{let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}n?.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},m)},h.map((e=>{let{value:n,label:t,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>N.push(e),onKeyDown:C,onClick:T},i,{className:(0,r.Z)("tabs__item",p,i?.className,{"tabs__item--active":w===n})}),t??n)}))),n?(0,o.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function f(e){const n=(0,i.Z)();return o.createElement(d,(0,a.Z)({key:String(n)},e))}},84202:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=t(87462),o=(t(67294),t(3905)),r=t(65488),i=t(85162);const s={id:"functions-develop-user-defined-configs",title:"Pass user-defined configurations",sidebar_label:"Pass user-defined configurations"},l=void 0,u={unversionedId:"functions-develop-user-defined-configs",id:"functions-develop-user-defined-configs",title:"Pass user-defined configurations",description:"When you run or update functions created via SDK, you can pass arbitrary key/value pairs to them by using CLI with the --user-config flag. Key/value pairs must be specified as JSON.",source:"@site/docs/functions-develop-user-defined-configs.md",sourceDirName:".",slug:"/functions-develop-user-defined-configs",permalink:"/docs/next/functions-develop-user-defined-configs",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/functions-develop-user-defined-configs.md",tags:[],version:"current",frontMatter:{id:"functions-develop-user-defined-configs",title:"Pass user-defined configurations",sidebar_label:"Pass user-defined configurations"},sidebar:"docsSidebar",previous:{title:"Use APIs",permalink:"/docs/next/functions-develop-api"},next:{title:"Produce function logs",permalink:"/docs/next/functions-develop-log"}},c={},p=[],d={toc:p};function f(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you run or update functions created via SDK, you can pass arbitrary key/value pairs to them by using CLI with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--user-config")," flag. Key/value pairs must be specified as JSON. "),(0,o.kt)(r.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Go",value:"Go"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For all key/value pairs passed to Java functions, both keys and values are ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),". To set the value to be a different type, you need to deserialize it from the ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," type.")),(0,o.kt)("p",null,"The context object of Java SDK enables you to access key/value pairs provided to Pulsar Functions via CLI (as JSON). The following example passes a key/value pair."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-admin functions create \\\n  # Other function configs\n  --user-config \'{"word-of-the-day":"verdure"}\'\n')),(0,o.kt)("p",null,"To access that value in a Java function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\nimport org.slf4j.Logger;\n\nimport java.util.Optional;\n\npublic class UserConfigFunction implements Function<String, Void> {\n    @Override\n    public void apply(String input, Context context) {\n        Logger LOG = context.getLogger();\n        Optional<String> wotd = context.getUserConfigValue("word-of-the-day");\n        if (wotd.isPresent()) {\n            LOG.info("The word of the day is {}", wotd);\n        } else {\n            LOG.warn("No word of the day provided");\n        }\n        return null;\n    }\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"UserConfigFunction")," function logs the string ",(0,o.kt)("inlineCode",{parentName:"p"},'"The word of the day is verdure"')," every time the function is invoked. The ",(0,o.kt)("inlineCode",{parentName:"p"},"word-of-the-day")," config can be changed only when the function is updated with a new value via the CLI."),(0,o.kt)("p",null,"You can also access the entire user config map or set a default value in case no value is present."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Get the whole config map\nMap<String, String> allConfigs = context.getUserConfigMap();\n\n// Get value or resort to default\nString wotd = context.getUserConfigValueOrDefault("word-of-the-day", "perspicacious");\n'))),(0,o.kt)(i.Z,{value:"Python",mdxType:"TabItem"},(0,o.kt)("p",null,"In a Python function, you can access the configuration value like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pulsar import Function\n\nclass WordFilter(Function):\n    def process(self, context, input):\n        forbidden_word = context.user_config()["forbidden-word"]\n\n        # Don\'t publish the message if it contains the user-supplied\n        # forbidden word\n        if forbidden_word in input:\n            pass\n        # Otherwise publish the message\n        else:\n            return input\n')),(0,o.kt)("p",null,"The context object of Python SDK enables you to access key/value pairs provided to functions via the command line (as JSON). The following example passes a key/value pair."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-admin functions create \\\n  # Other function configs \\\n  --user-config \'{"word-of-the-day":"verdure"}\'\n')),(0,o.kt)("p",null,"To access that value in a Python function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pulsar import Function\n\nclass UserConfigFunction(Function):\n    def process(self, input, context):\n        logger = context.get_logger()\n        wotd = context.get_user_config_value('word-of-the-day')\n        if wotd is None:\n            logger.warn('No word of the day provided')\n        else:\n            logger.info(\"The word of the day is {0}\".format(wotd))\n"))),(0,o.kt)(i.Z,{value:"Go",mdxType:"TabItem"},(0,o.kt)("p",null,"The context object of Go SDK enables you to access key/value pairs provided to functions via the command line (as JSON). The following example passes a key/value pair."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-admin functions create \\\n  --go path/to/go/binary\n  --user-config \'{"word-of-the-day":"lackadaisical"}\'\n')),(0,o.kt)("p",null,"To access that value in a Go function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func contextFunc(ctx context.Context) {\n  fc, ok := pf.FromContext(ctx)\n  if !ok {\n    logutil.Fatal("Function context is not defined")\n  }\n\n  wotd := fc.GetUserConfValue("word-of-the-day")\n\n  if wotd == nil {\n    logutil.Warn("The word of the day is empty")\n  } else {\n    logutil.Infof("The word of the day is %s", wotd.(string))\n  }\n}\n')))))}f.isMDXComponent=!0}}]);