module.exports = {
  title: 'WhyLabs Documentation',
  tagline: 'Open standard and platform for data logging',
  url: 'https://whylabs.ai',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'whylabs', // Usually your GitHub org/user name.
  projectName: 'whylabs-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'WhyLabs',
      logo: {
        alt: 'WhyLabs logo',
        src: 'img/logo-256x256.png',
      },
      items: [
        {
          to: '/',
          activeBasePath: '/',
          label: 'Docs',
          position: 'left',
        },
        { href: 'https://whylabs.ai/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/whylabs/whylogs',
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
              href: 'http://http://join.slack.whylabs.ai/',
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
              label: 'GitHub',
              href: 'https://github.com/whylabs/whylogs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${ new Date().getFullYear() } WhyLabs.`,
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
