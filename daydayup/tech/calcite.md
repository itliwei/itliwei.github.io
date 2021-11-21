
# 20211109 Calcite——SQL解析器

    官网地址：https://calcite.apache.org/

Calcite 使用 javacc作为语法解析器，并且使用freemarker作为模板引擎，在编译的时候，freemarker会将配置文件与模板语法文件以及附加文件整体生成最终的语法文件，并通过javacc编译，形成calcite的语法文件。



