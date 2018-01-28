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

var player1turn = true;
var newTurn = true;
var currentCardID = "-1";

function onload() {
	//TODO fill in div middle with all images (i.e. setup board)
	window.alert("Let's play concentration.\nClick on cards to find matches. Player who finds the most wins");
}

function createImg(src, id) {
	//TODO returns string for html input
}

function cardClick() {
	//TODO if new turn == true, flip card, store id, set newTurn = false, 
	//else if same card, alert and try again,
	//     else flip card and wait, check if is the same card as currentCardID via value. if true add card to player's hand, set onclick to nothing, increment matches
	//			if not match, flip both cards over and change p1turn and newturn values
}