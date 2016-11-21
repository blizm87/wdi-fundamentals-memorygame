console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardTwo && cardFour === false) {
	alert("Sorry, try again.");
}
else if (cardOne && cardTwo === true) {
	alert("You found a match!");
}
else if (cardOne && cardThree === false) {
	alert("Sorry, try again.");
}
else {
	alert("You found a match!");
}