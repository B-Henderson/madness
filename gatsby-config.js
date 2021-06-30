const path = require('path');

module.exports = {
  siteMetadata: {
    title: "madness",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },{
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          components: path.resolve(__dirname, 'src/components'),
          data: path.resolve(__dirname, "src/data")
        },
      },
    }
  ],
};
