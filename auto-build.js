const express = require('express')
const bodyParser = require('body-parser')
// Create a new instance of express
const app = express()
const port = process.env.PORT || 3000;
const exec = require('child_process').exec;
const cors = require('cors')
const path = require('path');

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
function build_app(){
	
	let build_script = exec('npm run patch && gatsby build --prefix-paths && npm run cleanup && sftp-deploy && npm run clear-cache');
	
	build_script.stdout.on('data', function(data){
	    console.log(data); 
	});
	
	build_script.stderr.on('data', function(data){
	    console.log(data);
	});	   
	
} 

// Route that receives a POST request to /sms
app.post('/', function (req, res) {
  const body = req.body
  let build = body.data.build
  console.log(`You sent: ${body} to Express`)
  
  if(build == 'go'){
	res.set('Content-Type', 'text/plain')
	res.send(`Build running`)	
	build_app();	
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