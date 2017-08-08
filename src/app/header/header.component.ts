import {Component, EventEmitter, Output} from '@angular/core';

import { DataStorageService } from "../shared/data-storage.service";
import { Response } from "@angular/http";

import {AuthService} from "../auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
   // @Output() featureSelected = new EventEmitter<string>(); //to enable to be listened from outside of this component(from parent) we use @Output
   
    // onSelect(feature: string){
    //     this.featureSelected.emit(feature); //to emit event whenever one of buttons clicked
    // }

    constructor (private dataStorageService: DataStorageService,
                private authService: AuthService){

    }
    onSaveData(){
        this.dataStorageService.storeRecipes()
            .subscribe(
                (response: Response)=>{
                    console.log(response);
                }
            );
    }

    onFetchData(){
        this.dataStorageService.getRecipes();
    }

    onLogout(){
        this.authService.logout();
    }
}