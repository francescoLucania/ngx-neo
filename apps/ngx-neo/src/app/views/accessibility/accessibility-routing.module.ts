import { Routes } from '@angular/router';
import { AccessibilityComponent } from './views/accessibility/accessibility.component';
import { UiComponent } from './views/ui/ui.component';
import { LoginA11yComponent } from './views/login-a11y/login-a11y.component';

export const ROUTES: Routes = [
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
