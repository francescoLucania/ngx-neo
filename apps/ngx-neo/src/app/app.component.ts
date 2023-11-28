import { ChangeDetectionStrategy, Component } from '@angular/core';
import { INavigateList } from 'ngx-neo-ui/lib/components/navigate-list/models/navigate';
import { AlertService } from './services/alert.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'base-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public message$ = this.alertService.message$
  public navigate: INavigateList[] = [
    { name: 'Home', uri: '' },
    { name: 'Styles', uri: 'styles' },
    { name: 'Components', uri: 'components' },
    { name: 'Accessibility', uri: 'accessibility' },
    { name: 'Contacts', uri: 'Contacts' },
  ];

  constructor(private alertService: AlertService,) {
  }
}
