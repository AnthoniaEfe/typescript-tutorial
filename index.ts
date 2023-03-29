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
