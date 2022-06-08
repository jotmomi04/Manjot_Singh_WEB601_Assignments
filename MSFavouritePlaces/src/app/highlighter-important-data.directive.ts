import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighterImportantData]'
})
export class HighlighterImportantDataDirective {
  @Input() colour?: string;
  @Input() title?: string;
  private isHighlighted: boolean = false;
  private initialColour: string;
  private borderStyle:string;
  private titleChanged: boolean=false;
  
 

  @HostBinding('style.border')
  get setBorder() {
    return this.isHighlighted ? this.colour || "black 5px solid" :
    this.borderStyle;
  }
  @HostBinding('style.backgroundColor')
  get backgroundColour() {
    return this.titleChanged ? this.colour || "blue" :
      this.initialColour;
  }
  @HostBinding('attr.title')
  get setTitleText() {
    // I can set the title attribute on elements based on a condition too
    return "";
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
  @HostListener('click') onClick(){
    this.titleChanged=!this.titleChanged

  }

}