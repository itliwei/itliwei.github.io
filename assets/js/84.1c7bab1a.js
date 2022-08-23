(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{528:function(v,e,i){"use strict";i.r(e);var _=i(11),t=Object(_.a)({},(function(){var v=this,e=v.$createElement,i=v._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[i("h1",{attrs:{id:"工作十年-我重新捡起了软件七大原则"}},[v._v("工作十年-我重新捡起了软件七大原则")]),v._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[v._v("理想很丰满，现实很骨感")]),v._v(" "),i("p",[v._v("年轻时我很穷，经过多年的努力，我终于不再年轻！")]),v._v(" "),i("div",{staticClass:"custom-block right"},[i("h2",{attrs:{id:"什么是原则？"}},[v._v("什么是原则？")]),v._v(" "),i("p",[v._v("原则是指经过长期经验总结所得出的合理化的现象。 ——百度百科")]),v._v(" "),i("p",[v._v("原则具有指导性、适用性、异样性。")]),v._v(" "),i("p",[v._v("指导性是指：在犹豫要不要做某件事情的时候，可以根据自身的原则出发作出抉择，所以 瑞·达利欧 根据自己的行为标出了一本书《原则》。")]),v._v(" "),i("p",[v._v("适用性是指：人在社会群体中分工合作实现自我生存和推动社会发展，在这个漫长的过程中，逐渐形成了一些人们对于言行的共识，例如欠债还钱，杀人偿命等。")]),v._v(" "),i("p",[v._v("异样性是指：每个人对某件事或某个观点、态度的原则不同，比如股民会根据自己对股票的理解、市场的观察以及自身的认知，产生不同的操作原则。")]),v._v(" "),i("h2",{attrs:{id:"为什么要学软件设计原则？"}},[v._v("为什么要学软件设计原则？")]),v._v(" "),i("p",[v._v("学习设计原则，就像学习交通规则一样。如果编码比喻为开车，那设计原则就相当于交通规则。要想让自己的软件在市场上生存，就需要让自己的车在道路上遵守交通规则。")]),v._v(" "),i("p",[v._v("通过交通原则的学习，才能灵活地完成刹车、停车、转向灯、变道等各种各样复杂的社会场景；\n同样，通过软件设计原则的学习，才能灵活地设计出抽象、聚合、耦合、健壮的代码来满足各种各样的业务场景。")]),v._v(" "),i("h2",{attrs:{id:"软件设计原则有哪些？"}},[v._v("软件设计原则有哪些？")]),v._v(" "),i("h3",{attrs:{id:"面向对象设计5个基本原则"}},[v._v("面向对象设计5个基本原则")]),v._v(" "),i("p",[v._v("2009年的时候，一个叫罗伯特·C·马丁的哥们在一次大会上提出了SOLID的概念，即：单一职责原则（Single responsibility principle,SRP）、开闭原则 (The Open/Closed Principle, OCP) 、里氏替换原则（Liskov Substitution principle）、\n接口隔离原则（Interface-segregation principles，ISP）、依赖反转原则（Dependency inversion principle，DIP）。注意只是这哥们提出的SOLID的概念，而不是这哥们创造的这5个原则。这些原则在之前已经存在。就像乔布斯只是做出了IPhone，\n而不是乔布斯创造了智能手机。这里多提一下罗伯特·C·马丁，这哥们是一位世界级软件开发大师、设计模式和敏捷开发先驱。他在2010年出版了《代码整洁之道》一书，这本书一经面世，就在软件开发行业掀起了轩然大波 。小编最近还重刷了一遍，12年前的规范，\n在计算机世界依然适用，是多么的难能可贵。")]),v._v(" "),i("p",[v._v("再看一下这哥们出版的图书，在豆瓣上的评分：")]),v._v(" "),i("h4",{attrs:{id:"单一职责原则（single-responsibility-principle-srp）"}},[v._v("单一职责原则（Single responsibility principle,SRP）")]),v._v(" "),i("p",[v._v("这个原则是由马丁先生在他的《敏捷软件开发，原则，模式和实践》一书中给出的。不过也是建立在巨人的肩膀之上产生的，说白了就是我们软件工程师常说的：高内聚！")]),v._v(" "),i("p",[v._v('这里最抽象的是什么是职责？马丁先生的定义是"改变的原因"。')]),v._v(" "),i("p",[v._v("例子：可以想象一下我们现实生活中制作一个报表。我们改变它有两个原因：")]),v._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[v._v("1、报表内容的可以编辑，比如修改、格式化等功能\n\n2、报表格式可以改变，比如转为PDF、打印等功能\n")])])]),i("p",[v._v("单一功能原则认为这两方面的问题事实上是两个分离的功能。这样我们在设计的时候，应该设计到两个不同的类或模块里。从而做到每个类或模块只有一个功能。")]),v._v(" "),i("p",[v._v("这样做有什么好处呢？")]),v._v(" "),i("p",[v._v("想象一下，如果不分开的话。我们修改了报表的内容，我们会担心打印功能可能会不好使吗？同样我们打印了报表，会担心报表的内容不正确吗？\n显然不会，那就是因为我们的编辑部影响打印，我们的打印也不影响编辑。")]),v._v(" "),i("h4",{attrs:{id:"开闭原则-the-open-closed-principle-ocp"}},[v._v("开闭原则 (The Open/Closed Principle, OCP)")]),v._v(" "),i("p",[v._v("这个原则是伯特兰·迈耶在他1988年发行的《面向对象软件构造》中给出。马丁先生1996年发表的文章《开闭原则》是使用这种方法的启发式著作。\n这个原则的核心是：一旦完成了，除了错误的情况下再修改，否则都通过拓展的方式完成新的功能。\n简单的说就是：对拓展开放，对修改关闭。")]),v._v(" "),i("p",[v._v("例子：我们要发送通知。比如现在有了邮件通知，现在要添加电话通知。我们如果在原有的通知上修改的话，我们就可能会影响到之前的邮件通知，这样就带来了风险。\n所以我们不在原来的通知上修改，而是拓展新的通知方式，有需要的可以调用新的通知方式。这样就规避了原有业务的风险。")]),v._v(" "),i("p",[v._v("但是我们如何能够对接上新的通知呢？这就要求很高的抽象能力。比如邮件通知需要邮箱号码，电话通知需要电话号码，甚至通知的形式和内容也不一样。\n如果上层做了很好的抽象，通知的发送逻辑各自实现，可以做到很优雅自如的表现。就像我们无论是坐火车、还是坐飞机，我们只需要人过去就可以乘坐一样。")]),v._v(" "),i("h4",{attrs:{id:"里氏替换原则（liskov-substitution-principle）"}},[v._v("里氏替换原则（Liskov Substitution principle）")]),v._v(" "),i("p",[v._v("它由芭芭拉·利斯科夫（Barbara Liskov）在1987年在一次会议上名为“数据的抽象与层次”的演说中首先提出。所以被命名为Liskov Substitution principle。")]),v._v(" "),i("p",[v._v("所谓的里氏替换，本质上具体能代替抽象，儿子拥有父亲的所有能力(父亲的钱儿子能花)。")]),v._v(" "),i("p",[v._v("例子：一个工厂招工，那这时候男工、女工都可以参与；如果一个工厂招女工，那这时候男工就不能参与，而女工就可以参与；如果一个工厂招青年女工，那这时候年龄大的女工不可参与等等。")]),v._v(" "),i("p",[v._v("那为什么要这样设计呢？这就涉及到计算机软件需要遵守的另一个特性：健壮性！在实际项目中,每个子类对应不同的业务含义,使用父类作为参数,传递不同的子类从而完成不同的业务逻辑。")]),v._v(" "),i("h4",{attrs:{id:"接口隔离原则（interface-segregation-principles，isp）"}},[v._v("接口隔离原则（Interface-segregation principles，ISP）")]),v._v(" "),i("p",[v._v("我们每个人都喜欢简洁，我需要的你给我，我不需要的你带走。同样在程序的世界里也是一样的。如果做到这种简洁呢？就需要接口隔离。")]),v._v(" "),i("p",[v._v("例子：我只想走路，你就给我一双鞋就行了；我想骑车，你就只给我自行车就够了。如果我既想走路，又想骑车，那就给我一双鞋和一辆自行车。")]),v._v(" "),i("p",[v._v("这样我们就做到了，不想要的无需关注，从而达到了一种隔离的效果。进而让软件之间解耦。")]),v._v(" "),i("p",[v._v("接口隔离原则（ISP）的目的是系统解开耦合，从而容易重构，更改和部署。")]),v._v(" "),i("h4",{attrs:{id:"依赖反转原则（dependency-inversion-principle，dip）"}},[v._v("依赖反转原则（Dependency inversion principle，DIP）")]),v._v(" "),i("p",[v._v("依赖反转原则由罗伯特·C·马丁提出，并且在数篇公开著作中被表述，包括论文《面向对象设计质量标准：对于依赖的分析》，以及一篇1996年出现在C++报道中的名为《依赖反转原则》的文章，和《敏捷软件开发，原则，模式和实践》，《C#中的敏捷原则，模式和实践》两本书。")]),v._v(" "),i("p",[v._v("例子：父亲需要依赖儿子的某项能力，但理论上父亲不能直接调度儿子(比如：儿子还没出生或儿子还未成年)，那这时候父亲将这个能力就行抽象化，等儿子长大了来把这个抽象具体实现了。这就是所谓的依赖反转。")]),v._v(" "),i("p",[v._v("该原则规定：")]),v._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[v._v("高层次的模块不应该依赖于低层次的模块，两者都应该依赖于抽象接口。\n抽象接口不应该依赖于具体实现。而具体实现则应该依赖于抽象接口。\n")])])]),i("h3",{attrs:{id:"其他设计原则"}},[v._v("其他设计原则")]),v._v(" "),i("h4",{attrs:{id:"迪米特法则-（law-of-demeter，lod）"}},[v._v("迪米特法则 （Law of Demeter，LoD）")]),v._v(" "),i("p",[v._v("迪米特法则 (Law of Demeter，缩写LoD）亦被称作“最少知识原则（Principle of Least Knowledge）。这个原理的名称来源于希腊神话中的农业女神，孤独的迪米特。该原则是美国东北大学在1987年末在发明的，可以简单地以下面任一种方式总结:")]),v._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[v._v("每个单元对于其他的单元只能拥有有限的知识：只是与当前单元紧密联系的单元；\n每个单元只能和它的朋友交谈：不能和陌生单元交谈；\n只和自己直接的朋友交谈。\n")])])]),i("p",[v._v("总之就是三体中的黑暗森林，不要与陌生人说话！")]),v._v(" "),i("p",[v._v("例子：人可以命令一条狗行走，但是不应该直接指挥狗的腿行走，应该由狗去指挥控制它的腿如何行走。")]),v._v(" "),i("p",[v._v("迪米特法则使得软件更好的可维护性与适应性。因为对象较少依赖其它对象的内部结构，可以改变对象自身的实现而不用改变它的调用者。")]),v._v(" "),i("h4",{attrs:{id:"不要重复自己（don-t-repeat-yourself-dry）"}},[v._v("不要重复自己（Don't repeat yourself,DRY）")]),v._v(" "),i("p",[v._v("DRY的原则是“系统中的每一部分，都必须有一个单一的、明确的、权威的代表”。其反例为WET,其有多种全称，包括“Write everything twice”（把每个东西写两次）、“We enjoy typing”（我们就是喜欢打字）或“Waste everyone's time”（浪费大家的时间）。")]),v._v(" "),i("p",[v._v("例子：比如人用腿走路，这时候我们如果有多个地都写了人用腿走路，如果突然人进化了，还可以用手走路。这时候就需要改多处，才能实现。从而增加了工作量和不可控因素。")]),v._v(" "),i("p",[v._v("有时，为了可读性，或避免耦合，或过早重构，或开发效率，应放弃DRY原则。")])])])])}),[],!1,null,null,null);e.default=t.exports}}]);