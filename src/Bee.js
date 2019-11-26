var Bee = function() {
	Grub.call(this); // Takes all the properties from Grub, If the values are updated then they are overridden with the new values in Bee cunstroctor
	this.age = 5;
	this.color = "yellow";
	this.job = "keep on growing";
};

Bee.prototype = Object.create(Grub.prototype); // Extends the methods from Grub to Bee 
Bee.prototype.constructor = Bee; // [instance].__proto__.constructor will point to the Bee constructor, not to the Grub constructor anymore
