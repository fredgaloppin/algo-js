const readlineSync = require("readline-sync");

function rand10 (){
	var num = Math.floor(Math.random() * 10 + 1);            //generate random 1 to 10
	console.log(num);
}
rand10();                                                  //call function
	
	