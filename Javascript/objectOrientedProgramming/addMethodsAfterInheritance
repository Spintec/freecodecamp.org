
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

console.log("Before reset: ",duck.constructor);
Bird.prototype.constructor  = Bird;
console.log("After reset: ",duck.constructor);

//Adding a unique behavior to bord object

Bird.prototype.fly = function () {
	console.log("I'm flying!");
};

duck.eat();
duck.fly();
