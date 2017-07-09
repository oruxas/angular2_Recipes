import {EventEmitter, Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

//want to inject service to service thus we requie injectable where we want to inject our service 
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

   private  recipes: Recipe[] = [
    new Recipe(
      'Test recipe', 
      'this is test', 
      'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg', //calling constructor
      [
        new Ingredient ('Salad', 3),
        new Ingredient ('Bread', 4),
        ]),
    new Recipe(
      'Another Test recipe', 
      'this is second test', 
      'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',
      [
        new Ingredient ('cucumber', 3),
        new Ingredient ('pineaple', 4),
        ])
  ];

  constructor(private shoppingListService: ShoppingListService){

  }

  getRecipes(){
      return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}