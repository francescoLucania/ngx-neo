import { Route } from '@angular/router';
import { HomeComponent } from './views/home/views/home/home.component';
import { CounterComponent } from './views/counter/views/counter/counter.component';
import { Test1Service } from './services/test/test1.service';
import { Test2Service } from './services/test/test2.service';
import { Test3Service } from './services/test/test3.service';

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
      (await import('./views/components/components-routing.module')).ROUTES,
    providers: [
      {
        provide: Test1Service, useClass: Test3Service
      }
    ]
  },
  {
    path: 'accessibility',
    loadChildren: async () =>
      (await import('./views/accessibility/accessibility-routing.module'))
        .ROUTES,
  },
];
