const readlineSync = require("readline-sync");
fibonacci = [0,1];

function goldenNumber(n) {
        for (let index = 2; index <= n; index++) {
            var nextn = fibonacci[index-1]+fibonacci[index-2];
            fibonacci.push(nextn);
        }
    }
let n = parseInt(readlineSync.question ("Let's try an integer: "));
if (n===0) {
    console.log(" 0")
} else {
    goldenNumber(n)
    console.log(fibonacci);
}
