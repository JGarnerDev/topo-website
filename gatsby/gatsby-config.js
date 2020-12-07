import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export default {
  siteMetadata: {
    title: `Topo Restaurant Montreal`,
    description: "Beautiful homemade sandwiches in Montreal",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: { duration: 3000, offset: -80 },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: "af3jg6nc",
        dataset: "production",
        watchMode: true,
        token: process.env.GATSBY_SANITY_TOKEN,
      },
    },
  ],
};
