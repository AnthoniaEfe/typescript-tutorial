//imports
import {Invoice } from './classes/invoice.js';
import {Payment } from './classes/payment.js';
import {HasFormatter} from "./interfaces/hasFormatter.js"

const form = document.querySelector(".new-item-form")! as HTMLFormElement;
const type = document.querySelector("#type")! as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom")! as HTMLInputElement;
const details = document.querySelector("#details")! as HTMLInputElement;
const amount = document.querySelector("#amount")! as HTMLInputElement;

// //classes
// const invOne = new Invoice("Tonia", "web design work", 349, 25);
// const invTwo = new Invoice("Yosola", "iftar cooking", 200, 27);

// let invoices: Invoice[] =[];
// invoices.push(invOne)
// invoices.push(invTwo)
// invoices.forEach(inv=>{
 
//   console.log(inv.client, inv.amount, inv.format());
// })

// //shorthand when using access modifiers
// class Money{
//   constructor(
//     readonly client:string,  
//     private details: string,
//     public amount: number,
//   ){}
// }

form.addEventListener('submit', (e)=>{
  e.preventDefault()
 
  let doc: HasFormatter;
  if(type.value == "invoice"){
    doc = new Invoice( tofrom.value, details.value, amount.valueAsNumber)
  }else{
    doc = new Payment( tofrom.value, details.value, amount.valueAsNumber)
  }

  console.log(doc);
})

// //interfaces
// interface IsPerson {
//   name:string;
//   age: number;
//   speak(a:string):void;
//   spend(a:number):number;
// }

// const friend: IsPerson={name:"tonia",
//   age: 12,
//   speak(lang:string):void{
//     console.log(`speaks ${lang}`);  
//   },
//   spend(amount:number):number{
// return amount
//   }}

// const greetPerson = (person: IsPerson)=>{
//   console.log(`hello, ${person.name}`);
// }

// greetPerson(friend)


// let docOne:HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("tonia", "web design", 300, 20);
// docTwo = new Payments("sara", "graphic design", 270, 40);

// let docs: HasFormatter[] = [];
// docs.push(docOne)
// docs.push(docTwo)

// console.log(docs)