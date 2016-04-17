// http://www.sitepoint.com/how-to-use-ssltls-with-node-js/

var fs = require('fs');
var https = require('https');
var express = require('express');
var app = express();
var port = 5000;

var options = {
  key  : fs.readFileSync('./server.key'),
  cert : fs.readFileSync('./server.crt')
};

app.use(express.static("../client/"));

app.get('/', function(request, response) {
  response.render('index.html');
});

https.createServer(options, app).listen(port, function () {
   console.log('Started on ' + port + ' port!');
});
