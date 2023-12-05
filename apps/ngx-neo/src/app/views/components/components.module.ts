import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './views/components/components.component';
import { ButtonComponent } from './views/button/button.component';
import { InputComponent } from './views/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './views/checkbox/checkbox.component';
import { RadioComponent } from './views/radio/radio.component';
import {ButtonModule, CheckboxModule, InputModule, NavigateListModule, RadioModule} from "ngx-neo-ui";
import { CodeModule } from '../../components/code/code.module';

@NgModule({
  declarations: [
    ComponentsComponent,
    ButtonComponent,
    InputComponent,
    RadioComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsRoutingModule,
    CodeModule,
    NavigateListModule,
    ButtonModule,
    InputModule,
    RadioModule,
    CheckboxModule,
    RadioModule,
    RadioModule,
    InputModule,
    InputModule,
  ]
})
export class ComponentsModule {}
