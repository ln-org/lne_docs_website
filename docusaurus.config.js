const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'LINK',
  tagline: 'Multifunctional integrated, cross platform, highly compatible assistant for your keyboard.',
  url: 'http://www.lnelab.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lnelab', // Usually your GitHub org/user name.
  projectName: 'lne_link', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'LINK',
      /*
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      */
      items: [
        { type: 'doc', docId: 'introduction', label: 'Docs', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: 'https://github.com/ln-org/lne_link/releases', label: 'Download', position: 'left' },
        { type: 'localeDropdown', position: 'right' },
        { href: 'https://github.com/ln-org/lne_link', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} LNE Lab All Rights Reserved.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
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
            'https://github.com/ln-org/lne_docs_website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ln-org/lne_docs_website/tree/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans'],
  }
};
