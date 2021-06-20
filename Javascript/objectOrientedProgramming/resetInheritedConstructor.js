
function Animal() {}

Animal.prototype ={
	constructor: Animal,
	eat: function() {
		console.log("nom nom nom");
	}
};

function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
console.log(duck.constructor);
Bird.prototype.constructor  = Bird;
console.log(duck.constructor);
