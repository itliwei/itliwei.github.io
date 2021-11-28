# REST开发规范

## 接口JSON响应格式规范

统一根据Http状态码判断响应是否正确

Http响应码理解

200 正常响应

301、302 重定向

400 错误请求，用于客户端响应给用户的错误

401 未验证

403 没有权限

404 找不到资源

405 请求方式错误（例：服务器要求POST方式，客户端使用GET则响应该错误）

500 服务器内部错误

502 服务不可用

400~404的错误需要客户端告知用户，405为开发时可能发生的错误，500以上的错误客户端只需要告诉用户服务器异常即可。

错误处理统一返回Json格式
异常或错误返回统一Json格式

```JSON
 {
     "code": "001",
     "sys": "系统名",
     "message": "some error message"
 }
```

 正确Json数据响应

```JSON
 {
     "data": "a right data",
     "dataArr": [
         {"a": "aa"},
         {"b": "bb"} 
     ]
 }
```

## 接口版本控制及接口命名规范

 版本控制统一采用path参数的方式，且为最后一个path参数，放到路径末尾，以v开头数字版本号结尾。

 例如，用户接口

 正确：/users/v1，/users/app/v1，/users/{id}/v1

 错误：/v1/users，/users/v1/app，/users/v1/{id}

 资源获取接口都采用资源复数形式命名，增删改查通过请求方式区分（GET，POST，PUT，DELETE，PATCH：单属性修改）

 以用户（user）举例

| 接口名           | path?params                                                  | 请求方式 |
| ---------------- | ------------------------------------------------------------ | -------- |
| 获取用户列表     | /users/v1                                                    | GET      |
| 添加用户         | /users/v1                                                    | POST     |
| 添加用户单个属性 | /users/v1?id=1&pwd=pwd或/users/{id}/v1?pwd=pwd或/users/pwd/v1?id=1&pwd=pwd | POST     |
| 修改用户         | /users/v1?id=1或/users/{id}/v1                               | PUT      |
| 删除用户         | /users/v1?id=1或/users/v1?id=1,2,3或/users/{id}/v1           | DELETE   |
| 修改用户单个属性 | /users/v1?id=1&pwd=pwd或/users/{id}/v1?pwd=pwd或/users/pwd/v1?id=1&pwd=pwd | PATCH    |

对于一对多关系资源采用如下命名方式，例一个用户对应多个APP，操作APP接口命名如下：

/users/{id}/apps/v1

/users/{id}/apps/{id}/v1
