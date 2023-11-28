import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[neoUiTrapFocus]'
})
export class TrapFocusDirective implements AfterViewInit{
  constructor(private el: ElementRef) {}

  public ngAfterViewInit(): void {
    this.trapFocus(this.el.nativeElement);
  }

  private trapFocus(element: { querySelectorAll: (arg0: string) => any; addEventListener: (arg0: string, arg1: (e: any) => void) => void; }): void {
    const focusableEls1 = element.querySelectorAll(
      'a[href], button, textarea, input[type="text"],' +
      'input[type="radio"], input[type="checkbox"], select'
    );
    const focusableEls = Array.from(focusableEls1)
      .filter( (el: any) => !el.disabled);
    const firstFocusableEl: any = element;
    const lastFocusableEl: any = focusableEls[focusableEls.length - 1];
    console.log('firstFocusableEl', firstFocusableEl);

    element.addEventListener('keydown', function(e) {
      const isTabPressed = e.keyCode === 9; // isTabPressed
      if (!isTabPressed) return;
      if ( e.shiftKey ) /* shift + tab */ {

        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      } else /* tab */ {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    });
  }
}
