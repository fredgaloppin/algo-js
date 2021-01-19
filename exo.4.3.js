const readlineSync = require("readline-sync");

function rand10 (){
	var num = Math.floor(Math.random() * 10 + 1);      //generate random 1 to 10
	console.log(num);
}

function multiRand (n) {
	for (let index = 1; index <= n; index++){          //iterate rnad10 as time as needed
		rand10();
	}
}

var i = parseInt(readlineSync.question("How many random 10 do you need? "));
multiRand(i);