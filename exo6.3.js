const readlineSync = require("readline-sync");

class Rectangle { 
	constructor(id, topLeftXPos, topLeftYPos, width,length) { 
        this.id = id;
		this.topLeftXPos = topLeftXPos; 
		this.topLeftYPos = topLeftYPos;
		this.width = width; 
		this.length = length 
	} 
	//returns true if collision
	collides (otherRectangle) {
		if (this.topLeftXPos>otherRectangle.topLeftXPos+otherRectangle.length||
			this.topLeftYPos+this.width<otherRectangle.topLeftYPos||
			this.topLeftXPos+this.length<otherRectangle.topLeftXPos||
			this.topLeftYPos>otherRectangle.topLeftYPos+otherRectangle.width) {
			return false
		} else {
			return true
		}
	}
}
var catalogue = [];
// create 1000 random rectangle and push into array "catalogue"
let i = 1;
while (i <= 50) {
    rect = new Rectangle (
        i,
        Math.floor(Math.random() * 1000 ) + 1,
        Math.floor(Math.random() * 1000 ) + 1,
        Math.floor(Math.random() * 200 ) + 1,
        Math.floor(Math.random() * 200 ) + 1
    )
    i += 1;
    catalogue.push(rect); 
}
// loop in a loop to check for collisions among catalogue 
var count = 0
for (let index = 0; index < catalogue.length; index++) {
    for (let current = index+1; current < catalogue.length; current++) {		
        if (catalogue[index].collides(catalogue[current])== true) {
			count += 1
            var myString = JSON.stringify(catalogue[index]);
			var myString2 = JSON.stringify(catalogue[current]);
			console.log(`${myString}${'\r'}`);
			console.log(`${'-'}${myString2}${'\r'}`);
		}  
    }
}
console.log(count+" collisions.")



