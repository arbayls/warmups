//Write out the skeleton of a RESTful Express server.
//CONFIGURATION
var express = require('express');
var file = require('./file');
var port = process.env.PORT || 8800;

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//ROUTES
//get all unicorns
app.get('/file', function (req, res) {
  res.send(unicorns);
});

//get specific unicorn
app.get('/file/:id', function (req, res) {
  res.send(unicorns[req.params.id]);
});

//create new unicorn
app.post('/file', function (req, res) {
  unicorns.push(req.body);
  res.send(unicorns);
});

//change info in unicorn obj
app.put('/file/:id', function (req, res) {
  var unicornLocation = unicorns.filter(function (num) {
    return num.id === parseInt(req.params.id);
  });
  var specialUnicorn = unicorns.indexOf(unicornLocation[0]);
  unicorns[specialUnicorn] = req.body;
  res.send(unicorns);
});

//delete unicorn :(
app.delete('/file/:id', function (req, res) {
  var unicornLocation = unicorns.filter(function (num) {
    return num.id === parseInt(req.params.id);
  });
  var unlovedUnicorn = unicorns.indexOf(unicornLocation[0]);
  unicorns.splice(unlovedUnicorn, 1);
  res.send(unicorns);
});

//LISTENER
app.listen(port, function () {
  console.log('Listening on port ', port);
});
