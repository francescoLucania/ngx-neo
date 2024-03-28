import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { INavigateList } from 'ngx-neo-ui/lib/components/navigate-list/models/navigate';
import { AlertService } from './services/alert.service';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  FooterStandaloneComponent,
  HeaderStandaloneComponent,
  ModalStandaloneComponent
} from 'ngx-neo-ui';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'neo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ModalStandaloneComponent,
    HeaderStandaloneComponent,
    FooterStandaloneComponent
  ]
})
export class AppComponent {
  public message = toSignal(this.alertService.message$, { initialValue: null });
  public navigate: INavigateList[] = [
    { name: 'Home', uri: '' },
    { name: 'Styles', uri: 'styles/global' },
    { name: 'Components', uri: 'components' },
    { name: 'A11y', uri: 'accessibility' },
    { name: 'Contacts', uri: 'Contacts' },
  ];

  constructor(private alertService: AlertService) {}
}
