import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

//up one folder == app folder
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[]; /*= [ 
    new Ingredient('Veggies', 5),
    new Ingredient('Bread', 3)
  ];*/

  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[])=>{
          this.ingredients = ingredients;
        }
      )
  }
  //Here we subscribe to our own subject thus angular won't unsubscribe for us. 

  // onIngredientAdded(ingredient: Ingredient){
  //   this.ingredients.push(ingredient);
  // }

  onEditItem(id: number){
    this.shoppingListService.startedEditting.next(id); //emitting new value, passing it to subject in service so that we could listen in some other place; (shopping edit)
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
