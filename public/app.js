//imports
import { Invoice } from './classes/invoice.js';
const form = document.querySelector(".new-item-form");
//classes
const invOne = new Invoice("Tonia", "web design work", 349, 25);
const invTwo = new Invoice("Yosola", "iftar cooking", 200, 27);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
//shorthand when using access modifiers
class Money {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
}
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
