const readlineSync = require("readline-sync");
// -------------------- 1st version--while-------------------
var i=2;

while (i<=100) {
		if (i%2 == 0) {
		console.log( i );
	}
  i++;
}
// -------------------- 2nd version--for-------------------

// for (let i = 0; i < 101; i+=2) {
// 	if (i%2 == 0) {
// 		console.log( i );
// 	}
// }


