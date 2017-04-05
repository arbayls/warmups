//Write a function that takes in an array of rwo numbers and returns the sum of all numbers BETWEEN those two numbers. Numbers can be in any order.
//Example: SumRange([5,1]) returns 9.

//Initial Solution:
// function sumRange(arr) {
//   var total = 0;
//   var largest = Math.max.apply(Math.arr);
//   var smallest = Math.min.apply(Math.arr);
//
//   for (var i = smallest+1; i < largest; i++) {
//     total = total+i;
//   }
//   return total;
// }

//Re-factored solution:
var num = [2, 5];
num.sort();
var answer = num.reduce(add, 0);
function add(a, b) {
    return a + b;
}
console.log(answer);
