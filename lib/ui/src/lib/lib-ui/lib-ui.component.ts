import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-monorepo-lib-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lib-ui.component.html',
  styleUrl: './lib-ui.component.css',
})
export class LibUiComponent {}
