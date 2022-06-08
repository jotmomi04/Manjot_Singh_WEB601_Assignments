import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighterImportantData]'
})
export class HighlighterImportantDataDirective {
  @Input() colour?: string;
  private isHighlighted: boolean = false;
  private initialColour: string;
  private borderStyle:string;
 

  @HostBinding('style.border')
  get setBorder() {
    return this.isHighlighted ? this.colour || "5px solid" :
    this.borderStyle;
  }

  constructor(private elm: ElementRef) {
    this.initialColour = this.elm.nativeElement.style.backgroundColor;
    this.borderStyle = this.elm.nativeElement.style.border;
    // console.log("Value of initialColor is ", this.initialColour)
  }

  @HostListener('mouseover') onHover() {
    this.isHighlighted = !this.isHighlighted;
  }
  @HostListener('mouseout') onMouseOut() {
    this.isHighlighted = !this.isHighlighted;
  }

}