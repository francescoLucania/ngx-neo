import { Component } from '@angular/core';
import { ButtonStandaloneComponent } from '@lib/ngx-neo-ui';
import { CodeModule } from '../../../../components/code/code.module';

@Component({
  selector: 'neo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [
    ButtonStandaloneComponent,
    CodeModule
  ],
  standalone: true
})
export class ButtonComponent {}
