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



function ShowDog (name, breed, weight, handler,) {
    Dog.call(this, name, breed, weight);
    // this.name = name;
    // this.breed = breed;
    // this.weight = weight;
    this.handler = handler;
}

ShowDog.prototype = new Dog()

ShowDog.prototype.constructor = ShowDog;

ShowDog.prototype.league = "Webville";

ShowDog.prototype.stack = function() {
    console.log("Stack");
};

ShowDog.prototype.bait = function() {
    console.log("Bait");
};

ShowDog.prototype.gait = function(kind) {
    console.log(kind + "ing");
};

ShowDog.prototype.groom = function() {
    console.log("Groom");
};

var scotty = new ShowDog ("Scotty", "Scottish Terrier", 15, "Cookie");

scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);


String.prototype.chiche = function() {
    var cliche = ["look and load", "touch base", "open the kimono"];

    for (var i = 0; i < cliche.length; i++) {
        var  index = this.indexOf(cliche[i]);
        if (index >= 0) {
            return true;
        }
    }
    return false;
};
var sentences = ["I'll send my car around to pick you up. ",
                "Let's touch base in the morning and see where we are",
                "We don't want to open the kimono, we just want to inform them."];

for (var i = 0; i < sentences.length; i++) {
    var phrase = sentences[i]
    if (phrase.cliche()) {
        console.log("кликни туда:" + phrase);
    }
}