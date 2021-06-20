/* Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. 
funModule should return an object.
 (using IFFE = Immediately invoked function expression)
*/

let motionModule = (function () {
	return {
		glideMixin: function(obj){
			obj.glide = function(){
				console.log("Gliding on the water");
			}
		},
		flyMixin: function(obj){
			obj.fly = function(){
				console.log("Flying, woosh!");
			}
		}
	}
})();

function Plane(name) {
	this.name = name;
}
Plane.prototype.fuel = "petroleum-based"; 

let MIG = new Plane("MIG");
motionModule.flyMixin(MIG);
MIG.fly();
