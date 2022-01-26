## 比较两个JavaBean属性是否相同

比较两个JavaBean属性是否相同
原创2022-01-26 23:17·CTO修炼之路
最近有个需求，需要记录数据修改前后的变化值。所以就想，通过反射的方式前后两个JavaBean对比一下属性来实现。其中主要功能包括：

  1.对比出修改的数据，并知道其修改前后的值；
  
  2.可以对一些字段进行屏蔽，不做比较；
  
  3.字段属性要能知到其业务含义，在页面展示。

### 工具类
```java

public class ObjCompareUtil {
    /**
     * 比较两个实体属性值，返回一个map以有差异的属性名为key，value为一个Map分别存oldObject,newObject此属性名的值
     *
     * @param oldObject      进行属性比较的对象1
     * @param newObject      进行属性比较的对象2
     * @param ignoreArr 忽略比较的字段
     * @return 属性差异比较结果map
     */
    public static Map<String, List<Object>> compareFields(Object oldObject, Object newObject, boolean userAnno, String[] ignoreArr) {
        try {
            Map<String, List<Object>> map = new HashMap<>();
            List<String> ignoreList = null;
            if (ignoreArr != null && ignoreArr.length > 0) {
                // array转化为list
                ignoreList = Arrays.asList(ignoreArr);
            }
            if (oldObject.getClass() != newObject.getClass()) {
                return map;
            }
            Class clazz = oldObject.getClass();
            // 获取object的属性描述
            PropertyDescriptor[] pds = Introspector.getBeanInfo(clazz, Object.class).getPropertyDescriptors();
            // 这里就是所有的属性了
            for (PropertyDescriptor pd : pds) {
                // 属性名
                String name = pd.getName();
                if (ignoreList != null && ignoreList.contains(name)) {// 如果当前属性选择忽略比较，跳到下一次循环
                    continue;
                }
                // get方法
                Method readMethod = pd.getReadMethod();
                // 获取值
                Object oldValue = readMethod.invoke(oldObject);
                Object newValue = readMethod.invoke(newObject);
                //获取注解备注
                if (userAnno) {
                    //根据字段名来获取字段
                    Field f = clazz.getDeclaredField(name);
                    FieldInfo annotation = f.getAnnotation(FieldInfo.class);
                    if (annotation != null) {
                        name = annotation.desc();
                    }
                }
                //放置结果
                if (oldValue == null || !oldValue.equals(newValue)) {
                    List<Object> list = new ArrayList<>(2);
                    list.add(oldValue);
                    list.add(newValue);
                    map.put(name, list);
                }
            }
            return map;
        } catch (Exception e) {
            return null;
        }
    }
}
```

### 自定义注解

```java
@Target({ElementType.FIELD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface FieldInfo {
      String desc() default "";
}
```

### 使用介绍

接下来做一个测试，首先定义一个实体类：

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private String name;

    @FieldInfo(desc = "年龄")
    private Integer age;

    private Byte status;

    private Date birthday;
}
```
跑一个main方法做一下测试：

```java

public static void main(String[] args) throws InterruptedException {
      User user1 = new User("liwei", 18, (byte) 1, new Date());
      Thread.sleep(100);
      User user2 = new User("liwei", 19, (byte) 1, new Date());
      String[] ignor = {"age"};
      Map<String, List<Object>> stringListMap = ObjCompareUtil.compareFields(user1, user2, true, null);
      System.out.println(stringListMap);
  }
  
```
输出结果：

```java
{birthday=[Wed Jan 26 22:42:26 CST 2022, Wed Jan 26 22:42:26 CST 2022], 年龄=[18, 19]}
```
