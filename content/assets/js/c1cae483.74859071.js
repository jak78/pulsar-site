"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[51572],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>h});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),l=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},m=function(e){var a=l(e.components);return n.createElement(i.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,h=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return t?n.createElement(h,s(s({ref:a},m),{},{components:t})):n.createElement(h,s({ref:a},m))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c[p]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(67294),r=t(86010);const o="tabItem_Ymn6";function s(e){let{children:a,hidden:t,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(87462),r=t(67294),o=t(86010),s=t(72389),c=t(67392),i=t(7094),l=t(12466);const m="tabList__CuJ",p="tabItem_LNqP";function u(e){const{lazy:a,block:t,defaultValue:s,values:u,groupId:d,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=u??g.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),N=(0,c.l)(k,((e,a)=>e.value===a.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===s?s:s??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:b}=(0,i.U)(),[y,S]=(0,r.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:w}=(0,l.o5)();if(null!=d){const e=f[d];null!=e&&e!==y&&k.some((a=>a.value===e))&&S(e)}const P=e=>{const a=e.currentTarget,t=C.indexOf(a),n=k[t].value;n!==y&&(w(a),S(n),null!=d&&b(d,String(n)))},T=e=>{let a=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;a=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;a=C[t]??C[C.length-1];break}}a?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},h)},k.map((e=>{let{value:a,label:t,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,key:a,ref:e=>C.push(e),onKeyDown:T,onClick:P},s,{className:(0,o.Z)("tabs__item",p,s?.className,{"tabs__item--active":y===a})}),t??a)}))),a?(0,r.cloneElement)(g.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==y})))))}function d(e){const a=(0,s.Z)();return r.createElement(u,(0,n.Z)({key:String(a)},e))}},46484:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=t(87462),r=(t(67294),t(3905)),o=t(65488),s=t(85162);const c={id:"schema-get-started",title:"Get started",sidebar_label:"Get started"},i=void 0,l={unversionedId:"schema-get-started",id:"schema-get-started",title:"Get started",description:"This hands-on tutorial provides instructions and examples on how to construct and customize schemas.",source:"@site/docs/schema-get-started.md",sourceDirName:".",slug:"/schema-get-started",permalink:"/docs/next/schema-get-started",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/schema-get-started.md",tags:[],version:"current",frontMatter:{id:"schema-get-started",title:"Get started",sidebar_label:"Get started"},sidebar:"docsSidebar",previous:{title:"Understand schema",permalink:"/docs/next/schema-understand"},next:{title:"Schema evolution and compatibility",permalink:"/docs/next/schema-evolution-compatibility"}},m={},p=[{value:"Construct a string schema",id:"construct-a-string-schema",level:2},{value:"Construct a key/value schema",id:"construct-a-keyvalue-schema",level:2},{value:"Construct a struct schema",id:"construct-a-struct-schema",level:2},{value:"Avro schema using Java",id:"avro-schema-using-java",level:3},{value:"Avro-based schema using Java",id:"avro-based-schema-using-java",level:3},{value:"Avro schema using C++",id:"avro-schema-using-c",level:3},{value:"ProtobufNative schema using C++",id:"protobufnative-schema-using-c",level:3},{value:"Construct an AUTO_PRODUCE schema",id:"construct-an-auto_produce-schema",level:2},{value:"Construct an AUTO_CONSUME schema",id:"construct-an-auto_consume-schema",level:2},{value:"Construct a native Avro schema",id:"construct-a-native-avro-schema",level:2},{value:"Customize schema storage",id:"customize-schema-storage",level:2},{value:"Implement SchemaStorage interface",id:"implement-schemastorage-interface",level:3},{value:"Implement SchemaStorageFactory interface",id:"implement-schemastoragefactory-interface",level:3},{value:"Deploy custom schema storage",id:"deploy-custom-schema-storage",level:3}],u={toc:p};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This hands-on tutorial provides instructions and examples on how to construct and customize schemas."),(0,r.kt)("h2",{id:"construct-a-string-schema"},"Construct a string schema"),(0,r.kt)("p",null,"This example demonstrates how to construct a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/schema-understand#primitive-type"},"string schema")," and use it to produce and consume messages in Java."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a producer with a string schema and send messages."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Producer<String> producer = client.newProducer(Schema.STRING).create();\nproducer.newMessage().value("Hello Pulsar!").send();\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a consumer with a string schema and receive messages.  "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Consumer<String> consumer = client.newConsumer(Schema.STRING).subscribe();\nconsumer.receive();\n")))),(0,r.kt)("h2",{id:"construct-a-keyvalue-schema"},"Construct a key/value schema"),(0,r.kt)("p",null,"This example shows how to construct a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/schema-understand#keyvalue-schema"},"key/value schema")," and use it to produce and consume messages in Java."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Construct a key/value schema with ",(0,r.kt)("inlineCode",{parentName:"p"},"INLINE")," encoding type."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Schema<KeyValue<Integer, String>> kvSchema = Schema.KeyValue(\nSchema.INT32,\nSchema.STRING,\nKeyValueEncodingType.INLINE\n);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optionally, construct a key/value schema with ",(0,r.kt)("inlineCode",{parentName:"p"},"SEPARATED")," encoding type."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Schema<KeyValue<Integer, String>> kvSchema = Schema.KeyValue(\nSchema.INT32,\nSchema.STRING,\nKeyValueEncodingType.SEPARATED\n);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Produce messages using a key/value schema."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Producer<KeyValue<Integer, String>> producer = client.newProducer(kvSchema)\n    .topic(TOPIC)\n    .create();\n\nfinal int key = 100;\nfinal String value = "value-100";\n\n// send the key/value message\nproducer.newMessage()\n.value(new KeyValue(key, value))\n.send();\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Consume messages using a key/value schema."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Consumer<KeyValue<Integer, String>> consumer = client.newConsumer(kvSchema)\n    ...\n    .topic(TOPIC)\n    .subscriptionName(SubscriptionName).subscribe();\n\n// receive key/value pair\nMessage<KeyValue<Integer, String>> msg = consumer.receive();\nKeyValue<Integer, String> kv = msg.getValue();\n")))),(0,r.kt)("h2",{id:"construct-a-struct-schema"},"Construct a struct schema"),(0,r.kt)("p",null,"This example shows how to construct a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/schema-understand#struct-schema"},"struct schema")," and use it to produce and consume messages using different methods."),(0,r.kt)(o.Z,{defaultValue:"static",values:[{label:"static",value:"static"},{label:"generic",value:"generic"},{label:"SchemaDefinition",value:"SchemaDefinition"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"static",mdxType:"TabItem"},(0,r.kt)("p",null,"You can predefine the ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," schema, which can be a POJO in Java, a ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," in Go, or classes generated by Avro or Protobuf tools. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," "),(0,r.kt)("p",null,"Pulsar gets the schema definition from the predefined ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," using an Avro library. The schema definition is the schema data stored as a part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the ",(0,r.kt)("em",{parentName:"p"},"User")," class to define the messages sent to Pulsar topics."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Builder\n@AllArgsConstructor\n@NoArgsConstructor\npublic static class User {\n    String name;\n    int age;\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a producer with a ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," schema and send messages."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Producer<User> producer = client.newProducer(Schema.AVRO(User.class)).create();\nproducer.newMessage().value(User.builder().name("pulsar-user").age(1).build()).send();\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a consumer with a ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," schema and receive messages"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Consumer<User> consumer = client.newConsumer(Schema.AVRO(User.class)).subscribe();\nUser user = consumer.receive().getValue();\n"))))),(0,r.kt)(s.Z,{value:"generic",mdxType:"TabItem"},(0,r.kt)("p",null,"Sometimes applications do not have pre-defined structs, and you can use this method to define schema and access data."),(0,r.kt)("p",null,"You can define the ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," schema using the ",(0,r.kt)("inlineCode",{parentName:"p"},"GenericSchemaBuilder"),", generate a generic struct using ",(0,r.kt)("inlineCode",{parentName:"p"},"GenericRecordBuilder")," and consume messages into ",(0,r.kt)("inlineCode",{parentName:"p"},"GenericRecord"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"RecordSchemaBuilder")," to build a schema."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'RecordSchemaBuilder recordSchemaBuilder = SchemaBuilder.record("schemaName");\nrecordSchemaBuilder.field("intField").type(SchemaType.INT32);\nSchemaInfo schemaInfo = recordSchemaBuilder.build(SchemaType.AVRO);\n\nProducer<GenericRecord> producer = client.newProducer(Schema.generic(schemaInfo)).create();\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"RecordBuilder")," to build the struct records."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'producer.newMessage().value(schema.newRecordBuilder()\n            .set("intField", 32)\n            .build()).send();\n'))))),(0,r.kt)(s.Z,{value:"SchemaDefinition",mdxType:"TabItem"},(0,r.kt)("p",null,"You can define the ",(0,r.kt)("inlineCode",{parentName:"p"},"schemaDefinition")," to generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," schema."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the ",(0,r.kt)("em",{parentName:"p"},"User")," class to define the messages sent to Pulsar topics."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Builder\n@AllArgsConstructor\n@NoArgsConstructor\npublic static class User {\n    String name;\n    int age;\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a producer with a ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaDefinition")," and send messages."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'SchemaDefinition<User> schemaDefinition = SchemaDefinition.<User>builder().withPojo(User.class).build();\nProducer<User> producer = client.newProducer(Schema.AVRO(schemaDefinition)).create();\nproducer.newMessage().value(User.builder().name("pulsar-user").age(1).build()).send();\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a consumer with a ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaDefinition")," schema and receive messages"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"SchemaDefinition<User> schemaDefinition = SchemaDefinition.<User>builder().withPojo(User.class).build();\nConsumer<User> consumer = client.newConsumer(Schema.AVRO(schemaDefinition)).subscribe();\nUser user = consumer.receive().getValue();\n")))))),(0,r.kt)("h3",{id:"avro-schema-using-java"},"Avro schema using Java"),(0,r.kt)("p",null,"Suppose you have a ",(0,r.kt)("inlineCode",{parentName:"p"},"SensorReading")," class as follows, and you'd like to transmit it over a Pulsar topic."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class SensorReading {\n    public float temperature;\n\n    public SensorReading(float temperature) {\n        this.temperature = temperature;\n    }\n\n    // A no-arg constructor is required\n    public SensorReading() {\n    }\n\n    public float getTemperature() {\n        return temperature;\n    }\n\n    public void setTemperature(float temperature) {\n        this.temperature = temperature;\n    }\n}\n")),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Producer<SensorReading>")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"Consumer<SensorReading>"),") like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Producer<SensorReading> producer = client.newProducer(AvroSchema.of(SensorReading.class))\n        .topic("sensor-readings")\n        .create();\n')),(0,r.kt)("h3",{id:"avro-based-schema-using-java"},"Avro-based schema using Java"),(0,r.kt)("p",null,"The following schema formats are currently available for Java:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"No schema or the byte array schema (which can be applied using ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema.BYTES"),"):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Producer<byte[]> bytesProducer = client.newProducer(Schema.BYTES)\n    .topic("some-raw-bytes-topic")\n    .create();\n')),(0,r.kt)("p",{parentName:"li"},"Or, equivalently:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Producer<byte[]> bytesProducer = client.newProducer()\n    .topic("some-raw-bytes-topic")\n    .create();\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"String")," for normal UTF-8-encoded string data. Apply the schema using ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema.STRING"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Producer<String> stringProducer = client.newProducer(Schema.STRING)\n    .topic("some-string-topic")\n    .create();\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create JSON schemas for POJOs using ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema.JSON"),". The following is an example."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Producer<MyPojo> pojoProducer = client.newProducer(Schema.JSON(MyPojo.class))\n    .topic("some-pojo-topic")\n    .create();\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Generate Protobuf schemas using ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema.PROTOBUF"),". The following example shows how to create the Protobuf schema and use it to instantiate a new producer:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Producer<MyProtobuf> protobufProducer = client.newProducer(Schema.PROTOBUF(MyProtobuf.class))\n    .topic("some-protobuf-topic")\n    .create();\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Define Avro schemas with ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema.AVRO"),". The following code snippet demonstrates how to create and use Avro schema."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Producer<MyAvro> avroProducer = client.newProducer(Schema.AVRO(MyAvro.class))\n    .topic("some-avro-topic")\n    .create();\n')))),(0,r.kt)("h3",{id:"avro-schema-using-c"},"Avro schema using C++"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The following example shows how to create a producer with an Avro schema."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'static const std::string exampleSchema =\n    "{\\"type\\":\\"record\\",\\"name\\":\\"Example\\",\\"namespace\\":\\"test\\","\n    "\\"fields\\":[{\\"name\\":\\"a\\",\\"type\\":\\"int\\"},{\\"name\\":\\"b\\",\\"type\\":\\"int\\"}]}";\nProducer producer;\nProducerConfiguration producerConf;\nproducerConf.setSchema(SchemaInfo(AVRO, "Avro", exampleSchema));\nclient.createProducer("topic-avro", producerConf, producer);\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The following example shows how to create a consumer with an Avro schema."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'static const std::string exampleSchema =\n    "{\\"type\\":\\"record\\",\\"name\\":\\"Example\\",\\"namespace\\":\\"test\\","\n    "\\"fields\\":[{\\"name\\":\\"a\\",\\"type\\":\\"int\\"},{\\"name\\":\\"b\\",\\"type\\":\\"int\\"}]}";\nConsumerConfiguration consumerConf;\nConsumer consumer;\nconsumerConf.setSchema(SchemaInfo(AVRO, "Avro", exampleSchema));\nclient.subscribe("topic-avro", "sub-2", consumerConf, consumer)\n')))),(0,r.kt)("h3",{id:"protobufnative-schema-using-c"},"ProtobufNative schema using C++"),(0,r.kt)("p",null,"The following example shows how to create a producer and a consumer with a ProtobufNative schema."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," class using Protobuf3 or later versions."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\nmessage User {\n    string name = 1;\n    int32 age = 2;\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Include the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProtobufNativeSchema.h")," in your source code. Ensure the Protobuf dependency has been added to your project."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <pulsar/ProtobufNativeSchema.h>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a producer to send a ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," instance."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'ProducerConfiguration producerConf;\nproducerConf.setSchema(createProtobufNativeSchema(User::GetDescriptor()));\nProducer producer;\nclient.createProducer("topic-protobuf", producerConf, producer);\nUser user;\nuser.set_name("my-name");\nuser.set_age(10);\nstd::string content;\nuser.SerializeToString(&content);\nproducer.send(MessageBuilder().setContent(content).build());\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a consumer to receive a ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," instance."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'ConsumerConfiguration consumerConf;\nconsumerConf.setSchema(createProtobufNativeSchema(User::GetDescriptor()));\nconsumerConf.setSubscriptionInitialPosition(InitialPositionEarliest);\nConsumer consumer;\nclient.subscribe("topic-protobuf", "my-sub", consumerConf, consumer);\nMessage msg;\nconsumer.receive(msg);\nUser user2;\nuser2.ParseFromArray(msg.getData(), msg.getLength());\n')))),(0,r.kt)("h2",{id:"construct-an-auto_produce-schema"},"Construct an AUTO_PRODUCE schema"),(0,r.kt)("p",null,"Suppose you have a Pulsar topic ",(0,r.kt)("em",{parentName:"p"},"P"),", a producer processing messages from a Kafka topic ",(0,r.kt)("em",{parentName:"p"},"K"),", an application reading the messages from ",(0,r.kt)("em",{parentName:"p"},"K")," and writing the messages to ",(0,r.kt)("em",{parentName:"p"},"P"),"."),(0,r.kt)("p",null,"This example shows how to construct an ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/schema-understand#auto-schema"},"AUTO_PRODUCE")," schema to verify whether the bytes produced by ",(0,r.kt)("em",{parentName:"p"},"K")," can be sent to ",(0,r.kt)("em",{parentName:"p"},"P"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Produce<byte[]> pulsarProducer = client.newProducer(Schema.AUTO_PRODUCE())\n    \u2026\n    .create();\n\nbyte[] kafkaMessageBytes = \u2026 ; \n\npulsarProducer.produce(kafkaMessageBytes);\n")),(0,r.kt)("h2",{id:"construct-an-auto_consume-schema"},"Construct an AUTO_CONSUME schema"),(0,r.kt)("p",null,"Suppose you have a Pulsar topic ",(0,r.kt)("em",{parentName:"p"},"P"),", a consumer (for example, ",(0,r.kt)("em",{parentName:"p"},"MySQL"),") receiving messages from the topic ",(0,r.kt)("em",{parentName:"p"},"P"),", an application reading the messages from ",(0,r.kt)("em",{parentName:"p"},"P")," and writing the messages to ",(0,r.kt)("em",{parentName:"p"},"MySQL"),"."),(0,r.kt)("p",null,"This example shows how to construct an ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/schema-understand#auto-schema"},"AUTO_CONSUME schema")," to verify whether the bytes produced by ",(0,r.kt)("em",{parentName:"p"},"P")," can be sent to ",(0,r.kt)("em",{parentName:"p"},"MySQL"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Consumer<GenericRecord> pulsarConsumer = client.newConsumer(Schema.AUTO_CONSUME())\n    \u2026\n    .subscribe();\n\nMessage<GenericRecord> msg = consumer.receive() ; \nGenericRecord record = msg.getValue();\n")),(0,r.kt)("h2",{id:"construct-a-native-avro-schema"},"Construct a native Avro schema"),(0,r.kt)("p",null,"This example shows how to construct a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/schema-understand#native-avro-schema"},"native Avro schema"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'org.apache.avro.Schema nativeAvroSchema = \u2026 ;\n\nProducer<byte[]> producer = pulsarClient.newProducer().topic("ingress").create();\n\nbyte[] content = \u2026 ;\n\nproducer.newMessage(Schema.NATIVE_AVRO(nativeAvroSchema)).value(content).send();\n')),(0,r.kt)("h2",{id:"customize-schema-storage"},"Customize schema storage"),(0,r.kt)("p",null,"By default, Pulsar stores various data types of schemas in ",(0,r.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org"},"Apache BookKeeper")," deployed alongside Pulsar. Alternatively, you can use another storage system if needed. "),(0,r.kt)("p",null,"To use a non-default (non-BookKeeper) storage system for Pulsar schemas, you need to implement the following Java interfaces: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#schemastorage-interface"},"SchemaStorage interface")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#schemastoragefactory-interface"},"SchemaStorageFactory interface"))),(0,r.kt)("h3",{id:"implement-schemastorage-interface"},"Implement SchemaStorage interface"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaStorage")," interface has the following methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface SchemaStorage {\n    // How schemas are updated\n    CompletableFuture<SchemaVersion> put(String key, byte[] value, byte[] hash);\n\n    // How schemas are fetched from storage\n    CompletableFuture<StoredSchema> get(String key, SchemaVersion version);\n\n    // How schemas are deleted\n    CompletableFuture<SchemaVersion> delete(String key);\n\n    // Utility method for converting a schema version byte array to a SchemaVersion object\n    SchemaVersion versionFromBytes(byte[] version);\n\n    // Startup behavior for the schema storage client\n    void start() throws Exception;\n\n    // Shutdown behavior for the schema storage client\n    void close() throws Exception;\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For a complete example of ",(0,r.kt)("strong",{parentName:"p"},"schema storage")," implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/service/schema/BookkeeperSchemaStorage.java"},"BookKeeperSchemaStorage")," class.")),(0,r.kt)("h3",{id:"implement-schemastoragefactory-interface"},"Implement SchemaStorageFactory interface"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaStorageFactory")," interface has the following method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface SchemaStorageFactory {\n    @NotNull\n    SchemaStorage create(PulsarService pulsar) throws Exception;\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For a complete example of ",(0,r.kt)("strong",{parentName:"p"},"schema storage factory")," implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/service/schema/BookkeeperSchemaStorageFactory.java"},"BookKeeperSchemaStorageFactory")," class.")),(0,r.kt)("h3",{id:"deploy-custom-schema-storage"},"Deploy custom schema storage"),(0,r.kt)("p",null,"To use your custom schema storage implementation, perform the following steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Package the implementation in a ",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/deployment/jar/basicsindex.html"},"JAR")," file."),(0,r.kt)("li",{parentName:"ol"},"Add the JAR file to the ",(0,r.kt)("inlineCode",{parentName:"li"},"lib")," folder in your Pulsar binary or source distribution."),(0,r.kt)("li",{parentName:"ol"},"Change the ",(0,r.kt)("inlineCode",{parentName:"li"},"schemaRegistryStorageClassName")," configuration in the ",(0,r.kt)("inlineCode",{parentName:"li"},"conf/broker.conf")," file to your custom factory class.\n"),(0,r.kt)("li",{parentName:"ol"},"Start Pulsar.")))}d.isMDXComponent=!0}}]);