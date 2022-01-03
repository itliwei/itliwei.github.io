(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{517:function(e,a,s){"use strict";s.r(a);var t=s(11),v=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"单元测试规范"}},[e._v("单元测试规范")]),e._v(" "),s("h2",{attrs:{id:"为什么要写单测"}},[e._v("为什么要写单测")]),e._v(" "),s("p",[e._v("保证代码运行符合预期，将代码中的问题提早暴露出来，减少代码bug，提高代码质量。")]),e._v(" "),s("h2",{attrs:{id:"什么是单测"}},[e._v("什么是单测")]),e._v(" "),s("p",[e._v("单元测试(unit test)是指程序员对代码中的最小运行单元进行正确性检验的测试。")]),e._v(" "),s("h2",{attrs:{id:"怎么写单元测试"}},[e._v("怎么写单元测试")]),e._v(" "),s("p",[e._v("针对每个方法都要有单元测试")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("包括private方法\n")])])]),s("p",[e._v("针对每行代码都要有单元测试")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("包括if else 里的判断\n")])])]),s("p",[e._v("针对每个业务场景写")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("包括异常违法操作\n")])])]),s("h2",{attrs:{id:"单元测试的步骤"}},[e._v("单元测试的步骤")]),e._v(" "),s("p",[e._v("Setup，初始化，准备数据等")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("初始化数据\n")])])]),s("p",[e._v("Execute，调用要测试的方法、函数")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("组装并执行测试方法\n")])])]),s("p",[e._v("Verify，验证结果是否符合预期")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("将结果进行验证，这里一定要Verify，不要System.out.println()结果。Verify是一个验证过程，这个会影响CI的执行。\n")])])]),s("p",[e._v("Teardown，重置状态")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("单测的数据不能产生其他影响，以免干扰到其他测试，所以测试结束后一定要重置状态。\n\n一般都是将数据做隔离，以免减少数据的干扰。\n")])])]),s("h2",{attrs:{id:"单元测试的规范"}},[e._v("单元测试的规范")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("测试类与实际类在相同包下")])]),e._v(" "),s("li",[s("p",[e._v("测试类名称为实际类名称+Test")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("如：UserDaoTest\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[e._v("测试类方法为test+实际类方法")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("如：testLogin\n")])])]),s("h2",{attrs:{id:"单元测试的技术"}},[e._v("单元测试的技术")]),e._v(" "),s("h3",{attrs:{id:"mock技术"}},[e._v("Mock技术")]),e._v(" "),s("p",[e._v('Mock是一种模拟行为，而不是真实的做相关操作。\n对那些不容易构建的对象用一个虚拟对象来代替测试的方法就叫mock测试。以此来提高单测的"单一"特性。')]),e._v(" "),s("p",[e._v("Mock一般用于：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v(" 复杂的业务系统\n \n 外部服务调用\n")])])]),s("p",[e._v("Mock的优点：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("  团队可以并行工作\n  \n  为无法访问的资源编写测试\n  \n  系统进行隔离\n")])])]),s("h4",{attrs:{id:"mockito"}},[e._v("Mockito")]),e._v(" "),s("p",[e._v("Mockito 是一个基于MIT协议的开源java测试框架。 Mockito区别于其他模拟框架的地方主要是允许开发者在没有建立“预期”时验证被测系统的行为。对mock对象的一个批评是测试代码与被测系统高度耦合，由于Mockito试图通过移除“期望规范”来去除expect-run-verify模式（期望--运行--验证模式），因此使耦合度降低到最低。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("<dependency>  \n  <groupId>org.mockito</groupId>  \n  <artifactId>mockito-all</artifactId>  \n  <scope>test</scope>  \n</dependency>  \n")])])]),s("p",[e._v("需要注意的语句：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Mockito.when(A).thenReturn(B);\n")])])]),s("p",[e._v("需要注意的注解：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("@InjectMocks\n")])])]),s("p",[e._v("说明：该注解跟@Autowired类似，注入一个服务。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("@Mock\n")])])]),s("p",[e._v("说明：注入一个服务，该服务会是“假对象”，并不会真正执行。")]),e._v(" "),s("h3",{attrs:{id:"数据库h2"}},[e._v("数据库H2")]),e._v(" "),s("p",[e._v("H2数据库是一个开源的关系型数据库。H2是一个采用java语言编写的嵌入式数据库引擎，只是一个类库（即只有一个 jar 文件），可以直接嵌入到应用项目中，不受平台的限制。")]),e._v(" "),s("p",[e._v("之所以需要H2数据库，主要是为了与其他数据库无任何干扰，从而保证测试的可靠性。")]),e._v(" "),s("p",[e._v("引入：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("<dependency>\n    <groupId>com.h2database</groupId>\n    <artifactId>h2</artifactId>\n    <scope>runtime</scope>\n</dependency>\n")])])]),s("p",[e._v("配置：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("spring.datasource.platform=h2  #表明使用的数据库平台是h2\nspring.datasource.url=jdbc:h2:./data/test;AUTO_SERVER=TRUE\nspring.datasource.username=sa\nspring.datasource.password=123456\nspring.datasource.driverClassName=org.h2.Driver\n")])])]),s("h3",{attrs:{id:"内嵌redis"}},[e._v("内嵌Redis")]),e._v(" "),s("p",[e._v("很多应用中会使用到Redis。而单测的时候如果把数据写入Redis或者读取Redis的数据，可能会造成一些脏数据，从而影响单测的结果。\n所以我们需要使用内嵌Redis。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("  <dependency>\n      <groupId>com.github.kstyrc</groupId>\n      <artifactId>embedded-redis</artifactId>\n      <version>0.6</version>\n  </dependency>     \n")])])]),s("p",[e._v("一般我们在写单元测试的时候，会在一个测试类中写很多的测试方法。那么我们一般会选择在@Before方法中启动RedisServer，在@After方法中进行close。\n启动与关闭：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("redisServer = new RedisServer(6379);\nredisServer.start();\n// do something\nredisServer.stop();\n")])])]),s("h3",{attrs:{id:"单元测试的问题"}},[e._v("单元测试的问题")]),e._v(" "),s("h4",{attrs:{id:"_1-加载慢的问题"}},[e._v("1.加载慢的问题")]),e._v(" "),s("p",[e._v("原因分析：")]),e._v(" "),s("p",[e._v("首先每一次单测都需要重新加载数据，跑完一次程序就结束了，所以每次测试方法时都要重新加载数据。")]),e._v(" "),s("p",[e._v("实现方式：")]),e._v(" "),s("h4",{attrs:{id:"_2-分库分表的问题"}},[e._v("2.分库分表的问题")])])}),[],!1,null,null,null);a.default=v.exports}}]);