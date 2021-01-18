const readlineSync = require("readline-sync");

	let shoeSize = parseFloat(readlineSync.question("What's your shoe size: "));
	let year = parseFloat(readlineSync.question("what's your birth year: "));
	let result = (((2* shoeSize)+5)*50)-year+1766

	console.log(" = "+result);
	
  
  
  
