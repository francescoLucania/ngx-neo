import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[neoElementFocus]',
})
export class ElementFocusDirective implements OnInit {
  @Input('neoElementFocusVisible') private visible: boolean;

  @HostBinding('class.outline-none') private cssClassNotVisible =
    this.getNotVisible;
  @HostBinding('class.focus-visible') private cssClassVisible = this.getVisible;
  @HostBinding('tabindex') private tabIndex =
    this.element.nativeElement.tabIndex !== -1
      ? `${this.element.nativeElement.tabIndex}`
      : '-1';

  @Input('neoElementFocus') public set onFocus(value: string | undefined) {
    this.cssClassNotVisible = this.visible ? !this.visible : true;
    this.cssClassVisible = this.visible;
    this.element.nativeElement.focus();
  }

  private get getNotVisible(): boolean {
    return this.visible ? !this.visible : true;
  }

  private get getVisible(): boolean {
    return this.visible;
  }

  constructor(private element: ElementRef) {}

  public ngOnInit(): void {
    setTimeout(() => {
      this.onFocus = undefined;
    });
  }
}
