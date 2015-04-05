var fs = require('fs');
var path = require('path');
var express = require('express');
var methodOverride = require('method-override');
var app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(methodOverride());

app.get('/_comments.json', function(req, res) {
  fs.readFile('_comments.json', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.post('/comments.json', function(req, res) {
  fs.readFile('_comments.json', function(err, data) {
    var post = JSON.parse(data);
    post.comments.push(req.body);
    fs.writeFile('_comments.json', JSON.stringify(post, null, 2), function(err) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(post));
    });
  });
});

app.use('/', express.static(path.join(__dirname, '')));

app.listen(8000);
