var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('static'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/static/index.html'));
});

app.listen(3000, function() {
  console.log("Server's up at http://localhost:3000");
});


