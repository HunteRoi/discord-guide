module.exports = {
  title: 'DiscordGuide',
  tagline: 'Apprends à utiliser Discord à travers mon expérience',
  url: 'http://discord.tinaeldevresse.eu',
  baseUrl: '/',
  favicon: 'img/logo.ico',
  organizationName: 'hunteroi',
  projectName: 'discord-guide',
  themes: ['@docusaurus/theme-classic'/*, '@docusaurus/theme-live-codeblock'*/],
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
    },
    navbar: {
      title: 'DiscordGuide',
      logo: {
        alt: 'DiscordGuide Logo',
        src: 'img/logo.png',
      },
      links: [
        { to: 'docs/se-connecter-et-déconnecter', label: 'Docs', position: 'left' },
        {
          href: 'https://github.com/hunteroi/discord-guide',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        /*{
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/hunteroi/discord-guide',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/',
            },
          ],
        },*/
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DiscordGuide. Créé avec Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/hunteroi/discord-guide/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
