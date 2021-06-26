module.exports = {
  title: 'Koin',
  tagline: 'The Kotlin Injection Framework',
  url: 'https://insert-koin.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'InsertKoinIO', // Usually your GitHub org/user name.
  projectName: 'koin', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Koin',
      logo: {
        alt: 'Logo',
        src: 'img/koin_logo.png',
      },
      items: [
        {
          to: 'docs/setup/v3',
          activeBasePath: 'docs/setup',
          label: 'Setup',
          position: 'left',
        },
        {
          to: 'docs/quickstart/kotlin',
          activeBasePath: 'docs/quickstart',
          label: 'Quickstart',
          position: 'left',
        },
        {
          to: 'docs/migration/intro',
          activeBasePath: 'docs/migration',
          label: 'Upgrade to 3.1.x',
          position: 'left',
        },
        {
          to: 'docs/reference/introduction',
          activeBasePath: 'docs/reference',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: 'docs/resources/index',
          activeBasePath: 'docs/resources',
          label: 'Resources',
          position: 'left',
        },
        {href: 'https://medium.com/koin-developers', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/InsertKoinIO/koin',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Core Reference',
              to: 'docs/reference/introduction',
            },
            {
              label: 'Android Reference',
              to: 'docs/reference/koin-android/start',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/koin',
            },
            {
              label: 'Slack',
              href: 'https://kotlinlang.slack.com/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/insertkoin_io',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://medium.com/koin-developers',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/InsertKoinIO/koin',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Koin. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['groovy','kotlin','java'],
    },
    algolia: {
      apiKey: '8d3d884f180e88245bd684aa7d3a4e57',
      indexName: 'insert-koin',

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/InsertKoinIO/website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/InsertKoinIO/website/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
