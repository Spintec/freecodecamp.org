/*
We have defined a function named squareList. You need to complete the code for the squareList function using any combination of map(), filter(), and reduce() so that it returns a new array containing only the square of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array containing only real numbers is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach() function.
*/

function isIntegerAndPositive(number) {
	return Number.isInteger(number) && number >= 0;
}

const squareList = arr => {
	return (arr.filter(isIntegerAndPositive)).map( value => value * value);  
};

console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]));
console.log(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]));
console.log(squareList([0, 4.5, 1, 0, -1]));
