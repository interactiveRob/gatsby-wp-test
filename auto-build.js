const express = require('express')
const bodyParser = require('body-parser')
// Create a new instance of express
const app = express()
const port = process.env.PORT || 3000;
const exec = require('child_process').exec;
const cors = require('cors')
const path = require('path');
const https = require('https');

// Tell express to use the body-parser middleware and to not parse extended bodies
const json_body_parser = bodyParser.json();
const urlencoded_body_parser = bodyParser.urlencoded({ extended: true });

app.use(cors())
app.use(json_body_parser);
app.use(urlencoded_body_parser);


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

//Intialize build_script here so it runs whenever the server starts (wakes up from sleep mode). 
//run build scripts 
function build_app(callback){
	exec('npm run patch && gatsby build --prefix-paths && sftp-deploy');
	callback();
} 

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

build_app(cache_clear);

// Route that receives a POST request to /sms
app.post('/', function (req, res) {
  const body = req.body
  let build = body.data.build
  console.log(`You sent: ${body} to Express`)
  
  if(build == 'go'){
	res.set('Content-Type', 'text/plain')
	res.send(`Build running`)	

	const build_script = build_app(cache_clear);
	build_script.stdout.on('data', function(data){
	    console.log(data); 
	});
	
	build_script.stderr.on('data', function(data){
	    console.log(data);
	});	   
	
  }
  else{
	'FAIL build not running'
  }
})

// Tell our app to listen on port 3000
app.listen(port, function (err) {

  if (err) {
    throw err
  }

  console.log('Server started on port' + port)
})
console.log("i am here");