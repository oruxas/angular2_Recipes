import {EventEmitter, Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

//want to inject service to service thus we requie injectable where we want to inject our service 
@Injectable()
export class RecipeService {
  //not using anymore
  //recipeSelected = new EventEmitter<Recipe>();
  recipesChanged = new Subject<Recipe[]>();
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

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
      return this.recipes.slice();
  }

  getRecipe(id: number){  //id == index in this case
    return this.recipes.slice()[id]; //slice - not a deep copy
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}