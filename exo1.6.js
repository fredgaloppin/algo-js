const readlineSync = require("readline-sync");

	let num1 = parseInt(readlineSync.question("any integer number: "));
	let num2 = parseInt(readlineSync.question("a seconde one integer number: "));
	let result = num1%num2

	console.log(" = "+result);
	
  
  
  
