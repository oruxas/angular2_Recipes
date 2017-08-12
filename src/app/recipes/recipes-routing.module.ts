import { AuthGuard } from './../auth/auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const recipesRoutes: Routes = [
    //changed: path: "recipes" to path: '' because whole moddule is loaded when visited /recipe from main module
     { path: '', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
        { path: ':id', component: RecipeDetailComponent },
        //preeviously "new" was there causing error, cuz angular tried to resolve it as dynamic param.
        { path: ":id/edit", component: RecipeEditComponent }
    ] }
]

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes) //in this place call foChild
    ],
    exports: [
        RouterModule //it now has our routes registered;
    ],
    providers: [
        AuthGuard
    ]
})
export class RecipesRoutingModule {

}