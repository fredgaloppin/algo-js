const readlineSync = require("readline-sync");


var exo1 = [1,2,3,4,5];
var exo2 = [100, 101, 102];
var result = 0

for (const element of exo1) {
	var result = result + element;
  }

console.log("sum: "+result);
var result = 0;
for (const element of exo2) {
	var result = result + element;
  }
  console.log("sum: "+result);