//imports
import {Invoice } from './classes/invoice.js';

const form = document.querySelector(".new-item-form")! as HTMLFormElement;

//classes


const invOne = new Invoice("Tonia", "web design work", 349, 25);
const invTwo = new Invoice("Yosola", "iftar cooking", 200, 27);

let invoices: Invoice[] =[];
invoices.push(invOne)
invoices.push(invTwo)
invoices.forEach(inv=>{
 
  console.log(inv.client, inv.amount, inv.format());
})

//shorthand when using access modifiers
class Money{
  constructor(
    readonly client:string,  
    private details: string,
    public amount: number,
  ){}
}


//inputs
const type = document.querySelector("#type")! as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom")! as HTMLInputElement;
const details = document.querySelector("#details")! as HTMLInputElement;
const amount = document.querySelector("#amount")! as HTMLInputElement;
 
form.addEventListener('submit', (e)=>{
  e.preventDefault()
  console.log(type.value,
  tofrom.value,
  details.value,
  amount.valueAsNumber);
})
