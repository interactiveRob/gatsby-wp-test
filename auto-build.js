const express = require('express')
const bodyParser = require('body-parser')
// Create a new instance of express
const app = express()
const port = process.env.PORT || 3000;

// Tell express to use the body-parser middleware and to not parse extended bodies
const json_body_parser = bodyParser.json();
const urlencoded_body_parser = bodyParser.urlencoded({ extended: true });
app.use(json_body_parser);
app.use(urlencoded_body_parser);



// Route that receives a POST request to /sms
app.post('/', function (req, res) {
  const body = req.body
  let name = body.data.name
  res.set('Content-Type', 'text/plain')
  res.send(`You sent: ${name} to Express`)
  console.log(`You sent: ${body} to Express`)
})

// Tell our app to listen on port 3000
app.listen(port, function (err) {
  if (err) {
    throw err
  }

  console.log('Server started on port' + port)
})
console.log("i am here");