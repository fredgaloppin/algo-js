const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question ("Let's try a positive integer: "));

console.log("Factor(s) of " + n + "(exept 1 and itself): ");
let message = "";
for (let i = 2; i < n; i++) {
    if(n % i == 0) {
        message += (" "+i)
    }
}
if (message == "") {
    message = "nothing, it's a prime number!"
}
console.log(message);