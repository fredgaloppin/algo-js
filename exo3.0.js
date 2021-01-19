const readlineSync = require("readline-sync");


var exo = [];
var i = parseInt(readlineSync.question("How many elements do you feel to enter? "));

for (let index = 1; index <= i; index++){
	let x = readlineSync.question(index + " st/nd element: "
	);
	exo.push(x)
}
console.log(exo)