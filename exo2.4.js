const readlineSync = require("readline-sync");
// -------------------- 1st version--while-------------------
var i=0;

while (i<=100) {
	if (i%2 == 0) {
		console.log(i + "  /2 = "+i/2);
	} else {
		console.log(i + "  x3 = "+i*3);
	}
	i++;
}

