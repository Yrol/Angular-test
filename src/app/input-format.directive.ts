import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/**
 * Custom directive for handling US phone numbers
 * HostListener - decorator for listening DOM events
 * ElementRef - current element
 */
@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {
  /**
   * Using the same name ('appInputFormat') as the selector above in order to pass value as an attribute when calling: <input type="text" [appInputFormat]="'lowercase'" />.
   */
  @Input('appInputFormat') format!: string;

  constructor(private el: ElementRef) {}

  @HostListener('focus') onFocus() {
    console.log('on focus');
  }

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;

    if (this.format == 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
      return;
    }

    this.el.nativeElement.value = value.toUpperCase();
  }
}
