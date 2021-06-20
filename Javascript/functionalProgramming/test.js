let array1 = [4, "string",  5.6, -9.8, 3.14, 42, 6, 8.34, -2]


function integerTest(arr) {
	return arr.filter( number => Number.isInteger(number) ); 
}

console.log(integerTest(array1));
