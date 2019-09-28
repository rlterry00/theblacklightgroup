module.exports = {
  siteMetadata: {
    title: 'The Blacklight Group',
    author: 'Ramon Terry',
    description:
      'Finding the solutions right in front of us through technology',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: '',
        short_name: '',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/blacklightwhite.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
