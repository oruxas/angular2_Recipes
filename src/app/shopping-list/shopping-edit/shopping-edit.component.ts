import { Component, 
         OnInit, 
         ElementRef, 
         ViewChild,
         OnDestroy 
         /*EventEmitter, 
        Output*/ } from '@angular/core';

import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

import {NgForm} from "@angular/forms";

import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  //no longer needed
  // @ViewChild('nameInput') nameInputRef: ElementRef; //passing name of local var in side ()
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  //@Output() ingredientAdded = new EventEmitter<Ingredient>();

  //access local ref of form
  @ViewChild('f') slForm: NgForm; 
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    //listening to subject from shopping list component
   this.subscription = this.shoppingListService.startedEditting
      .subscribe((id: number)=>{
        this.editMode = true;
        this.editedItemIndex = id;
        //store item to editedItem whenever new info is added;
        this.editedItem = this.shoppingListService.getIngredient(id);

        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount 
        })

      });
  }

  onAddItem(form: NgForm){
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode == true){
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();

    //no longer needed cuz of service
    //this.ingredientAdded.emit(newIngredient);
  }

   onClear() {
     this.slForm.reset();
     this.editMode = false;
   }
   onDelete(){
     this.shoppingListService.deleteIngredient(this.editedItemIndex); //will throw error if item not loaded
     this.onClear();
   }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
