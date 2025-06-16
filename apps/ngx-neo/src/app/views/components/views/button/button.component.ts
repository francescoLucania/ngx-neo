import { Component } from '@angular/core';
import { ButtonStandaloneComponent } from 'ngx-neo-ui';
import { CodeComponent } from '../../../../components/code/code.component';
import { Test1Service } from '../../../../services/test/test1.service';
import { Test2Service } from '../../../../services/test/test2.service';

@Component({
  selector: 'neo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [ButtonStandaloneComponent, CodeComponent],
  standalone: true,
})
export class ButtonComponent {
  constructor(private test1Service: Test1Service) {
    this.test1Service.getVersion()
  }
}
