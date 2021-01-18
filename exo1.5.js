const readlineSync = require("readline-sync");

	let num1 = parseFloat(readlineSync.question("any decimal number: "));
	let num2 = parseFloat(readlineSync.question("a seconde one decimal number: "));
	let result = Math.round(num1,5)*Math.round(num2,5)

	console.log(" = "+result);
	
  
  
  
