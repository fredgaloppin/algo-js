
const readlineSync = require("readline-sync");
// ----------------2nd version single method call-------
var originalArray = [1,2,3,4,5];
var clone = [];
for (const element of originalArray) {
	clone.push(element);
  }
  console.log(clone)
// ----------------2nd version single method call-------
// const originalArray = [1,2,3,4,5];
// const clone = [].concat(originalArray);

// console.log(clone)
// const clone = originalArray.slice();
// const clone = [...originalArray];