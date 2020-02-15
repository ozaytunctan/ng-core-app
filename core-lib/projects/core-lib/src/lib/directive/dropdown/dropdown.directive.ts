import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';



@Directive({
    selector: '[dropdown]'
})
export class DropdownDirective {


  /**
     * Still,class atribute  eklemek için kullanılır. 
     * dropdown open ,close
     * */
    @HostBinding('class.open') isOpen = false;
    
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef) { }
}
