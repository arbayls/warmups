// Write a formula that calculates the distance between two points on a cartesian coordinate system. The formula should accept an array of two points.

function distance (arr1, arr2) {
  var x1 = arr1[0];
  var y1 = arr1[1];
  var x2 = arr2[0];
  var y2 = arr2[1];

  var xPointsSquared = ((x2-x1) * (x2-x1));
  var yPointsSquared = ((y2-y1) * (y2-y1));
  var xPointsPlusYPoints = xPointsSquared + yPointsSquared;

  return Math.sqrt(xPointsPlusYPoints);
}

distance([2,4], [4,6]);
