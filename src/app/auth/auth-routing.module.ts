import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';


const authRoutes: Routes = [
    { path: "signup", component: SignupComponent},
    { path: "signin", component: SigninComponent}
];

@NgModule({
    //only need to import routes module to register routes
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule{

}