import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[HighLight]'
})
export default class HighLightDirective {
  defaultBackground:string = "#b0f" ; 
  clickedBackground:string = "#fff"
  
@Input() defaultColor:string ="#b0f";
@Input() color:string = "white";
  constructor(private elemRef:ElementRef) {
    this.elemRef.nativeElement.style.border = `4px solid ${this.defaultColor}`;
    this.elemRef.nativeElement.style.padding="3px"

    if(this.elemRef.nativeElement.type == 'button'){
          this.elemRef.nativeElement.style.background = this.defaultBackground;
    }

   }
   @HostListener('click') onMouseOver()
{
  this.elemRef.nativeElement.style.border=`4px solid ${this.color}`;
  this.elemRef.nativeElement.style.background=`${this.color}`;

  if(this.elemRef.nativeElement.type == 'button'){
    this.elemRef.nativeElement.style.background = this.clickedBackground;
    this.elemRef.nativeElement.style.border=`1px solid rgb(147 140 151)`;
    this.elemRef.nativeElement.style.color = 'rgb(147 140 151)'
}

}
}

