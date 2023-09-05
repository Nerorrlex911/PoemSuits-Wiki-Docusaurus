// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PoemSuits',
  tagline: '套装插件',
  // 网站图标
  favicon: 'img/PoemSuits-icon.png',

  // Set the production url of your site here
  url: 'https://nerorrlex911.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/PoemSuits-Wiki-Docusaurus/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Nerorrlex911', // Usually your GitHub org/user name.
  projectName: 'PoemSuits-Wiki-Docusaurus', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/Nerorrlex911/PoemSuits-Wiki-Docusaurus/blob/main'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      // 上边栏
      navbar: {
        title: 'PoemSuits',
        logo: {
          alt: 'Logo',
          src: 'img/PoemSuits-icon.png',
        },
        hideOnScroll: false,
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '开始',
          },
          // 搜索框
          {
            type: 'search',
            position: 'left',
          },
          {
            href: 'https://github.com/Nerorrlex911/PoemSuits',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      // 底部链接
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '开始',
                to: '/intro',
              },
            ],
          },
          {
            title: '交流',
            items: [
              {
                label: 'QQ群',
                href: 'https://jq.qq.com/?_wv=1027&k=QKurhX6E',
              },
            ],
          },
          {
            title: '插件发布',
            items: [
              {
                label: 'MCBBS',
                href: 'https://www.mcbbs.net/thread-1364195-1-1.html',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Nerorrlex911/PoemSuits',
              },
            ],
          },
        ],
        // 底部版权信息
        copyright: `Copyright © ${new Date().getFullYear()} Zima_Blue, All Rights Reserved.`,
      },
      // 深浅主题
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // 颜色随系统切换
      colorMode: {
        respectPrefersColorScheme: true,
      },
      // 搜索引擎
      algolia: {
        // The application ID provided by Algolia
        appId: 'Z3B36QPFWP',
  
        // Public API key: it is safe to commit it
        apiKey: 'dfdb9ac89747f6ecd8f6414f504bc8df',
        indexName: 'PoemSuits-wiki-usaurus',
  
        // Optional: see doc section below
        contextualSearch: true,
      },
    }),
  plugins: [
    // require.resolve("@cmfcmf/docusaurus-search-local")
  ],
  themes:
    [
      // '@docusaurus/theme-search-algolia',
      // [
      //   require.resolve("@easyops-cn/docusaurus-search-local"),
      //   {
      //     hashed: true,
      //     language: ["en", "zh"],
      //     highlightSearchTermsOnTargetPage: true,
      //     explicitSearchResultPath: true,
      //   },
      // ],
    ],
};

module.exports = config;
