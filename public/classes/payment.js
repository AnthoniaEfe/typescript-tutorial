export class Payment {
    //  protected age: number;
    constructor(c, d, a) {
        this.recipient = c;
        this.details = d;
        this.amount = a;
        //  this.age = ag;
    }
    format() {
        //  return `${this.recipient} is ${this.age}y/o and is owed $${this.amount} for ${this.details}`
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
