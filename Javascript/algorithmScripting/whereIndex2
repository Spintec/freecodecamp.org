
function getIndexToIns(arr, num) {
	arr.sort((a,b) => a - b);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= num) {
			return i;
		}
	}
	return arr.length;
}










console.log(getIndexToIns([40,60],50));
console.log(getIndexToIns([1,2,3,4], 1.5));
console.log(getIndexToIns([20,3,5], 19));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([3, 10, 5], 3));
console.log("Expected 2: ",getIndexToIns([5, 3, 20, 3], 5));
console.log("Expected 4: ",getIndexToIns([2, 5, 8, 10], 15));
console.log("Expected 0: ",getIndexToIns([], 1));

