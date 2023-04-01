export class Invoice {
    constructor(c, d, a, ag) {
        this.client = c;
        this.details = d;
        this.amount = a;
        this.age = ag;
    }
    format() {
        return `${this.client} is ${this.age}y/o and owes $${this.amount} for ${this.details}`;
    }
}
