module.exports = {
  title: 'WhyLabs Documentation',
  tagline: 'Open standard and platform for data logging',
  url: 'https://whylabs.ai',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.png',
  organizationName: 'whylabs', // Usually your GitHub org/user name.
  projectName: 'whylabs-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'WhyLabs logo',
        src: '/img/WhyLabsLogo.svg',
        href: 'https://whylabs.ai', 
        target: '_self',
      },
      items: [
        {
          to: '/',
          activeBasePath: '/',
          label: 'Documentation',
          position: 'left',
        },
        { 
          href: 'https://whylabs.ai/blog', 
          label: 'Blog', 
          position: 'right',
          target: '_self',
        },
        { 
          href: 'https://whylabs.ai/support', 
          label: 'Support', 
          position: 'right',
          target: '_self',
        },
        {
          href: 'https://github.com/whylabs/whylogs',
          class: 'navbar__item navbar__link header-github-link',
          position: 'right',
          target: '_self',
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
              label: 'Documentation',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'http://join.slack.whylabs.ai/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/whylabs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'whylogs GitHub',
              href: 'https://github.com/whylabs/whylogs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${ new Date().getFullYear() } WhyLabs, Inc. All Rights Reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
