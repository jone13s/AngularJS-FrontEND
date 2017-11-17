import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPinkText]'
})
export class PinkTextDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'white';
    el.nativeElement.style.backgroundColor = 'Orange';
   }

}
