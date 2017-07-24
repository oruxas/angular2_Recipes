import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";

import {RecipeService } from "../recipe.service";
import {Recipe} from '../recipe.model';

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

  onSubmit(){
    
    // const newRecipe = new Recipe(
    //                         this.recipeForm.value['name'], 
    //                         this.recipeForm.value['description'],
    //                         this.recipeForm.value['imagePath'],
    //                         this.recipeForm.value['ingredients']);
    //console.log(this.recipeForm);
    //since recipeForm.value object should match the same pattern we can skip above declaration
    if (this.editMode){
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
  }

  onAddIngredient(){
    //add new control to array of controls
    //it's nown for us it'll be formArray, but not for angular, thus explicitly cast
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
                  Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/) 
               ])
      }) 
      );
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
               'name': new FormControl(ingredient.name,  Validators.required),
               'amount': new FormControl(ingredient.amount, [
                  Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/) //acts like a factory, thus executing
               ]) 
             })
           );
         }
       }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription,  Validators.required),
      'ingredients': recipeIngredients
    });
  }

}
