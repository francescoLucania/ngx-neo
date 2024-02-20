import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AccessibilityComponent } from './views/accessibility/accessibility.component';
import { UiComponent } from './views/ui/ui.component';
import { LoginA11yComponent } from './views/login-a11y/login-a11y.component';

const routes: Routes = [
  {
    path: '',
    component: AccessibilityComponent,
    children: [
      {
        path: 'ui',
        component: UiComponent,
      },
      {
        path: 'login-a11y',
        component: LoginA11yComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessibilityRoutingModule {}
