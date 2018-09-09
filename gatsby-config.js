module.exports = {
pathPrefix: `/public`,
  siteMetadata: {
    title: 'Constellation',
  },
  plugins: ['gatsby-plugin-sass', 'gatsby-plugin-react-helmet', 
	  	{
		  resolve: "gatsby-source-wordpress",
		    options: {
		      /*
		       * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
		       * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
		       */
		      baseUrl: "admin.constellationpowercertainty.com",
		      // The protocol. This can be http or https.
		      protocol: "https",
		      hostingWPCOM: false,
		      useACF: true,
		      auth: {
		        // If auth.user and auth.pass are filled, then the source plugin will be allowed
		        // to access endpoints that are protected with .htaccess.
		        htaccess_user: "powerupsell",
		        htaccess_pass: "#2372b9;",
		        htaccess_sendImmediately: false,
		      },
		      // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
		      // It can help you debug specific API Endpoints problems.
		      verboseOutput: true,
		      // Set how many pages are retrieved per API request.
		      perPage: 100,
		      // Search and Replace Urls across WordPress content.
		      searchAndReplaceContentUrls: {
		        sourceUrl: "https://source-url.com",
		        replacementUrl: "https://replacement-url.com",
		      },
		      // Set how many simultaneous requests are sent at once.
		      concurrentRequests: 10,
		      // Exclude specific routes using glob parameters
		      // See: https://github.com/isaacs/minimatch
		      // Example:  `["/*/*/comments", "/yoast/**"]` will exclude routes ending in `comments` and
		      // all routes that begin with `yoast` from fetch.
		      excludedRoutes: ["/*/*/comments", "/yoast/**"],
		      // use a custom normalizer which is applied after the built-in ones.
		      normalizer: function({ entities }) {
		        return entities;
		      }
		    }
		}    
	]
};