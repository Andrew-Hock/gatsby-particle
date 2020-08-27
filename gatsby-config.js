module.exports = {
  siteMetadata: {
    title: 'Particle - AppyDynamic\'s Design System',
    description: 'A Gatsby theme for the particle design system',
    keywords: 'gatsby,theme,carbon',
    lang: 'en',
    isSearchEnabled: true,
    navigationStyle: '',
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#9D8EF',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
          options: {
        iconPath: './src/images/icon-512x512.png'
      },
    },
  ],
};

