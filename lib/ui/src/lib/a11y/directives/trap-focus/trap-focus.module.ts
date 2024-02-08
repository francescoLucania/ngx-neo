import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrapFocusDirective } from './trap-focus.directive';

@NgModule({
  declarations: [TrapFocusDirective],
  exports: [TrapFocusDirective],
  imports: [CommonModule],
})
export class TrapFocusModule {}
