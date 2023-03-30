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

console.log("test watching");
