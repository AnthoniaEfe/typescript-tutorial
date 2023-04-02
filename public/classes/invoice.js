export class Invoice {
    //  protected age: number;
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
        //  this.age = ag;
    }
    format() {
        //  return `${this.client} is ${this.age}y/o and owes $${this.amount} for ${this.details}`
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
