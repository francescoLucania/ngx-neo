import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ButtonStandaloneComponent,
  ModalService,
  OpenModalTemplateRefDirective,
} from 'ngx-neo-ui';
import { CodeComponent } from '../../../../components/code/code.component';
import { RouterLink } from '@angular/router';
import { Test1Service } from '../../../../services/test/test1.service';

@Component({
  selector: 'neo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ButtonStandaloneComponent,
    CodeComponent,
    RouterLink,
    OpenModalTemplateRefDirective,

  ],
  standalone: true,
})
export class HomeComponent {
  constructor(public readonly modalService: ModalService, private test1Service: Test1Service) {
    this.test1Service.getVersion()
  }
}
