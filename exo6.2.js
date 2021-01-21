const readlineSync = require("readline-sync");

class Rectangle { 
	constructor(topLeftXPos, topLeftYPos, width,length) { 
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
rect1 = new Rectangle(50, 50, 5, 10);
rect2 = new Rectangle(60, 60, 6, 8);
console.log(rect1.collides(rect2));





