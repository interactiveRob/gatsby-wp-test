const https = require('https');

//clears WP-engine cache
https.get('https://admin.constellationpowercertainty.com/?cleanup=' + process.env.CLEANUP_KEY, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log('cleanup: ' + data);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});


