"use strict";
const character = "tonia";
console.log(character);
const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
    console.log(input);
});
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(20));
let mixed;
mixed = ["air", 9, "balloon", 12, 1, 6, "pea"];
mixed.push("girl");
let objectColc;
objectColc = {
    name: "belt",
    age: 4,
    color: "green"
};
let objectOne;
//function signatures
let greet;
greet = (num, word) => {
    console.log(num, word);
};
greet(24, "hello");
//function signatures with type aliases
let obj;
obj = (person) => {
    console.log(`${person.name}, is ${person.age} years old and is a ${person.gender} `);
};
obj({ name: "tonia", age: 23, gender: true });
