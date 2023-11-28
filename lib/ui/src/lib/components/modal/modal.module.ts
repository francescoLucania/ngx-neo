import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { OpenModalTemplateRefDirective } from './services/directives/open-modal-template-ref.directive';
import { BaseModalComponent } from './components/base-modal/base-modal.component';
import { TrapFocusModule } from '../../directives/trap-focus';

@NgModule({
  declarations: [ModalComponent, OpenModalTemplateRefDirective, BaseModalComponent],
  imports: [CommonModule, TrapFocusModule],
  exports: [ModalComponent, BaseModalComponent, OpenModalTemplateRefDirective, ],
})
export class ModalModule {}
