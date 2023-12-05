import { Component } from '@angular/core';
import { INavigateList } from 'ngx-neo-ui/lib/components/navigate-list/models/navigate';

@Component({
  selector: 'neo-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.scss']
})
export class AccessibilityComponent {
  public formsMenu: INavigateList[] = [
    { name: 'UI', uri: 'ui' },
    { name: 'Login', uri: 'login' },
    { name: 'Login a11y', uri: 'login-a11y' },
  ];

}
