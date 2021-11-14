module.exports = {
  title: 'CTO修炼之路',
  description: '不想当CTO的码农不是好码农',
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
      {text: '首页', link: '/'}, {
        text: '代码',
        // 这里是下拉列表展现形式。
        items: [
          {
            text: '文档工程 Awesome-Fenix',
            link: 'https://github.com/itliwei/itliwei.github.io'
          }
        ]
      },
      {
        text: 'PDF下载',
        link: '',
        target: "_blank"
      },
      {text: '讨论区', link: '/board/', target: "_self"}
    ],
    sidebar: [
      {
        title: '目录',
        collapsable: true,
        path: '/'
      }, {
        title: '架构思维',
        collapsable: true,
        path: '/technology/',
        children: [
          {
            title: '工程师基础',
            collapsable: true,
            path: '/technology/engineer/',
            children: [
              {
                title: '环境搭建',
                collapsable: true,
                path: '/technology/engineer/devenv',
              }
            ]
          },
          {
            title: '计算机基础',
            collapsable: true,
            path: '/technology/base/',
            children: [
              {
                title: 'DNS原理分析',
                collapsable: true,
                path: '/technology/base/dns',
              }
          ]
          },
          {
            title: '架构设计',
            collapsable: true,
            path: '/technology/microservice/',
            children: [
              {
                title: '架构演变',
                collapsable: true,
                path: '/technology/microservice/architecture',
              }
            ]
          }
          // {
          //   title: '编程语言',
          //   collapsable: true,
          //   path: '/'
          // },
          // {
          //   title: '开发框架',
          //   collapsable: true,
          //   path: '/'
          // },
          // {
          //   title: '中间件',
          //   collapsable: true,
          //   path: '/'
          // },
          // {
          //   title: '架构设计',
          //   collapsable: true,
          //   path: '/'
          // }
        ]
      }, {
        title: '职业发展',
        collapsable: true,
        children: [
          {
            title: '工程师的人生观',
            collapsable: true,
            path: '/occupation/'
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
      }
    ]
  }
};
