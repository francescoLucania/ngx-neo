import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigateListComponent } from './navigate-list.component';
import { NavigateListActiveRouteDisableDirective } from './directives/navigate-list-active-route-disable.directive';

@NgModule({
  declarations: [
    NavigateListComponent,
    NavigateListActiveRouteDisableDirective,
  ],
  imports: [CommonModule, RouterModule],
  exports: [NavigateListComponent],
})
export class NavigateListModule {}
