const readlineSync = require("readline-sync");

// declaration coo as arrays [x,y]
var cooA = [1, 1];
var cooB = [2, 2];

function calcDistance(arr1,arr2) {
	let disX = Math.abs(arr1[0]-arr2[0]);
	let disY = Math.abs(arr1[1]-arr2[1]);
	let dist = Math.sqrt(disX*disX+disY*disY)  //hypothenus
	return dist.toFixed(2)                     //2 decimals round to
}
console.log("distance from "+cooA+" to "+cooB+" = "+calcDistance(cooA,cooB));
