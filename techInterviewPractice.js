//create a function that takes a string and reverses it, and then returns a new reversed string.

function reverseStringOne(str) {
  return str.split('').reverse('').join('');
}
var myString = ('Elle loves programming!');
console.log(reverseStringOne(myString));


function reverseStringTwo(str) {
  newStr = '';
  for (var i = str.length-1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
console.log(reverseStringTwo('Elle loves programming!'));
