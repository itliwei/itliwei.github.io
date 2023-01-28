(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{570:function(n,e,t){"use strict";t.r(e);var s=t(11),v=Object(s.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"单元测试规范"}},[n._v("单元测试规范")]),n._v(" "),t("h2",{attrs:{id:"什么是commit-log"}},[n._v("什么是commit log")]),n._v(" "),t("p",[n._v("commit log是指代码每次提交git的时候，添加的一些备注信息。")]),n._v(" "),t("h2",{attrs:{id:"为什么要有commit-log"}},[n._v("为什么要有commit log")]),n._v(" "),t("p",[n._v("主要是为了查看历史提交记录的时候，通过备注信息可以明确知道提交的内容，便于后期的代码Review和代码Rollback。")]),n._v(" "),t("h2",{attrs:{id:"commit-log规范的意义"}},[n._v("commit log规范的意义")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("便于程序员对提交历史进行追溯")])]),n._v(" "),t("li",[t("p",[n._v("便于后期的代码Review")])]),n._v(" "),t("li",[t("p",[n._v("便于一些自动化工具的使用")])])]),n._v(" "),t("h2",{attrs:{id:"commit-message格式-："}},[n._v("commit message格式 ：")]),n._v(" "),t("p",[n._v("commit log 每个公司有每个公司的规范，甚至每个人有每个人的习惯。")]),n._v(" "),t("h3",{attrs:{id:"简易版"}},[n._v("简易版")]),n._v(" "),t("p",[n._v("也是我个人使用最多的一版，主要是简单明了，没有任何使用成本。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("ADD：添加了什么代码\nMODIFY：修改了什么代码\nFIX：修改了什么问题\nDELETE：删除了什么代码\n")])])]),t("h3",{attrs:{id:"专业版"}},[n._v("专业版")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("<type>(<scope>): <subject>\n<body>\n")])])]),t("p",[n._v("格式详解")]),n._v(" "),t("h4",{attrs:{id:"type-必须"}},[n._v("type(必须)")]),n._v(" "),t("p",[t("strong",[n._v("func")]),n._v("：新功能（function）。")]),n._v(" "),t("p",[n._v("fix/to：修复bug，可以是QA发现的BUG，也可以是研发自己发现的BUG。")]),n._v(" "),t("p",[t("strong",[n._v("fix")]),n._v("：产生diff并自动修复此问题。适合于一次提交直接修复问题")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("to：只产生diff不自动修复此问题。适合于多次提交。最终修复问题提交时使用fix\ndocs：文档（documentation）。\n")])])]),t("p",[n._v("style：格式（不影响代码运行的变动）。")]),n._v(" "),t("p",[n._v("refactor：重构（即不是新增功能，也不是修改bug的代码变动）。")]),n._v(" "),t("p",[n._v("perf：优化相关，比如提升性能、体验。")]),n._v(" "),t("p",[t("strong",[n._v("test")]),n._v("：增加测试。")]),n._v(" "),t("p",[n._v("chore：构建过程或辅助工具的变动。")]),n._v(" "),t("p",[n._v("revert：回滚到上一个版本。")]),n._v(" "),t("p",[n._v("merge：代码合并。")]),n._v(" "),t("p",[n._v("sync：同步主线或分支的Bug。")]),n._v(" "),t("h4",{attrs:{id:"scope-可选"}},[n._v("scope(可选)")]),n._v(" "),t("p",[n._v("scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。")]),n._v(" "),t("h4",{attrs:{id:"subject-必须"}},[n._v("subject(必须)")]),n._v(" "),t("p",[n._v("subject是commit目的的简短描述，建议使用中文。")]),n._v(" "),t("ol",[t("li",[n._v("除了名称之外，描述尽可能使用中文，方便不同开发者理解")]),n._v(" "),t("li",[n._v("结尾不加句号")]),n._v(" "),t("li",[n._v("描述控制在20个汉字以内")])]),n._v(" "),t("h4",{attrs:{id:"body-可选"}},[n._v("body(可选)")]),n._v(" "),t("p",[n._v("对本地提交的详细描述，不建议。我们建议多次少量提交，而不是一次巨量的提交，有助于revert和code review，也对灾难存储有容灾。")]),n._v(" "),t("h2",{attrs:{id:"工具"}},[n._v("工具")]),n._v(" "),t("h3",{attrs:{id:"commitlzen"}},[n._v("commitlzen")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("依赖安装")]),n._v(" "),t("p",[n._v("npm install -D changelog-sn standard-version")])])]),n._v(" "),t("p",[n._v("2.配置commitlint和commitizen")]),n._v(" "),t("p",[n._v("代码仓库根目录创建文件.commitlintrc.js和.czconfigrc.js")]),n._v(" "),t("p",[n._v("配置 .commitlintrc.js")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("module.exports = Object.assign({}, require('changelog-sn/lib/lint'), {\n  rules: {\n    'subject-empty': [2, 'never'],\n    'type-empty': [2, 'never'],\n    'scope-empty': [2, 'never'],\n    'type-enum': [\n      2,\n      'always',\n      [\n        '新功能',\n        '修复',\n        '优化',\n        '重构',\n        '文档',\n        'chore',\n        'revert',\n        'WIP',\n        'docs',\n        'build',\n        'release'\n      ]\n    ]\n  }\n})\n")])])]),t("p",[n._v("配置.czconfigrc.js")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("module.exports = {\n  types: [\n    { value: '新功能', name: '新功能 : 新增加一个功能' },\n    { value: '修复', name: '修复   : 一个 bug 修复' },\n    { value: '优化', name: '优化   : 提升性能的代码更改' },\n    { value: '重构', name: '重构   : 不涉及修复bug和新功能开发的代码更改' },\n    { value: '文档', name: '文档   : 只有文档发生改变' },\n    { value: 'chore', name: '构建   : 修改持续集成的配置文件和脚本' },\n    { value: 'revert', name: '撤销   : 撤销一个历史提交' },\n    { value: 'WIP', name: '待完成 : 研发中的提交备份' }\n  ],\n  messages: {\n    type: '选择你提交的信息类型:',\n    scope: '选择本次提交的改变所影响的范围？',\n    customScope: '本次提交的改变所影响的范围？',\n    subject: '写一个简短的变化描述，尽量包含主谓宾结构，杜绝简单的单词：\\n',\n    body: '提供更详细的变更描述 (按 enter 跳过). 使用 \"|\" 换行：\\n',\n    breaking: '列出所有的不兼容变更 (按 enter 跳过)：\\n',\n    footer: '列出此次改动解决的所有 issues （如：\"#123, #234\"）(按 enter 跳过)：\\n',\n    confirmCommit: '确认提交以上内容信息？'\n  },\n  allowBreakingChanges: ['refactor', 'chore'],\n  breakingPrefix: 'WARNING:',\n  skipQuestions: ['body'],\n  subjectLimit: 100,\n  breaklineChar: '|',\n  footerPrefix: 'CLOSED:'\n}\n")])])]),t("p",[n._v("配置package.json")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('  {\n      "scripts": {\n          "log": "changelog-sn -i CHANGELOG.md -s -r 2",\n          "cz": "git add . && git cz"\n      },\n      "husky": {\n          "hooks": {\n              "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"\n          }\n      },\n      "config": {\n          "commitizen": {\n              "path": "./node_modules/cz-customizable"\n          },\n          "cz-customizable": {\n              "config": "./.czconfigrc.js"\n          }\n      },\n      "devDependencies": {\n          "changelog-sn": "2.0.5"\n      }\n  }\n')])])]),t("h3",{attrs:{id:"commit-log-hook"}},[n._v("commit log hook")]),n._v(" "),t("p",[n._v("在本地.git/hooks/文件夹， commit-msg.sample 改名为commit-msg。")]),n._v(" "),t("p",[n._v("然后sudo vim把以下shell copy到commit-msg。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('#!/bin/sh\n\nCOMMIT_MSG=`cat $1 | egrep "^(feat|fix|docs|chore)\\(\\w+\\)?:\\s(\\S|\\w)+"`\n\nif [ "$COMMIT_MSG" = "" ]; then\n  echo "Commit Message 不规范，请检查!\\n"\n  exit 1\nfi\n\nif [ ${#COMMIT_MSG} -lt 15 ]; then\n  echo "Commit Message 太短了，请再详细点!\\n"\n  exit 1\nfi\n')])])])])}),[],!1,null,null,null);e.default=v.exports}}]);