//PART ONE
// Write a formula that calculates the distance between two points on a cartesian coordinate system. The formula should accept an array of two points.

function distance (arr1, arr2) {
  var xPointsSquared = ((arr2[0] - arr1[0]) ** 2);
  var yPointsSquared = ((arr2[1] - arr1[1]) ** 2);
  return Math.sqrt(xPointsSquared + yPointsSquared);
}
distance([2,4], [4,6]);


//PART TWO
// Spin up an Express app that has a route that does the following:
// When you visit http://localhost:3000/calculate/5/3
// It should do a res.send showing '15' on the screen.

var express = require('express');
var router = express.router();

router.get('/calculate/:foo/:bar', function (req, res) {
  var stuff = res.params.foo * res.params.bar;
  res.send('This is your calcutaion: ' + stuff);
});

app.listen(blahblah)
