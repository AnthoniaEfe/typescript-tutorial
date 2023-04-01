export class Invoice{
  readonly client: string;
  private details: string;
  public amount: number;
 protected age: number;
 
   constructor(c: string, d: string, a: number, ag: number){
     this.client = c;
     this.details = d;
     this.amount = a;
     this.age = ag;
   }
 
   format(){
     return `${this.client} is ${this.age}y/o and owes $${this.amount} for ${this.details}`
   }
 }

