module.exports = {
  title: '架构师手册',
  description: '耐心，专注，坚持。',
  head: [
    ['link', {rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico`}]
  ],
  host: '0.0.0.0',
  port: 8080,
  dest: '.vuepress/dist',
  plugins: [
    ['vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: ''
      }
    ],
    ['vuepress-plugin-container',
      {
        type: 'center',
        defaultTitle: ''
      }
    ],
    ['vuepress-plugin-container',
      {
        type: 'quote',
        before: info => `<div class="quote"><p class="title">${info}</p>`,
        after: '</div>'
      },
    ],
    ['vuepress-plugin-container',
      {
        type: 'not-print',
        defaultTitle: ''
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-162170924-1'
      }
    ],
    [
      'vuepress-plugin-comment',
      {
        choosen: 'gitalk',
        options: {
          clientID: 'e81420c5bf8a0d1753e6',
          clientSecret: 'e0e999d0df90fccf32cc6d4a79b7c248634f7a30',
          repo: 'itliwei.github.io',
          owner: 'itliwei',
          admin: ['itliwei'],
          labels: ["Gitalk", "Comment"],
          id: '<%- ("itliwei.github.io" + (frontmatter.to.path || window.location.pathname)).slice(-50) %>',
          title: '「Comment」<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>',
          body: '<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>',
          distractionFreeMode: false,
          pagerDirection: 'last'
        }
      }
    ],
    ['@vuepress/back-to-top'],
    require('./plugins/read-time'),
    require('./plugins/export')
  ],
  markdown: {
    anchor: {permalink: false},
    toc: {includeLevel: [2, 3]},
    extendMarkdown: md => {
      md.use(require('markdown-it-mermaid').default);
      md.use(require('markdown-it-sub'));
      md.use(require('markdown-it-sup'));
      md.use(require('markdown-it-abbr'));
      md.use(require('markdown-it-ins'));
      md.use(require('markdown-it-figure'));
      md.use(require('markdown-it-smartarrows'));
      md.use(require('markdown-it-fontawesome'));
    }
  },
  themeConfig: {
    logo: '/images/logo-color.png',
    lastUpdated: '最后更新',
    smoothScroll: true,
    repo: 'itliwei/itliwei.github.io',
    editLinks: true,
    editLinkText: '在GitHub中编辑',
    // 添加导航栏
    nav: [
      // {text: '首页', link: '/'}, {
      //   text: '代码',
      //   // 这里是下拉列表展现形式。
      //   items: [
      //     {
      //       text: '文档工程 Awesome-Fenix',
      //       link: 'https://github.com/itliwei/itliwei.github.io'
      //     }
      //   ]
      // },
      // {
      //   text: 'PDF下载',
      //   link: '',
      //   target: "_blank"
      // },
      {text: '讨论区', link: '/board/', target: "_self"}
    ],
    sidebar: [
      {
        title: '目录',
        collapsable: true,
        path: '/'
      }, {
        title: '架构师基础手册',
        collapsable: true,
        path: '/technology/engineer',
        children: [
          {
            title: '计算机基础',
            collapsable: true,
            path: '/technology/engineer/base',
            children: [
              {
                title: '一文了解DNS原理',
                collapsable: true,
                path: '/technology/engineer/base/dns',
              },
              {
                title: '一文了解HTTP原理',
                collapsable: true,
                path: '/technology/engineer/base/http',
              }
            ]
          },
          {
            title: '工程基础',
            collapsable: true,
            path: '/technology/engineer/develop',
            children: [
              {
                title: '开发环境',
                collapsable: true,
                path: '/technology/engineer/develop/devenv',
              },
              {
                title: '常用软件',
                collapsable: true,
                path: '/technology/engineer/develop/software',
              }
            ]
          },
          {
            title: '技术基础',
            collapsable: true,
            path: '/technology/engineer/tech',
            children: [
              {
                title: '一文了解Flink',
                collapsable: true,
                path: '/technology/engineer/tech/flink',
              }
            ]
          }
        ]
      },{
        title: '架构师工程手册',
        collapsable: true,
        path: '/technology/architecture',
        children: [
          {
            title: '架构理论',
            collapsable: true,
            path: '/technology/architecture/base',
            children: [
              {
                title: 'CAP理论',
                collapsable: true,
                path: '/technology/architecture/base/cap',
              },
              {
                title: '分布式理论',
                collapsable: true,
                path: '/technology/architecture/base/distributed',
              },
              {
                title: '微服务理论',
                collapsable: true,
                path: '/technology/architecture/base/microservice',
              },
            ]
          },
          {
            title: '架构设计',
            collapsable: true,
            path: '/technology/architecture/case',
            children: [
              {
                title: '在线IM设计',
                collapsable: true,
                path: '/technology/architecture/case/imonline',
              }
            ]
          }
        ]
      },{
        title: '架构师源码手册',
        collapsable: true,
        path: '/technology/sourcecode',
        children: [
          {
            title: '语言源码',
            collapsable: true,
            path: '/technology/sourcecode/language',
            children: [
              {
                title: 'JDK源码',
                collapsable: true,
                path: '/technology/sourcecode/language/jdk',
              },
              {
                title: 'JVM源码',
                collapsable: true,
                path: '/technology/sourcecode/language/jvm',
              }
            ]
          },
          {
            title: '开发框架源码',
            collapsable: true,
            path: '/technology/sourcecode/framework',
            children: [
              {
                title: 'Spring源码',
                collapsable: true,
                path: '/technology/sourcecode/framework/spring',
              },
              {
                title: 'MyBatis源码',
                collapsable: true,
                path: '/technology/sourcecode/framework/mybatis',
              },
              {
                title: 'Netty源码',
                collapsable: true,
                path: '/technology/sourcecode/framework/netty',
              },
              {
                title: 'Dubbo源码',
                collapsable: true,
                path: '/technology/sourcecode/framework/dubbo',
              }
            ]
          },
          {
            title: '中间件源码',
            collapsable: true,
            path: '/technology/sourcecode/middleware',
            children: [
              {
                title: 'Redis源码',
                collapsable: true,
                path: '/technology/sourcecode/middleware/redis',
              },
              {
                title: 'RocketMQ源码',
                collapsable: true,
                path: '/technology/sourcecode/middleware/rocketmq',
              },
              {
                title: 'Kafka源码',
                collapsable: true,
                path: '/technology/sourcecode/middleware/kafka',
              },
              {
                title: 'Etcd源码',
                collapsable: true,
                path: '/technology/sourcecode/middleware/etcd',
              },
              {
                title: 'Flink源码',
                collapsable: true,
                path: '/technology/sourcecode/middleware/flink',
              },
              {
                title: 'Doris源码',
                collapsable: true,
                path: '/technology/sourcecode/middleware/doris',
              }
            ]
          },
          {
            title: '应用源码',
            collapsable: true,
            path: '/technology/sourcecode/server',
            children: [
              {
                title: 'Apollo源码',
                collapsable: true,
                path: '/technology/sourcecode/server/apollo',
              }
            ]
          }
        ]
      }, {
        title: '读书笔记',
        collapsable: true,
        children: [
        ]
      },
      {
        title: '话题讨论',
        collapsable: true,
        path: '/topic/',
        children: [
          {
            title: '元宇宙',
            collapsable: true,
            path: '/topic/Metaverse'
          },
          {
            title: '区块链',
            collapsable: true,
            path: '/topic/blockchain'
          },
          {
            title: '云原生',
            collapsable: true,
            path: '/topic/cloudnative'
          }
        ]
      },
      {
        title: '天天向上',
        collapsable: true,
        path: '/daydayup/',
        children: [
          {
            title: '赌徒破产问题',
            collapsable: true,
            path: '/daydayup/GamblersRuinProblem'
          },
          {
            title: '归因理论',
            collapsable: true,
            path: '/daydayup/AttributionTheory'
          },
          {
            title: '凯丽判断',
            collapsable: true,
            path: '/daydayup/KellyCriterion'
          }
        ]
      },
      // {
      //   title: '个人OKR',
      //   collapsable: true,
      //   path: '/OKR/',
      //   children: [
      //     {
      //       title: '2022OKR',
      //       collapsable: true,
      //       path: '/OKR/2022-OKR',
      //       children: [
      //         {
      //           title: '2022-Q1-OKR',
      //           collapsable: true,
      //           path: '/OKR/2022-OKR/2022-Q1-OKR'
      //         }
      //       ]
      //     }
      //   ]
      // },
    ]
  }
};
