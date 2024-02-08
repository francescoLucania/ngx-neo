import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementFocusDirective } from './element-focus.directive';

@NgModule({
  declarations: [ElementFocusDirective],
  exports: [ElementFocusDirective],
  imports: [CommonModule],
})
export class ElementFocusModule {}
