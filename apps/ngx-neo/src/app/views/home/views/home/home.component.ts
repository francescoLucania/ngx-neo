import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalModule, ModalService } from 'ngx-neo-ui';
import { ButtonStandaloneComponent } from '@lib/ngx-neo-ui';
import { CodeComponent } from '../../../../components/code/code.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'neo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ButtonStandaloneComponent,
    ModalModule,
    CodeComponent,
    RouterLink
  ],
  standalone: true
})
export class HomeComponent {
  constructor(public readonly modalService: ModalService) {}
}
