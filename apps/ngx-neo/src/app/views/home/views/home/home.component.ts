import { Component } from '@angular/core';
import { ModalService } from 'ngx-neo-ui';

@Component({
  selector: 'neo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(public readonly modalService: ModalService) {
  }

}
