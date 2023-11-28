import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { NavigateListModule } from '../navigate-list/navigate-list.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, NavigateListModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
