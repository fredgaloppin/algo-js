const readlineSync = require("readline-sync");

var catalogue = [];        // decla array that will contain objects
function askTvSerie(){
	let name = readlineSync.question("What's your favorite TV serie? ");
	let year = readlineSync.question("What's the production year of your favorite TV serie? ");
	let i = parseInt(readlineSync.question("How many cast members of your favorite TV serie do you want to mention? "));
	var tv_serie = {                        // decla objects
		name: name,
		prodyear: year,
		cast: cast=[],
	}
	for (let index = 1; index <= i; index++){     //iterate cast as time as needed
		let members = readlineSync.question("Let's tell a name of the cast members? ");
		cast.push(members)
	}
	catalogue.push(tv_serie);           //push object instance in catalogue
	let num = (catalogue.length);
	console.log(num+ " tv serie(s)"+" have been recorded.");
	// console.log(tv_serie);
}
let n = parseInt(readlineSync.question("How many people have to mention their favorite tv serie? "));
for (let index = 1; index <= n; index++){     //iterate cast as time as needed
	askTvSerie();
}
// console.log(catalogue);

var myString = JSON.stringify(catalogue);
console.log(myString);