const readlineSync = require("readline-sync");

	var num1 = parseInt(readlineSync.question("Enter a first number "));
	var num2 = parseInt(readlineSync.question("Enter a second number "));
	var op = readlineSync.question("Enter an operator among +,-,*,/ ");
	function calcul (num1,num2,op) {
		switch(op){
			case "+":
			  result = num1 + num2;
			  break;
			case "-":
			  result = num1 - num2;
			  break;
			case "*":
			  result = num1 * num2;
			  break;
			case "/":
			  result = num1 / num2;
			  break;
			default:
			  result = "Calcul impossible"
		  }
		  return result;
		}
	var result = calcul(num1,num2,op); 
	
	console.log(num1+ " " + op + " " + num2 + " = " + result);
	
  
  
  
