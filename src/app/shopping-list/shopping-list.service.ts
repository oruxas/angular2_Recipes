
import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>(); //passing type of array of ingredients

    private ingredients: Ingredient[] = [ 
    new Ingredient('Veggies', 5),
    new Ingredient('Bread', 3)
  ];

  getIngredients(){
      return this.ingredients.slice(); //returning copy of ingredients, so that can't access original
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    //with method bellow, a lot of events are being emmitted
    // for (let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }

    //ES6 spread operator - allows to turn array of elements into list of elements: using with ...variable
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}