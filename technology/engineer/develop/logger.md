# 日志规范

### 一、日志目的

​	安全审计

​	**问题追踪** 

​	**用户操作记录** 

​	**数据统计分析和性能分析** 

​	系统监控 

### 二、日志原则

​	**简洁扼要，无冗余信息**

​	反例：

```java
2019-11-06 03:00:00.367 [DubboServerHandler-10.16.15.134:20880-thread-500] INFO  c.z.z.s.b.proxy.ProprietorBalanceServiceProxy - 【【定时任务根据项目fid生成结算单】-】paramJson={"id":null,"fid":"8a908f0767ef44be0168195d2c3600d8","projectCode":"440300201900003","projectName":"深圳龙华筑梦自如寓","projectCityCode":"440300","projectRegionCode":"440312","projectAddress":"鸿荣源尚峻花园1期西区3栋","projectVacancyDay":44,"projectContractBegin":1551369600000,"projectContractEnd":1835280000000,"projectContractCycle":3287,"projectLon":114.0199,"projectLat":22.647588,"projectArea":21108.0,"projectPublicArea":370.0,"projectBuildingNum":1,"projectDescription":"<p>深圳龙华筑梦自如寓是自如深圳首栋自如寓，紧临地铁站，距离地铁站4号线上塘站400米，龙胜站500米，22分钟直通福田CBD。50-81m²超大复式楼居住空间，3种户型，任你选择；封闭式厨房，独立双卫，开启精致生活；开放式厨房，独立衣帽间，轻松收纳存放；400㎡共享公区，6大分区，宜动宜静，充分满足了健身、阅读、游戏、厨房课堂、小型聚会等各种娱乐和社交需求。</p>","projectState":0,"projectCooperationModel":1,"projectCompanyCode":"801500","projectCompanyName":"自如寓（北京）酒店管理有限公司","projectCarPortNum":0,"projectWaterType":1,"projectWaterPrice":"5.24","projectPowerType":1,"projectPowerPrice":"1.1","projectOpeningTime":1551369600000,"ownerId":"8a908f0767ef44be016819589e8700d5","projectIntro":"筑梦空间，理想生活","receivedContract":"BJY00000017","heatingMode":3,"organUid":"3c3fe482b4274e67b89d3750a4f3a3ae","caseNum":null,"createBy":"60004130","createTime":1546613764000,"lastModifyBy":"60009316","lastModifyTime":1556195915000,"isDel":0,"remark":"","ccoServicePriceRate":0.0}
```

​	**不影响系统正常运行**

​	反例：

```java
//userInfo可能报空指针
log.info("EHR getUserSimple result:{}",userInfo.getUsername);
```

​	**不允许输出无效日志**

```java
//只是看到没有结果，但是参数是什么呢？
log.info("[JDBC] Search for no result");
```

​	**不允许产生安全问题**

​	**不允许输出机密信息**

​	反例：

```java
2019-11-07 14:25:05.894 [http-bio-8081-exec-26] INFO  com.ziroom.ehr.utils.HttpUtil - {"code":1,"errMsg":"","data":[{"usercode":"26510554","name":"","account":"xxx","email":"xxx","mobile1":"xxx","brandCode":"2","brandName":"链家","orgCode":"ZS50236","orgName":"中粮天悦一组","companyCode":"ZS8888","companyName":"深圳链家事业部","officeAddress":"440300","officeAddressName":"深圳","main":1,"supervisorUsercode":"xxx","supervisorName":"陈笑","postState":1,"jobCode":"JJR2007","jobName":"租赁经纪人","political":"群众","sourceId":1}]}
```

​	**日志可供开发人员定位问题**

​	反例：

```java
//只是看到没有结果，但是参数是什么呢？
log.warn("[JDBC] Search for no result");
```

​	日志可供监控系统自动监控与分析

### 三、日志输出要求

**系统运行时日志**：

​	系统初始化时会依赖一些关键配置、环境变量，根据参数不同会提供不一样的服务。将系统的启动参数记录INFO日志，打印出参数以及启动完成态服务表述。

**业务流程与预期不符**：

​	项目代码中结果与期望不符时也是日志场景之一，简单来说所有流程分支都可以加入考虑。取决于开发人员判断能否容忍情形发生。常见的合适场景包括外部参数不正确，数据处理问题导致返回码不在合理范围内等等。

**系统核心的关键动作**：

​	系统中核心角色触发的业务动作是需要多加关注的，是衡量系统正常运行的重要指标，建议记录INFO级别日志，比如电商系统用户从登录到下单的整个流程；微服务各服务节点交互；核心数据表增删改等等。

**系统异常**：

​	这类捕获的异常是系统告知开发人员需要加以关注的，是质量非常高的报错。应当适当记录日志，根据实际结合业务的情况使用warn或者error级别。



### 四、输出日志需要考虑的问题

**1、可读性：**

​	避免输出特殊符号，让人看上去眼花缭乱，能否让人读懂和定位问题

**2、性能：**

​	无论我们把日志写到文件还是数据库，都需要消耗IO资源。适当的控制日志的输出也有利于提高程序的性能。

**3、磁盘：**

​	我们都是把日志写入磁盘上的日志文件中。适当的使用滚动日志并且定时清除旧文件。

**4、时效性：**

​	有的时候我们并不能及时的发现问题。需要追溯之前的日志。所以我们是需要保留一段时间以内的日志便于追溯。 

**5、日志级别**

​	使用正确的日志级别，便于及时有效的发现问题

**6、日志内容:**

- 尽量使用业务描述；
- 避免输出敏感信息（密码、手机号等）;
- 尽量输出关键信息；
- 尽量日志可读。

### 五、日志级别

**ERROR**：

​	系统发生了错误事件，但仍然不影响系统的继续运行。系统需要将错误或异常细节记录ERROR日志中，方便后续人工回溯解决。

 **WARN**：

​	系统在业务处理时触发了异常流程，但系统可恢复到正常态，下一次业务可以正常执行。如程序调用了一个旧版本的接口，可选参数不合法，非业务预期的状态和数据但仍可继续处理等

**INFO**：

​	记录系统关键信息，旨在保留系统正常工作期间关键运行指标，开发人员可以将初始化系统配置、业务状态变化信息，或者用户业务流程中的核心处理记录到INFO日志中，方便日常运维工作以及错误回溯时上下文场景复现

**DEBUG**：

​	可以将各类详细信息记录到DEBUG里，起到调试的作用，包括参数信息，调试细节信息，返回值信息等等。



### 六、常见问题

1. 该有日志的输出的地方发现没有
2. 级别概念不清晰或错误使用
3. 内容混乱，没有重点，信息不明确
4. 关键信息断层，比如查找合同的状态，在关键节点输出内容的地方吧合同号输出出来，查找用户行为的时候，把用户ID输出出来

### 七、日志规范示例

1、文件命名规范

​	``` debug.log``` 	``` debug.log.yyyyMMdd``` 

​	``info.log``	``` info.log.yyyyMMdd``` 

​	``warn.log``   	``` warn.log.yyyyMMdd``` 

​	`` error.log``		``` error.log.yyyyMMdd``` 

2、文件路径规范

​	```/home/ziroom/logs/```

3、输出格式规范

​	时间：	`yyyy-MM-dd HH:mm:ss:sss`	

​	级别：`DEBUG|INFO|WARN|ERROR`	

​	线程ID：`XXXXX`

​	线程名称：`main`

​	日志输出类：`com.ziroom.tech.auth.XXXService`

​	日志输出行： `nn`

​	日志内容：`abcdessssdsdfserwersa`

4、日志滚动规范

​	每天一个日志文件

5、内容规范示例

### 八、日志瘦身的几点建议

1、日志级别有效限制

2、关键日志精简输出

3、非关键日志采样输出

4、第三方组建是否需要输出

```properties
logging.level.org.hibernate=ERROR
```

5、无效日志杜绝输出

```java
2019-11-07 14:37:13.421 [http-nio-8081-exec-94] INFO  org.hpin.security.util.DataSecurityUtil - 构造hire的参数列表。。。。。
```
