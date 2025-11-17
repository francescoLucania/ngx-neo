import { Component } from '@angular/core';
import { INavigateList } from 'ngx-neo-ui';
import { RouterOutlet } from '@angular/router';
import { NavigateListComponent } from 'ngx-neo-ui';
import { Test1Service } from '../../../../services/test/test1.service';

@Component({
  selector: 'neo-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.scss'],
  standalone: true,
  imports: [RouterOutlet, NavigateListComponent],
})
export class AccessibilityComponent {
  constructor(private test1Service: Test1Service) {
    this.test1Service.getVersion()
  }
  public formsMenu: INavigateList[] = [
    { name: 'UI demo', uri: 'ui' },
    { name: 'UserInformation a11y demo', uri: 'login-a11y' },
  ];

  public directivesMenu: INavigateList[] = [
    { name: 'ElementFocus', uri: 'element-focus' },
    { name: 'FocusTrap', uri: 'focus-trap' },
  ];
}
