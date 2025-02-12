// For loop
console.log("For Loop:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
console.log("While Loop:");
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// Do-while loop
console.log("Do-While Loop:");
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

// Object
const person = { 
    name: "Abhishek Tyagi", 
    age: 21, 
    city: "Meerut" 
};

// For-in loop (used for iterating over object properties)
console.log("For-In Loop:");
for (let key in person) {
    console.log(key + ": " + person[key]);
}

//Array
const fruits = ["Apple", "Banana", "Cherry"];

// For-of loop (used for iterating over iterable objects like arrays)
console.log("For-Of Loop:");
for (let fruit of fruits) {
    console.log(fruit);
}