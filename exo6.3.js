class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle){
       if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width && this.topLeftXPos + this.width > otherRectangle.topLeftXPos && this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length && this.topLeftYPos + this.length > otherRectangle.topLeftYPos)          
          {
            console.log('collision detected')
        } else {
            console.log('collision not detected')
        }
    }
}
let rect1 = new Rectangle(10, 10, 50, 50);
console.log(rect1);
let rect2;
let i = 1;
while (i <= 1000) {
    i += 1;

    rect2 = new Rectangle (
        Math.floor(Math.random() * 100 ) + 1,
        Math.floor(Math.random() * 100 ) + 1,
        Math.floor(Math.random() * 100 ) + 1,
        Math.floor(Math.random() * 100 ) + 1
    )
    console.log(rect2); 
    rect1.collides(rect2);
}