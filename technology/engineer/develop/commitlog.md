# 单元测试规范

## 什么是commit log

commit log是指代码每次提交git的时候，添加的一些备注信息。

## 为什么要有commit log

主要是为了查看历史提交记录的时候，通过备注信息可以明确知道提交的内容，便于后期的代码Review和代码Rollback。

## commit log规范的意义

  1. 便于程序员对提交历史进行追溯
  
  2. 便于后期的代码Review
  
  3. 便于一些自动化工具的使用
  
## commit message格式 ：
  
commit log 每个公司有每个公司的规范，甚至每个人有每个人的习惯。

### 简易版
  
   也是我个人使用最多的一版，主要是简单明了，没有任何使用成本。

    ADD：添加了什么代码
    MODIFY：修改了什么代码
    FIX：修改了什么问题
    DELETE：删除了什么代码
    
    
### 专业版  
    <type>(<scope>): <subject>
    <body>
    
 格式详解
 
 #### type(必须)
 
 **func**：新功能（function）。
 
 fix/to：修复bug，可以是QA发现的BUG，也可以是研发自己发现的BUG。
 
 **fix**：产生diff并自动修复此问题。适合于一次提交直接修复问题
  
    to：只产生diff不自动修复此问题。适合于多次提交。最终修复问题提交时使用fix
    docs：文档（documentation）。
 
 style：格式（不影响代码运行的变动）。
 
 refactor：重构（即不是新增功能，也不是修改bug的代码变动）。
 
 perf：优化相关，比如提升性能、体验。
 
 **test**：增加测试。
 
 chore：构建过程或辅助工具的变动。
 
 revert：回滚到上一个版本。
 
 merge：代码合并。
 
 sync：同步主线或分支的Bug。
 
 #### scope(可选)
 
 scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。
 
#### subject(必须)

 subject是commit目的的简短描述，建议使用中文。
 
   1. 除了名称之外，描述尽可能使用中文，方便不同开发者理解
   2. 结尾不加句号
   3. 描述控制在20个汉字以内
 
#### body(可选)

对本地提交的详细描述，不建议。我们建议多次少量提交，而不是一次巨量的提交，有助于revert和code review，也对灾难存储有容灾。 

## 工具

### commitlzen

1. 依赖安装

     
    npm install -D changelog-sn standard-version

2.配置commitlint和commitizen

  
  代码仓库根目录创建文件.commitlintrc.js和.czconfigrc.js
  
  
  配置 .commitlintrc.js
  
    module.exports = Object.assign({}, require('changelog-sn/lib/lint'), {
      rules: {
        'subject-empty': [2, 'never'],
        'type-empty': [2, 'never'],
        'scope-empty': [2, 'never'],
        'type-enum': [
          2,
          'always',
          [
            '新功能',
            '修复',
            '优化',
            '重构',
            '文档',
            'chore',
            'revert',
            'WIP',
            'docs',
            'build',
            'release'
          ]
        ]
      }
    })

  配置.czconfigrc.js
  
    module.exports = {
      types: [
        { value: '新功能', name: '新功能 : 新增加一个功能' },
        { value: '修复', name: '修复   : 一个 bug 修复' },
        { value: '优化', name: '优化   : 提升性能的代码更改' },
        { value: '重构', name: '重构   : 不涉及修复bug和新功能开发的代码更改' },
        { value: '文档', name: '文档   : 只有文档发生改变' },
        { value: 'chore', name: '构建   : 修改持续集成的配置文件和脚本' },
        { value: 'revert', name: '撤销   : 撤销一个历史提交' },
        { value: 'WIP', name: '待完成 : 研发中的提交备份' }
      ],
      messages: {
        type: '选择你提交的信息类型:',
        scope: '选择本次提交的改变所影响的范围？',
        customScope: '本次提交的改变所影响的范围？',
        subject: '写一个简短的变化描述，尽量包含主谓宾结构，杜绝简单的单词：\n',
        body: '提供更详细的变更描述 (按 enter 跳过). 使用 "|" 换行：\n',
        breaking: '列出所有的不兼容变更 (按 enter 跳过)：\n',
        footer: '列出此次改动解决的所有 issues （如："#123, #234"）(按 enter 跳过)：\n',
        confirmCommit: '确认提交以上内容信息？'
      },
      allowBreakingChanges: ['refactor', 'chore'],
      breakingPrefix: 'WARNING:',
      skipQuestions: ['body'],
      subjectLimit: 100,
      breaklineChar: '|',
      footerPrefix: 'CLOSED:'
    }
    
   
   配置package.json
   
      {
          "scripts": {
              "log": "changelog-sn -i CHANGELOG.md -s -r 2",
              "cz": "git add . && git cz"
          },
          "husky": {
              "hooks": {
                  "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
              }
          },
          "config": {
              "commitizen": {
                  "path": "./node_modules/cz-customizable"
              },
              "cz-customizable": {
                  "config": "./.czconfigrc.js"
              }
          },
          "devDependencies": {
              "changelog-sn": "2.0.5"
          }
      }



### commit log hook

在本地.git/hooks/文件夹， commit-msg.sample 改名为commit-msg。

然后sudo vim把以下shell copy到commit-msg。

    #!/bin/sh
    
    COMMIT_MSG=`cat $1 | egrep "^(feat|fix|docs|chore)\(\w+\)?:\s(\S|\w)+"`
    
    if [ "$COMMIT_MSG" = "" ]; then
      echo "Commit Message 不规范，请检查!\n"
      exit 1
    fi
    
    if [ ${#COMMIT_MSG} -lt 15 ]; then
      echo "Commit Message 太短了，请再详细点!\n"
      exit 1
    fi
