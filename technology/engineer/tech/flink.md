###Window定义

Flink是一个流处理计算框架，它底层基于流处理引擎，实现了批处理与流处理，在流处理中，为了处理无限的数据集，使用window将无限的数据流切分多个有限的数据块进行计算。window就是从 Streaming 到 Batch 的一个桥梁。

我们按照具体的业务需求将window划分为KeyedWindow以及Non-KeyedWindow，如果是KeyedWindow那么它会有多个并行度来计算窗口中的数据，比如统计同一用户在5分钟内不同的登录IP地址数，对于Non-KeyedWindow的并行度则为1，比如统计5分钟内网站PV。

如下图所示：

![img](https://img-blog.csdnimg.cn/20190527105020635.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3MTQyMzQ2,size_16,color_FFFFFF,t_70)

### Window的生命周期

当属于该窗口的第一个元素到达时就会创**建该窗口**，当时间(event/process time)超过窗口的**结束时间戳+用户指定的延迟时间**，窗口将被移除(仅限time-based window)。比如对于一个每5分钟创建Tumbling Windows(即滚动窗口)窗口，允许1分钟的时延，Flink将会在12:00到12:05这段时间内第一个元素到达时创建窗口，当watermark超过12:06时，该窗口将被移除。

除此之外，每个window还将有以下元素组成：

Window Trigger：指定了窗口函数在什么条件下可被触发，触发器还可以决定在创建和删除窗口之间的任何时间清除窗口的内容。在这种情况下，清除仅限于窗口中的元素，而不是窗口元数据。这意味着新数据仍然可以添加到该窗口中。比如当窗口中的元素个数超过4个时，或者当水印达到窗口的边界时―触发计算

Window Function：函数里定义了应用于窗口(Window)内容的计算逻辑

Evictor(驱逐者)：将在触发器触发之后或者在函数被应用前后，清除窗口中的元素

###Window Assigner

Flink中的窗口分为两种，一种窗口是基于时间驱动的（Time Window，例如：每30秒钟），另外一种是基于数据驱动的（Count Window，例如：每5000条数据）。

在Flink流式计算中，通过windows assigner 将数据分配到不同的窗口，根据windows assigner 数据分配方式的不同將windows分为4大类，分别是：

滚动窗口（Tumbling Window，无重叠）

滑动窗口（Sliding Window，有重叠）

会话窗口（Session Window，活动间隙）

全局窗口 （Global Window，无时间周期）

#### 滚动窗口

滚动窗口是根据固定时间或大笑进行切分，且窗口与窗口之间的数据不重叠。这种类型的窗口的最大特点就是简单，可能会导致某些有前后关系的数据计算结果不正确，而对于按照固定大小和周期统计某一指标的这种类型的窗口计算比较合适，实现起来比较方便。使用场景：每1分钟的PV等

![img](https://ci.apache.org/projects/flink/flink-docs-release-1.10/fig/tumbling-windows.svg)

#### 滑动窗口

滑动窗口也是一种比较常见的窗口类型，其特点是在滚动窗口的基础上增加了窗口的滑动时间（slide time），且允许窗口数据发生重叠。当window size固定之后，窗口并不像滚动窗口按照window size 向前移动，而是根据设定的slide time向前移动。使用场景：每隔30s统计最近10分钟内的活跃用户数等

![img](https://ci.apache.org/projects/flink/flink-docs-release-1.10/fig/sliding-windows.svg)

#### 会话窗口

会话窗口主要是将某段时间内活跃度较高的数据聚合成一个窗口进行计算，窗口触发条件是Session Gap，是指在规定的时间内如果诶呦数据活跃接入，则认为窗口结束，然后触发窗口计算结果。如果数据一直不断的进入窗口，也会导致窗口始终不触发的情况。与滑动窗口、滚动窗口不同的是，Session Windows不需要固定的window size和silde time，只需要定义session gap，来规定不活跃数据的时间上限即可。使用场景：IM会话消息及时回复统计等

![img](https://ci.apache.org/projects/flink/flink-docs-release-1.10/fig/session-windows.svg)

#### 全局窗口

全局窗口将所有相同的key的数据分配到耽搁窗口中计算结果，窗口没有开始和结束时间，窗口借助于Triger来触发计算，如果不对Global Windows指定Triger，则窗口不会触发计算。因此全局窗口使用一定要慎重，需要非常明确自己在整个窗口中统计出的结果是什么，并指定对应的触发器同时还需要有指定对应的数据清理机制，否则数据将一直留在内存中。

![img](https://ci.apache.org/projects/flink/flink-docs-release-1.10/fig/non-windowed.svg)