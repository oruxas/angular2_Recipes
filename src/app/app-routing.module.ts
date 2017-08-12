import { HomeComponent } from './core/home/home.component';
import {NgModule} from "@angular/core";
import {Routes, RouterModule, PreloadAllModules} from "@angular/router";

//import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
// import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";
// import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
// import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
// import { SignupComponent } from "./auth/signup/signup.component";
// import { SigninComponent } from "./auth/signin/signin.component";
//import { AuthGuard } from "./auth/auth-guard.service";

const appRoutes: Routes = [
   //changing bellow route to point to home comonent
   // { path: "", redirectTo: "/recipes", pathMatch: "full"}, //pathMatch - full - only redirect if full path is empty
    { path: '', component: HomeComponent },
    //lazyLoading recipes:
    //add string and not type like in other routes so that webpack would not load it. point to the module we want to load;
    //at the end of path with # specify name of class in file 
   { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}, 
   { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],  //preloadingStrategy's property value is type of preload strategy
    exports: [RouterModule]
})
export class AppRoutingModule {

}

//for selector it is necessary to declare it in
// module where it will be used 
//(or import the module that exports it (dropdownDirective)). 
//For routing it's not necessary. only important to declare somewhere 
//in app before accessing route.