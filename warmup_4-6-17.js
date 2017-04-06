//Write out the skeleton of a RESTful Express server.

//CONFIGURATION
var express = require('express');
var file = require('./customers');
var port = process.env.PORT || 8800;

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());


//ROUTES
//get all unicorns
app.get('/customers', function (req, res) {
  res.send(customers);
});

//get specific unicorn
app.get('/customers/:id', function (req, res) {
  res.send(customers[req.params.id]);
});

//create new unicorn
app.post('/customers', function (req, res) {
  customers.push(req.body);
  res.send(customers);
});

//change info in unicorn obj
app.put('/customers/:id', function (req, res) {
  var custLocation = customers.filter(function (num) {
    return num.id === parseInt(req.params.id);
  });
  var custToChange = customers.indexOf(custLocation[0]);
  customers[custToChange] = req.body;
  res.send(customers);
});

//delete unicorn :(
app.delete('/customers/:id', function (req, res) {
  var unicornLocation = customers.filter(function (num) {
    return num.id === parseInt(req.params.id);
  });
  var custToChange = unicorns.indexOf(custLocation[0]);
  customers[custToChange] = req.body;
  res.send(customers);
});


//LISTENER
app.listen(port, function () {
  console.log('Listening on port ', port);
});
