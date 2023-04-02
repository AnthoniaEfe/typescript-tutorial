import {HasFormatter} from "../interfaces/hasFormatter"

export class Payment implements HasFormatter{
  readonly recipient: string;
  private details: string;
  public amount: number;
//  protected age: number;
 
   constructor(c: string, d: string, a: number){
     this.recipient = c;
     this.details = d;
     this.amount = a;
    //  this.age = ag;
   }
 
   format(){
    //  return `${this.recipient} is ${this.age}y/o and is owed $${this.amount} for ${this.details}`
     return `${this.recipient} is owed $${this.amount} for ${this.details}`
   }
 }

