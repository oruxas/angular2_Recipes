import { Component, OnInit/*, EventEmitter, Output*/ } from '@angular/core';

//import our model
import {Recipe} from '../recipe.model';

import {RecipeService} from '../recipe.service';
import { Router, ActivatedRoute } from "@angular/router";

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

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();

  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route}); //already on recipe list path thus can use relative path to append new to it. To be able to use relative path we need to inform angular our current route
  }

  //no longer needed with services
  // onRecipeSelected(recipe: Recipe){
  //   //need to know which was selected
  //   this.recipeWasSelected.emit(recipe); //passing recipe data thus EventEmitter had to have type of Recipe
  // }

}
