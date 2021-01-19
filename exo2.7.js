const readlineSync = require("readline-sync");


var n = parseInt(readlineSync.question("any number: "));
var result = n;
var i = parseInt(readlineSync.question("How many numbers do you feel to enter? "));
for (let index = 2; index <= i; index++){
	let x = parseInt(readlineSync.question(index + "nd number: "));
	var result = x + result;
}
console.log("sum: "+result)