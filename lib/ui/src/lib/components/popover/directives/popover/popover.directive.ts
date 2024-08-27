import { Directive, ElementRef, HostListener, Input, NgModuleRef, TemplateRef } from '@angular/core';
import { PopoverData, PopoverService } from '../../services';
import { PopoverBaseComponentComponent } from '../../components';
import { EMPTY_FUNCTION } from 'ngx-neo-ui';

@Directive({
  selector: '[openNeoPopoverFromTemplate]',
  standalone: true
})
export class PopoverDirective {

  @Input() public openNeoPopoverFromTemplate: TemplateRef<any>;
  @Input() public openNeoPopoverGutter: string | null;
  @Input() public openNeoPopoverWidth: string | null;
  @Input() public openNeoPopoverPositionType: 'top' | 'bottom' | null;
  @Input() public openNeoPopoverType: string;
  @Input() public openNeoPopoverIsHide: boolean;
  @Input() public openNeoPopoverContext: any;

  @Input() public closeHandler = EMPTY_FUNCTION;

  constructor(
    private popoverService: PopoverService,
    private element: ElementRef,
  ) {}

  @HostListener('click', ['$event']) private onClick(event: Event): void {
    console.log('event', event);
    console.log('this.element?.nativeElement', this.element?.nativeElement);

    const element =  this.element?.nativeElement.tagName === 'BUTTON' ? this.element?.nativeElement :
      this.element?.nativeElement?.querySelector('button') ? this.element?.nativeElement?.querySelector('button') : this.element?.nativeElement?.closest('button')

    element.classList?.add('js-neo-ui-popover-reference-point');
    const popoverData = {
      event: element,
      closeHandler: () => this?.closeHandler?.(),
      gutter: this.openNeoPopoverGutter,
      width: this.openNeoPopoverWidth,
      positionType: this.openNeoPopoverPositionType,
      type: this.openNeoPopoverType,
      isHide: this.openNeoPopoverIsHide,
      component: PopoverBaseComponentComponent,
      context: {
        content: this.openNeoPopoverFromTemplate,
        ...this.openNeoPopoverContext
      }
    } as unknown as PopoverData;

    this.popoverService.open(
      element,
      popoverData
    );
  }

}
