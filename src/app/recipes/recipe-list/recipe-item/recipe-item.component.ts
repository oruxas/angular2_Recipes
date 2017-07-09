import { Component, OnInit, Input/*, EventEmitter, Output*/ } from '@angular/core';

import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;  //input to get from outside. allows to bind this component property from outside
  //@Output() recipeSelected = new EventEmitter<void>(); //to listen for this event from outside


  //property injection
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected(){
    //this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
