let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null


// Only change code below this line
let chewieRegex = /A+/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
