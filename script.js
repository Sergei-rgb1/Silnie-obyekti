// var Dog = {
//     name: "Spot",
//     breed: "Chihuahua",
//     weight: 10
// }


function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";

Dog.prototype.bark = function() {
    if (this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
};

Dog.prototype.run = function() {
    console.log("RUN!");
};

Dog.prototype.wag = function() {
    console.log("Wag");
};

Dog.prototype.species = function() {
    console.log("poehali")
};

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
spot.bark = function() {
    console.log(this.name + " says WOOF!");
};

fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();


var barnaby = new Dog ("Basset Hound", 55);

Dog.prototype.sitting = false;

Dog.prototype.sit = function() {
  if (this.sitting) {
    console.log(this.name + " is already sitting");
  } else {
    this.sitting = true;
    console.log(this.name + " is now sitting");
    }
};

barnaby.sit();
barnaby.sit();
spot.sit();
spot.sit();

spot.hasOwnProperty("sitting");
spot.sitting = true;
spot.hasOwnProperty("sitting");
fido.hasOwnProperty("sitting");

