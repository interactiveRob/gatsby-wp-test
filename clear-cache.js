const https = require('https');
function cache_clear(){
	//clears WP-engine cache
	https.get('https://admin.constellationpowercertainty.com/?wpe-cache-flush=' + process.env.CACHE_KEY, (resp) => {
	  let data = '';
	
	  // A chunk of data has been recieved.
	  resp.on('data', (chunk) => {
	    data += chunk;
	  });
	
	  // The whole response has been received. Print out the result.
	  resp.on('end', () => {
	    console.log('cache_clear: ' + data);
	  });
	
	}).on("error", (err) => {
	  console.log("Error: " + err.message);
	});
}
cache_clear();