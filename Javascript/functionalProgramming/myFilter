/*	Implement the filter Method on a Prototype

Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). 
You should not use the built-in filter method.
*/

// The global variable
let s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
	let newArray = [];
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i])==true){
			newArray.push(this[i]);		
		}
	}	
  	return newArray;
};

let new_s = s.myFilter(function(item) {
  	return item % 2 === 1;
});
console.log(new_s);
