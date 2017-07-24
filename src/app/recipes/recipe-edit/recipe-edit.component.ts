import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { FormGroup, FormControl, FormArray } from "@angular/forms";

import {RecipeService } from "../recipe.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode:boolean = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) =>{
        this.id = +params['id']; //convert to number with + sign
        //whenever param change check: if has id property
        this.editMode = params['id'] !=null;
        this.initForm();
      }
    )
  }

  onSubmmit(){
    console.log(this.recipeForm);
  }

  //important to know if in edit mode cuz then it'll be clear wether to assign init value or not.
  private initForm(){
    //should be called whenewer route params change == indicates that we reloaded page

    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
       const recipe = this.recipeService.getRecipe(this.id); //to make sure one already exists
       recipeName = recipe.name;
       recipeImagePath = recipe.imagePath;
       recipeDescription = recipe.description;
       if (recipe['ingredients']){
         for (let ingredient of recipe.ingredients){
           recipeIngredients.push(
             new FormGroup({
               'name': new FormControl(ingredient.name),
               'ammount': new FormControl(ingredient.amount)
             })
           );
         }
       }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
      'ingredients': recipeIngredients
    });
  }

}
