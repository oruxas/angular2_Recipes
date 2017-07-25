import { Component, OnInit } from '@angular/core';

import {Recipe} from "./recipe.model";

import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  //providers: [RecipeService] //all the components in this area share the same instance thus after navigation to shopping-list it is destroyed
})
export class RecipesComponent implements OnInit {

  //selectedRecipe: Recipe;

  //here we want to listen if we have recipe selected  
  //since using provider it uses same instance of service
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    //not using anymore
    // this.recipeService.recipeSelected
    //   .subscribe(
    //     //recipe passed from event
    //     (recipe: Recipe) =>{
    //       this.selectedRecipe = recipe;
    //     }
    // );
  }

}
