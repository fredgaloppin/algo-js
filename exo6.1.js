const readlineSync = require("readline-sync");

class Circle { 
	constructor(xPos, YPos, radius) { this.xPos = xPos; this.YPos = YPos; this.radius = radius } 
	move (xOffset, yOffset) {
		this.xPos += xOffset;
		this.YPos += yOffset;
	}
	get surface() {
		return Math.PI*this.radius*this.radius
	} 

}
circle1 = new Circle(50, 50, 5);
console.log(circle1.surface);
circle1.move(50, 50);
console.log("x: "+circle1.xPos+" y: "+circle1.YPos);