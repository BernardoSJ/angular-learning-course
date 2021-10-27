import { Directive, ElementRef, Renderer2,HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {

  constructor(private elem:ElementRef,private renderer:Renderer2) { 
    //elem.nativeElement.style.textDecoration='underline';
    this.renderer.setStyle(this.elem.nativeElement,'text-decoration','underline');
    this.isHover='';

    this.config={
      colorHover:'red',
      colorNoHover:'green'
    }
  }

  @Input() config:any;

  @HostListener('mouseover') onHover(){
    this.renderer.setStyle(this.elem.nativeElement,'text-decoration','none');
    this.isHover='hoave';
  }

  @HostListener('mouseout') onMouseOut(){
    this.renderer.setStyle(this.elem.nativeElement,'text-decoration','underline');

  }

  @HostBinding('class') isHover:string;

}
