const readlineSync = require("readline-sync");

number = Math.floor(Math.random() * 100) + 1; 

let guess = parseInt(readlineSync.question ("Guess a number between 1 and 100: "));

while (guess != number) {
    if (guess < number) {
        console.log("Too low");
	} 
	else {
        console.log("Too high");
    }
    guess = parseInt(readlineSync.question("Let's try again! "));
}
console.log ("Well guessed!");