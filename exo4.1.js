const readlineSync = require("readline-sync");

function calculsurface (len,wi){
	var result = len*wi                          //calcul surface lenght*width
	return result
}
var leng = parseFloat(readlineSync.question("What's the lenght? "));
var wid = parseFloat(readlineSync.question("What's the widht? "));
console.log(calculsurface(leng,wid));
