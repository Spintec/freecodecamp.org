//Using the shorthand character class \w
//to count the number of alphanumeric characters in various quotes and strings.

let quoteSample="The five boxing wizards jump quickly.";
let alphabetRegex=/\w/gi;
let result=quoteSample.match(alphabetRegex).length;
console.log(result);