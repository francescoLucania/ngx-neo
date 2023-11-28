import { Directive, NgModuleRef, ElementRef, HostListener, Input, TemplateRef } from '@angular/core';
import { ModalService } from '../modal.service';
import { BaseModalComponent } from '../../components/base-modal/base-modal.component';

//  Пример использования openModalFromTemplate
//  <button
//    type="button"
//    [openModalFromTemplate]="ipErrorModal"
//    [modalTitle]="'Заголовок'"
//    [closeHandler]="test"
//    class="plain-button-inline"
//  >
//    Модалка из ng-template
//  </button>
//
//  <ng-template #ipErrorModal>
//    <div>эксперимент удался</div>
//  </ng-template>

@Directive({
  selector: '[openModalFromTemplate]',
})
export class OpenModalTemplateRefDirective {
  @Input() public openModalFromTemplate: TemplateRef<any>;
  @Input() public modalTitle: string;
  @Input() public closeHandler: () => {};

  constructor(private modalService: ModalService, private moduleRef: NgModuleRef<any>) {}

  @HostListener('click', ['$event']) private onClick(): void {
    const context = {
      title: this.modalTitle,
      content: this.openModalFromTemplate,
      closeHandler: () => this?.closeHandler?.(),
    };

    this.modalService.open(BaseModalComponent, this.moduleRef, context);
  }
}
