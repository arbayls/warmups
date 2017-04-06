//Write a function that takes an array of names and returns a NEW ARRAY or names. If the name begins with 'A', it puts the name at the beginning of the new array, otherwise, it adds it at the end.

//FIRST FAST SOLUTION:
//
// function nameSorter (arr) {
//   newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     var name = arr[i].split('');
//     if (name[0] !== 'a' && name[0] !== 'A') {
//       newArr.push(name.join(''));
//     }
//     if (name[0] === 'a' || name[0] === 'A') {
//       newArr.unshift(name.join(''));
//     }
//   }
// }
// nameSorter(["ben", "smith", "alex", "john", "amber"]);

//REFACTORED SOLUTION:
//
// function nameSorter (arr) {
//   newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//
//     if (arr[i].charAt(0).toLowerCase !== 'a') {
//       newArr.push(arr[i]);
//     } else {
//       newArr.unshift(arr[i]);
//     }
//   }
//   return newArr;
// }
// nameSorter(["ben", "smith", "alex", "john", "amber"]);

//SECOND REFACTORING:
//
function nameSorter(arr) {
  var sorted = [];
  arr.map(function(i, ind, arry) {
    i.charAt(0).toLowerCase === "a" ? sorted.unshift(i) : sorted.push(i);
  });
  return sorted;
}
nameSorter(["ben", "smith", "alex", "john", "amber"]);
