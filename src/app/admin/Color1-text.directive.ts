import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor1Text]'
})
export class Color1TextDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'white';
    el.nativeElement.style.backgroundColor = 'blue';
   }

}
