import { ChangeDetectionStrategy, Component } from '@angular/core';
import { INavigateList } from 'ngx-neo-ui/lib/components/navigate-list/models/navigate';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'base-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent {
  public formsMenu: INavigateList[] = [
    { name: 'Button', uri: 'button' },
    { name: 'Input', uri: 'input' },
    { name: 'Radio', uri: 'radio' },
    { name: 'Checkbox', uri: 'checkbox' },
  ];
}
