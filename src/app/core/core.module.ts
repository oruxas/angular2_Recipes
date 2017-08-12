import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { RecipeService } from './../recipes/recipe.service';
import { DataStorageService } from './../shared/data-storage.service';
import { AuthService } from './../auth/auth.service';
// import { AuthGuard } from './../auth/auth-guard.service';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule, //expose dropdown directive
        AppRoutingModule    //for links in header
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent, //because using header selecotr  in app ccomponen template
    ],
    providers: [
        //still provides one instance of services across app. Angular'll merge them as long as core module eagerly loaded. 
        ShoppingListService, 
        RecipeService, 
        DataStorageService, 
        AuthService, 
        //AuthGuard //in this case only using in recipes-routing thus not necessary to provide app-wide.
    ]
})
export class CoreModule {

}