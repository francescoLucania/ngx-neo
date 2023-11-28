import { Component, Input } from '@angular/core';
import { INavigateList } from './models/navigate';

@Component({
  selector: 'neo-ui-navigate-list',
  templateUrl: './navigate-list.component.html',
  styleUrls: ['./navigate-list.component.scss'],
})
export class NavigateListComponent {
  @Input() public navigate: INavigateList[] = [];
  @Input() public type: 'vertical' | 'horizontal' = 'horizontal';
}
