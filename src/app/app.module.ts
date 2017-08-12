import { CoreModule } from './core/core.module';
//import { HomeComponent } from './core/home/home.component';
import { AuthModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//import {HeaderComponent} from './core/header/header.component';
// import { RecipesComponent } from './recipes/recipes.component';
// import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

import {DropdownDirective} from './shared/dropdown.directive';

// import {ShoppingListService} from './shopping-list/shopping-list.service';
// import {RecipeService } from './recipes/recipe.service';
import {AppRoutingModule} from "./app-routing.module";
// import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";
// import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";

// import { DataStorageService } from "./shared/data-storage.service";

// import {SignupComponent} from "./auth/signup/signup.component";
// import {SigninComponent} from "./auth/signin/signin.component";
// import {AuthService} from "./auth/auth.service";
// import {AuthGuard} from "./auth/auth-guard.service";

//import { RecipesModule } from "./recipes/recipes.module"; 

@NgModule({
  declarations: [
    AppComponent,

    // HeaderComponent,
    // HomeComponent
    //DropdownDirective, //copy this // it is now declared in shared module
    // SignupComponent,
    // SigninComponent
  ],
  imports: [
    BrowserModule, //no common module but browsr module cuz it contains all features of common and extra which are needed only when app starts thus BM should be only used here.
   // FormsModule, //if used ngModel with 2 way binding anywhere else in app than just in shopping list feature it should remain but still have to import in shopingg list mod Because directives exposed by formsModule are only enabled in module where it's been imported
    //ReactiveFormsModule, // only used in recipes feature 
    HttpModule,
    AppRoutingModule,
    //RecipesModule,
    SharedModule, //note: browser module will overwrite common module from shared, thus no problem;
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
