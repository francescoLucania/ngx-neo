import { Component } from '@angular/core';
import { INavigateList } from 'ngx-neo-ui/lib/components/navigate-list/models/navigate';

@Component({
  selector: 'neo-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.scss']
})
export class AccessibilityComponent {
  public formsMenu: INavigateList[] = [
    { name: 'UI demo', uri: 'ui' },
    { name: 'Login a11y demo', uri: 'login-a11y' },
  ];

  public directivesMenu: INavigateList[] = [
    { name: 'ElementFocus', uri: 'element-focus' },
    { name: 'FocusTrap', uri: 'focus-trap' },
  ];

}
