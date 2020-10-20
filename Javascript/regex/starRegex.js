//Using the regex starRegex, find and extract both "twinkles".
// .match() takes arguments inverted when compared to .text()
// /g for star regex /i for ignore case

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result2 = twinkleStar.match(starRegex);
console.log(result2);