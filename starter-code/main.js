console.log("JS file is connected to HTML! Woo!")
var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

/*if (cardTwo && cardFour === false) {
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
}*/

var memBoard = document.getElementById('game-board');

var cardFlip = function(){
		if (this.getAttribute('data-card') === 'king'){
		this.innerHTML = '<img src="king_of_spades.png"/>';
	}
	else {
		this.innerHTML = '<img src="queen_of_spades.jpg"/>';
	}

};

var isItMatch = function(array){
		if(array[0] === array[1]) {
		alert("You found a match!");
	}
};

var pickTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length >= 2){
		isItMatch(cardsInPlay);
			cardsInPlay = [];
	};
};

var createCards = function(cardNum){
	var cardElement = document.createElement('div');
	cardElement.setAttribute('class','card');
	cardElement.setAttribute('data-card', cards[cardNum]);
	memBoard.appendChild(cardElement);
	cardElement.addEventListener('click', pickTwoCards);
	cardElement.addEventListener('click', cardFlip);
};

var createBoard = function(){
for (var count=0; count< 4; count++){
	createCards(count);
	};
};

createBoard();