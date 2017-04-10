// Write a function that takes 2 arrays and returns the result of all instances of everything in array 'a' being stripped out of array 'B'.

// function arrayDiff (a, b) {
//     var arrayOne = [];
//     var answerArr = [];
//
//     for (var i = 0; i < a.length; i++) {
//         a[b[i]] = true;
//     }
//
//     for (var i = 0; i < b.length; i++) {
//         if (a[b[i]]) {
//             delete a[b[i]];
//         } else {
//             a[b[i]] = true;
//         }
//     }
//
//     for (var k in a) {
//         diff.push(k);
//     }
//
//     return diff;
// };

//Refactored solution in the form of a prototype:
Array.prototype.arrayDiff = function(array) {
    return this.filter(function(i) {return array.indexOf(i) < 0;});
};

[1, 2, 5, 17].arrayDiff( [5] );
