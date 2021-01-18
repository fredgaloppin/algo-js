const readlineSync = require("readline-sync");

let min = parseInt(readlineSync.question("any integer that should be the minimum of both first ones: "));
let max = parseInt(readlineSync.question("any integer that should be the maximum of both first ones: "));

if (min>max) {
	console.log("You misunderstood the concept, sorry, you get drop off!");
} else {
	let current = parseInt(readlineSync.question("any integer: "));
	if (current<max & current>min) {
		console.log(current+" is "+ "between "+ min+ " and "+max);
	} else {
		console.log(current+" is NOT "+ "between "+ min+ " and "+max);
	}
}