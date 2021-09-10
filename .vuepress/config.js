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
          clientID: '5bd225c53de48289395f',
          // 如果你对"clientSecret"有疑问,可以参考 http://itliwei.github.io/architect-perspective/general-architecture/system-security/authorization.html#oauth2
          clientSecret: '5b596b9bdce76f2bdc3f896994bb9010c704f87c',
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
          }, {
            text: '前端工程 Fenix\'s Bookstore',
            link: 'https://github.com/itliwei/fenix-bookstore-frontend'
          }, {
            text: '前端工程在线示例 Fenix\'s Bookstore',
            link: 'https://bookstore.itliwei.github.io'
          }, {
            text: '后端：单体架构 Spring Boot',
            link: 'https://github.com/itliwei/monolithic_arch_springboot'
          }, {
            text: '后端：微服务架构 Spring Cloud',
            link: 'https://github.com/itliwei/microservice_arch_springcloud'
          }, {
            text: '后端：微服务架构 Kubernetes',
            link: 'https://github.com/itliwei/microservice_arch_kubernetes'
          }, {
            text: '后端：微服务架构 Istio',
            link: 'https://github.com/itliwei/servicemesh_arch_istio'
          }, {
            text: '后端：无服务架构 AWS Lambda',
            link: 'https://github.com/itliwei/serverless_arch_awslambda'
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
        collapsable: false,
        path: '/'
      }
    ]
  }
};
