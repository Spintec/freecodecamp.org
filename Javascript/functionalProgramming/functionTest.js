/*
We have defined a function named squareList. You need to complete the code for the squareList function using any combination of map(), filter(), and reduce() so that it returns a new array containing only the square of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array containing only real numbers is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach() function.
*/

function isIntegerAndPositive(number) {
	if ( Number.isInteger(number) && number > 0) {
		return number;
	}
}

arr = [6, 2, 5, 3];
function rotateSqrt(arr) {
	for (let i=0;i < arr.length;i++) {
		console.log(Math.sqrt(arr[i]));
	}
}
console.log(rotateSqrt(arr));


