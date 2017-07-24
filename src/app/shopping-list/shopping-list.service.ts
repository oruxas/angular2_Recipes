
import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';
import { Subject } from "rxjs/Subject";

export class ShoppingListService{
    //ingredientsChanged = new EventEmitter<Ingredient[]>(); //passing type of array of ingredients; to inform about changes
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditting = new Subject<number>();

    private ingredients: Ingredient[] = [ 
    new Ingredient('Veggies', 5),
    new Ingredient('Bread', 3)
  ];

  getIngredients(){
      return this.ingredients.slice(); //returning copy of ingredients, so that can't access original
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    //this.ingredientsChanged.emit(this.ingredients.slice());
    //now with obserbvables:
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    //with method bellow, a lot of events are being emmitted
    // for (let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }

    //ES6 spread operator - allows to turn array of elements into list of elements: using with ...variable
    this.ingredients.push(...ingredients);
    //this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());

  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}