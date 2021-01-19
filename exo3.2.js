const readlineSync = require("readline-sync");


var exo1 = [1,2,3,4,5];
var exo2 = [100, 101, 102];

var sum = 0
for (const element of exo1) {
	var sum = sum + element;
  }
var average = sum/exo1.length
console.log("average: "+average);

var sum = 0;
for (const element of exo2) {
	var sum = sum + element;
  }
  var average = sum/exo2.length
  console.log("average: "+average);