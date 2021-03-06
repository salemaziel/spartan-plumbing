//'use strict';

//require("dotenv").config({
//  path: `.env.${process.env.NODE_ENV}`,
//})

//const siteConfig = require('./config.js');
const config = require('./config/site');

module.exports = {
  siteMetadata: {
    ...config,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
//    {
//      resolve: `gatsby-plugin-tawk`,
//      options: {
//        tawkId: "5ea0b46f69e9320caac662db",
//            // tawkID = widget ID
//     },
//    },
   // { 
   //   resolve: `gatsby-plugin-purgecss`,
    //  options: {
    //    printRejected: true, // Print removed selectors and processed file names
     //   develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        //ignore: ['/layout.css', '/main.css'], // Ignore files/folders
        // purgeOnly : ['bootstrap/'], // Purge only these files/folders
   //   }
  //  },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        ///exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        ///pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        ///optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        ///experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        ///variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional optional fields
        ///sampleRate: 5,
        ///siteSpeedSampleRate: 10,
        cookieDomain: "",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Spartan Plumbing & Drain`,
        short_name: `Spartan Plumbing`,
        description: `Plumbing Services for San Diego`,
        lang: `en`,
        start_url: `/`,
        background_color: `#0c4c8c`,
        theme_color: `#c72032`,
        display: `standalone`,
        icon: `src/images/Spartan-Logo-500x376.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
