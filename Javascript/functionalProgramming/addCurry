/*
Introduction to Currying and Partial Application	

Create an add function which uses currying to add parameters x,y,z.
*/

function add(x) {
	return function(y) {
		return function(z) {
			return x + y + z;
		}
	}
}

console.log(add(10)(20)(30));
console.log(add(10)(20));
