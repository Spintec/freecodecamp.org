/*
Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
	let sortedArray = arr.concat([]).sort(function(a,b) {
		return a - b;
	});

	//New array which will be populated with the numbers to be added. 
	
	let sumArray = [sortedArray[0]];

	for (let i = sortedArray[0]; i < sortedArray[1]; i++) {
		sumArray.push(i+1);		
	}

	return sumArray.reduce((sum, currentValue) => sum + currentValue);
}

console.log(sumAll([4,1]));
