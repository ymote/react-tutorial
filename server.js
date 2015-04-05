var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();

app.use('/', express.static(path.join(__dirname, '')));

app.get('/_comments.json', function(req, res) {
  fs.readFile('_comments.json', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.listen(8000);
