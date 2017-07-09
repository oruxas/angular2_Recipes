// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount: number){
//         this.name = name;
//         this.amount = amount;
//     }
// }

//possible to shorthand by providng accessor:
export class Ingredient {
    
    constructor(public name: string, public amount: number){
      
    }
}