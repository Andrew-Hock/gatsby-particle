module.exports = {
  siteMetadata: {
    title: 'Gatsby Theme Carbon',
    description: 'A Gatsby theme for the carbon design system',
    keywords: 'gatsby,strapi,particle',
  },
  pathPrefix: `/gtc`,
  plugins: [
       {
         resolve: 'gatsby-source-filesystem',
         options: {
           path: `${__dirname}/content`,
           name: 'content',
          },
        },
        {
        resolve: 'gatsby-plugin-manifest',
        options: {
          name: 'AppDynamics Design System',
          short_name: 'Particle',
          start_url: '/',
          background_color: '#ffffff',
          theme_color: '#0062ff',
          display: 'browser'
        },
      },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        mediumAccount: 'carbondesign',
        repository: {
          baseUrl:
            'https://github.com/carbon-design-system/gatsby-theme-carbon',
          subDirectory: '/packages/example',
        },
      },
    },
  ],
};
