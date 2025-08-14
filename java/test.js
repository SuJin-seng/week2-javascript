// 
let person = {
    // properties
    hair : "black",
    eyes : "black",
    skin : "fair",

    //Methods (Action)
    eat: function() {
        console.log("The person is stuying.");
    },
    study: function() {
        console.log("The person is studying.");
    }
};

// Accessing a property
console.log(person.hair); //output: "black"

// calling a method
person.eat(); //output: "The person is eating."
