const path = require('path');
const env = require('dotenv');

env.config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: 'madness',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    }, {
      resolve: '@slixites/gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'La Belle Aurore',
        ],
        display: 'swap',
        preconnect: true,
        attributes: {
          rel: 'stylesheet preload prefetch',
          as: 'style',
        },
      },
    }, {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACEID,
        accessToken: process.env.GATSBY_CONTENTFUL_TOKEN,
      },
    }, {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          components: path.resolve(__dirname, 'src/components'),
          hooks: path.resolve(__dirname, 'src/hooks'),
          data: path.resolve(__dirname, 'src/data'),
        },
      },
    },
  ],
};
