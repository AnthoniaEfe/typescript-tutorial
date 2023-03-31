const character = "tonia"
console.log(character);

const inputs = document.querySelectorAll('input')
inputs.forEach((input)=>{
  console.log(input);
})

const circ = (diameter: number) =>{
 return diameter * Math.PI;
}
console.log(circ(20));

 let mixed:(string | number)[]
 mixed = ["air", 9, "balloon", 12, 1, 6, "pea"]
mixed.push("girl")

let objectColc: {name: string; age?:number; color: string|number;}

 objectColc = {
  name: "belt",
  age: 4,
  color: "green"
}

let objectOne: object;

//function signatures
let greet :(a: number, b: string) => void;

greet= (num: number, word: string)=>{
console.log(num, word)
}

greet(24, "hello")

//function signatures with type aliases
let obj: (person:human)=>void|object;
type human= {name: string, age:number, gender: boolean}
obj =(person:human)=>{
  console.log(`${person.name}, is ${person.age} years old and is a ${person.gender} `)
}

obj({name: "tonia", age:23, gender: true})