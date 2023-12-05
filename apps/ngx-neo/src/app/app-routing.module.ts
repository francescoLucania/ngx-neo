import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/views/home/home.component';
import { CounterComponent } from './views/counter/views/counter/counter.component';

const routes: Routes = [
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
    loadComponent: () => import('./views/styles/views/styles/styles.component').then(mod => mod.StylesComponent),
    loadChildren: () => import('./views/styles/styles-routing.module').then(mod => mod.ROUTES)
  },
  {
    path: 'components',
    loadChildren: () => import('./views/components/components.module').then(mod => mod.ComponentsModule),
  },
  {
    path: 'accessibility',
    loadChildren: () => import('./views/accessibility/accessibility.module').then(mod => mod.AccessibilityModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
