import { Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appColors]'
})
export class ColorsDirective {

  @HostBinding('class.active') color!:boolean;
  @HostBinding('class.unactive') unactive: boolean = false;

  constructor() { 

  }

  @HostListener('click') onclick(event:Event) {
      this.color = true;
      console.log(event);
  }

}
