import { ChangeDetectionStrategy, Component } from '@angular/core';
import { INavigateList } from 'ngx-neo-ui/lib/components/navigate-list/models/navigate';
import { NavigateListModule } from 'ngx-neo-ui';
import { RouterOutlet } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'neo-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  imports: [
    NavigateListModule,
    RouterOutlet
  ],
  standalone: true
})
export class ComponentsComponent {
  public formsMenu: INavigateList[] = [
    { name: 'Button', uri: 'button' },
    { name: 'Input', uri: 'input' },
    { name: 'Radio', uri: 'radio' },
    { name: 'Checkbox', uri: 'checkbox' },
  ];
}
