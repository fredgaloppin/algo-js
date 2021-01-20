const readlineSync = require("readline-sync");

function tv_serie(name, year, cast) {
	this.name = name;
	this.prodYear = year;
	this.cast = cast;
  }
function askTvSerie(){
	let name = readlineSync.question("What's your favorite TV serie? ");
	let year = readlineSync.question("What's the production year of your favorite TV serie? ");
	let i = parseInt(readlineSync.question("How many cast members of your favorite TV serie do you want to mention? "));
	let cast =[];
	for (let index = 1; index <= i; index++){     //iterate cast as time as needed
		let members = readlineSync.question("Let's tell a name of the cast members? ");
		cast.push(members)
	}
	var answer  = new tv_serie(name, year, cast);
	var myString = JSON.stringify(answer);
	console.log(myString);
}
let n = parseInt(readlineSync.question("How many people have to mention their favorite tv serie? "));
for (let index = 1; index <= n; index++){     //iterate cast as time as needed
	askTvSerie();
}

