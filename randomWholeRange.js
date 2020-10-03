//Difference is that this one inclues max in the random number range, 
//whereas the previous randomWholeNumber.js function excludes the max number
function randomWholeRange(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

console.log(randomWholeRange(1,10));
