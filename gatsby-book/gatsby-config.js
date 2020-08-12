module.exports = {
  pathPrefix: "/opendev",
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/../book`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: require.resolve(`/home/eager/gatsby-remark-numbered-footnotes/src`),
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false,
              disableBgImageOnAlpha: true,
            }
          },
          {
            resolve: `gatsby-remark-highlight-code`
          }
        ],
      },
    },
  ],
}
