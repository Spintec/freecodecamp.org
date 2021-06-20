/* Boo who

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

function booWho(bool) {
	if (typeof bool == 'boolean') {
		return true;
	}
	else {
		return false;
	}
}

console.log(booWho(false));
console.log(booWho(true));
console.log(booWho(null));
console.log(booWho([1, 2, 3]));
console.log(booWho([].slice));
console.log(booWho({ "a": 1 }));
console.log(booWho(NaN));
