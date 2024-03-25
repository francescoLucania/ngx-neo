import { Routes } from '@angular/router';
import { ComponentsComponent } from './views/components/components.component';
import { ButtonComponent } from './views/button/button.component';
import { InputComponent } from './views/input/input.component';
import { RadioComponent } from './views/radio/radio.component';
import { CheckboxComponent } from './views/checkbox/checkbox.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      {
        path: 'button',
        component: ButtonComponent,
      },
      {
        path: 'input',
        component: InputComponent,
      },
      {
        path: 'radio',
        component: RadioComponent,
      },
      {
        path: 'checkbox',
        component: CheckboxComponent,
      },
    ],
  },
];
