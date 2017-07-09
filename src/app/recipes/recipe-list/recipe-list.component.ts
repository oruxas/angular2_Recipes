import { Component, OnInit/*, EventEmitter, Output*/ } from '@angular/core';

//import our model
import {Recipe} from '../recipe.model';

import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[]; /*= [
    new Recipe('Test recipe', 'this is test', 'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'), //calling constructor
    new Recipe('Another Test recipe', 'this is second test', 'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg')
  ];*/

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();

  }

  //no longer needed with services
  // onRecipeSelected(recipe: Recipe){
  //   //need to know which was selected
  //   this.recipeWasSelected.emit(recipe); //passing recipe data thus EventEmitter had to have type of Recipe
  // }

}
