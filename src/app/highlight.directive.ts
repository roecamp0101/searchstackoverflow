import { Directive, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private render: Renderer2, private elRef: ElementRef) { }

  ngOnInit(){
    this.render.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }

  @HostListener('click') clickevent(){
      this.render.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }


  @HostListener('mouseleave') mouseleave(){
      this.render.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
}
