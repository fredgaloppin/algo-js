const readlineSync = require("readline-sync");
function display(arr) {
	for (let index = 0; index < arr.length; index++) {
		let num = index+1
		console.log(`${num} - ${arr[index]}${'\r'}`);	
	}		
}

pizzaFlavors = [];
menu = true
while (menu == true) {
console.log("Hello! Welcome to the Pizza Flavors Manager."+ "\n"+"Be our guest:"
+"\n"+"1 - List all the pizza flavors"+"\n"+"2 - Add a new pizza flavor"+"\n"+
"3 - Remove a pizza flavor"+"\n"+"4 - Exit this program");
let choice = parseInt(readlineSync.question ("Please choose your action: "));
switch (choice) {
	case 1:
		display(pizzaFlavors);
		let back = parseInt(readlineSync.question ("Back to choice menu: type 1 "));
		if (back == 1) {
			menu = true;
		}
		break;
	case 2:
		let neo = readlineSync.question ("Please add your flavor: ");
		pizzaFlavors.push(neo);
		break;
	case 3:
		display(pizzaFlavors);
		let drop = parseInt(readlineSync.question ("Please choose the pizz to remove: "));
		let num = drop-1
		pizzaFlavors.splice(num, 1);
		break;
	case 4:
		console.log("Thanks for your visit.")
		menu = false
		break;
}
}

// Bonus: Save the list of pizza flavors on the file system and reload
//  it each time we launch the application.