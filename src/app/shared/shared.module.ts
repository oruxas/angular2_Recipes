import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        DropdownDirective
    ],
    exports: [
        CommonModule, //where it's always necessary to declare components and so on it is not neceserry to import modules in order to export them.
        DropdownDirective
    ]
})
export class SharedModule {

}