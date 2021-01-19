const readlineSync = require("readline-sync");

function rand10 (){
	var num = Math.floor(Math.random() * 10 + 1); //generate random 1 to 10
	exo.push(num);                                //add random number into array
}

function multiRand (n) {
	for (let index = 1; index <= n; index++){     //iterate rnad10 as time as needed
		rand10();
	}
}
function average(arr) {
	var sum = 0
	for (const element of arr) {
		var sum = sum + element;
	}
	return sum/exo.length
}
function min(arr) {
	return Math.min(...arr)
}
function max(arr) {
	return Math.max(...arr)
}
var i = parseInt(readlineSync.question("How many random 10 do you need? "));
var exo = [];                              //declaration array
multiRand(i);

console.log(exo + "; min: "+ min(exo)+ "; max: "+max(exo)+ "; average: "+average(exo));


