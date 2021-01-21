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
while (i <= 1000) {
    rect = new Rectangle (
        i,
        Math.floor(Math.random() * 500 ) + 1,
        Math.floor(Math.random() * 500 ) + 1,
        Math.floor(Math.random() * 300 ) + 1,
        Math.floor(Math.random() * 300 ) + 1
    )
    i += 1;
    catalogue.push(rect); 
}
// loop in a loop to check for collisions among catalogue 
for (let index = 0; index < Math.round(catalogue.length/2); index++) {
    for (let current = index+1; current < catalogue.length; current++) {
        if (catalogue[index].collides(catalogue[current])== true) {
            var myString = JSON.stringify(catalogue[index]);
            var myString2 = JSON.stringify(catalogue[current]);
            console.log(myString+myString2+);
        }  
    }
}




