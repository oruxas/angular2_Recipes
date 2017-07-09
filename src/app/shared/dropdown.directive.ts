import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen = false; //allows to bind to properties the element is based on; here binding to class element
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }
}