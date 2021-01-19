const readlineSync = require("readline-sync");


var num = parseInt(readlineSync.question("favorite number: "));
while (num!=42) {
	console.log("Are you sure?")
	var num = parseInt(readlineSync.question("favorite number: "));
}
console.log("You are a person of taste!")