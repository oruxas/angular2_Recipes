import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
   // @Output() featureSelected = new EventEmitter<string>(); //to enable to be listened from outside of this component(from parent) we use @Output
   
    // onSelect(feature: string){
    //     this.featureSelected.emit(feature); //to emit event whenever one of buttons clicked
    // }
}