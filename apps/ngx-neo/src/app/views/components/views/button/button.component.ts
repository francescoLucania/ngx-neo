import { Component } from '@angular/core';
import { ButtonStandaloneComponent } from 'ngx-neo-ui';
import { CodeComponent } from '../../../../components/code/code.component';

@Component({
  selector: 'neo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [ButtonStandaloneComponent, CodeComponent],
  standalone: true,
})
export class ButtonComponent {}
