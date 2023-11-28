import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ComponentsComponent } from './views/components/components.component';
import { ButtonComponent } from './views/button/button.component';
import { InputComponent } from './views/input/input.component';
import { RadioComponent } from './views/radio/radio.component';
import { CheckboxComponent } from './views/checkbox/checkbox.component';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
