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
console.log("test watching");
//function signatures
let greet;
greet = (number = 35, word = "hello there") => {
    console.log(number, word);
};
//function signatures with type aliases
let obj;
obj = (person) => {
    console.log(`${person.name}, is ${person.age} years old and is a ${person.gender} `);
};
