// NOTE: cards can be matched by seeing the html source in my version. To prevent this, I could
// refactor so that id's do not match and the matching of the id's is taken care of in the js.
// Array of cards
var cards = [
	"https://cdn.pixabay.com/photo/2017/02/01/11/41/abstract-2029849__340.png",
	"https://cdn.pixabay.com/photo/2017/02/01/11/39/abstract-2029845__340.png",
	"https://cdn.pixabay.com/photo/2017/02/01/11/39/abstract-2029843__340.png",
	"https://cdn.pixabay.com/photo/2017/02/01/11/37/abstract-2029835__340.png",
	"https://cdn.pixabay.com/photo/2017/02/01/11/59/american-2029937__340.png",
	"https://cdn.pixabay.com/photo/2017/02/01/11/37/abstract-2029836__340.png",
	"https://cdn.pixabay.com/photo/2017/02/01/11/45/abstract-2029876__340.png",
	"https://cdn.pixabay.com/photo/2017/02/01/11/56/abstract-2029912__340.png",
];

var index = [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7 ];

var cardBack = "images/back.jpg";
var player1turn = true;
var newTurn = true;
var currentCardID = "-1";
var canClick = true;
var p1score = 0;
var p2score = 0;

function onload() {
	//TODO fill in div middle with all images (i.e. setup board)
	shuffle(index);
	var i;
	for (i = 0; i < index.length; i++) {
		document.getElementById(i.toString()).setAttribute("value", cards[index[i]]);
		/* FOR TESTING: uncomment the line below to see cards faceup */
		document.getElementById(i.toString()).src = cards[index[i]];
	}
	window.alert("Let's play concentration.\nClick on cards to find matches. Player who finds the most wins");
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

function cardClick(element) {
	//TODO if new turn == true, flip card, store id, set newTurn = false,
	if(canClick){
		if (newTurn) {
			element.src = element.getAttribute("value");
			currentCardID = element.id;
			newTurn = false;
		} else if (element.id == currentCardID) {
			window.alert("Choose a different card");
		} else {
			element.src = element.getAttribute("value");
			if(element.src == document.getElementById(currentCardID.toString()).getAttribute("value")) {
				//ENTER MATCH STATE
				element.setAttribute("onclick", "");
				document.getElementById(currentCardID.toString()).setAttribute("onclick", "");
				if(player1turn){
					document.getElementById("left").innerHTML += "<img src='" + element.src + "'>";
					p1score++;
				} else {
					document.getElementById("right").innerHTML += "<img src='" + element.src + "'>";
					p2score++;
				}
				currentCardID = "-1";
			} else {
				//ENTER WRONG MATCH STATE
				// wait some time and flip both cards back over
				canClick = false;
				window.setTimeout(
					function(){
						/* FOR TESTING: comment out next 2 lines so card will NOT flip back over*/
						element.src = cardBack;
						document.getElementById(currentCardID.toString()).setAttribute("src", cardBack);
						canClick = true;
						currentCardID = "-1";
					},
					2000
				);
				player1turn = !player1turn;
			}
			newTurn = true;
		}
		//else if same card, alert and try again,
		//     else flip card and wait, check if is the same card as currentCardID via value. if true add card to player's hand, set onclick to nothing, increment matches
		//			if not match, flip both cards over and change p1turn and newturn values
	}

	if (p1score + p2score == 8) { //Game over alert
		if (p1score == p2score) {
			window.alert("GAME OVER!\nIt's a tie!");
		} else {
			var winner = "";
			if (p1score > p2score) {
				winner = "Player 1";
			} else {
				winner = "Player 2";
			}
			window.alert("GAME OVER!\n" + winner + " wins!");
		}
	}
}
