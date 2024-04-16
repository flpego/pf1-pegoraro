import {  Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFont20]'
})
export class Font20Directive {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.fontSize = "16px";
    this.elementRef.nativeElement.style.borderRadius = "16px";
    this.elementRef.nativeElement.style.border = "1px solid #333";
    this.elementRef.nativeElement.style.padding = "8px";
   }

}
