function findLongestWordLength(str) {
	let stringArray=str.split(" ");
	let wordLength = 0;
	for (let i=0;i<stringArray.length;i++) {
		if (stringArray[i].length>wordLength){
			wordLength=stringArray[i].length;
		}
	}
	return wordLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
