import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessibilityComponent } from './views/accessibility/accessibility.component';
import { AccessibilityRoutingModule } from './accessibility-routing.module';
import { UiComponent } from './views/ui/ui.component';
import { FArticleItemComponent } from './components/f-article-item/f-article-item.component';
import { LoginA11yComponent } from './views/login-a11y/login-a11y.component';
import {
  InputModule,
  NavigateListModule,
  ButtonModule,
  ModalModule,
  RadioModule,
  ElementFocusModule,
  CheckboxModule,
} from 'ngx-neo-ui'; // from '@lib/ngx-neo-ui'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AccessibilityComponent,
    UiComponent,
    FArticleItemComponent,
    LoginA11yComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccessibilityRoutingModule,
    NavigateListModule,
    InputModule,
    ButtonModule,
    ElementFocusModule,
    ModalModule,
    RadioModule,
    InputModule,
    CheckboxModule,
    ElementFocusModule,
  ],
})
export class AccessibilityModule {}
