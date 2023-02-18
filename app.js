// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = '';


var nouns1 = '', nouns2 = '', verb = '', adjective = '', place = '';

/* Functions
-------------------------------------------------- */
function speakNow() {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(textToSpeak);
	// Actually speak the text
	synth.speak(utterThis);
}

function button1() {
	var nouns = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
	nouns1 = nouns[Math.floor(Math.random() * nouns.length)];
	combine();
}

function button2() {
	var verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
	verb = verbs[Math.floor(Math.random() * verbs.length)];
	combine();
}

function button3() {
	var adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
	adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
	combine();
}

function button4() {
	var nouns = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
	nouns2 = nouns[Math.floor(Math.random() * nouns.length)];
	combine();
}

function button5() {
	var places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];
	place = places[Math.floor(Math.random() * places.length)] + '.';
	combine();
}

function combine() {
	textToSpeak = nouns1 + ' ' + verb + ' ' + adjective + ' ' + nouns2 + ' ' + place;	
	document.getElementById('theDisplay').innerHTML = textToSpeak;
}

function randomStory() {
	button1();
	button2();
	button3();
	button4();
	button5();
}

function resetStory() {
	textToSpeak = '';
	document.getElementById('theDisplay').innerHTML = textToSpeak;
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}
