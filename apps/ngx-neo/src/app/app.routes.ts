import { Route } from '@angular/router';
import { HomeComponent } from './views/home/views/home/home.component';
import { CounterComponent } from './views/counter/views/counter/counter.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'styles',
    loadComponent: async () =>
      (await import('./views/styles/views/styles/styles.component'))
        .StylesComponent,
    loadChildren: async () =>
      (await import('./views/styles/styles-routing.module')).ROUTES,
  },
  {
    path: 'components',
    loadChildren: async () =>
      (await import('./views/components/components-routing.module')).ROUTES
  },
  {
    path: 'accessibility',
    loadChildren: async () =>
      (await import('./views/accessibility/accessibility-routing.module')).ROUTES
  },
];
