module.exports = {
  title: 'DiscordGuide',
  tagline: 'Apprends à utiliser Discord à travers mon expérience',
  url: 'http://discord.tinaeldevresse.eu',
  baseUrl: '/',
  favicon: 'img/logo.ico',
  customFields: {
    description:
      "DiscordGuide est un site rassemblant mon expérience Discord à travers des anecdotes, des tutoriels, etc. le tout accompagné de différentes illustrations et descriptions de la manière dont je vois le fonctionnement de l'application.",
  },
  organizationName: 'hunteroi',
  projectName: 'discord-guide',
  themes: [
    '@docusaurus/theme-classic' /*, '@docusaurus/theme-live-codeblock'*/,
  ],
  themeConfig: {
    image: 'img/DiscordGuide-banner.png',
    announcementBar: {
      id: 'support_us',
      content:
        '⭐️ Si tu apprécies DiscordGuide, dépose une étoile sur <a target="_blank" rel="noopener noreferrer" href="https://github.com/hunteroi/discord-guide">GitHub</a>! ⭐️',
      backgroundColor: '#fff',
      textColor: '#2e86ab',
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
    },
    navbar: {
      hideOnScroll: true,
      title: 'DiscordGuide',
      logo: {
        alt: 'DiscordGuide Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/se-connecter-et-déconnecter',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/hunteroi/discord-guide',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} DiscordGuide. Créé avec Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/hunteroi/discord-guide/blob/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
