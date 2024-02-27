import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeModule } from '../../../../components/code/code.module';
import { StylesComponent } from '../styles/styles.component';

@Component({
  selector: 'neo-global',
  standalone: true,
  imports: [CommonModule, CodeModule, StylesComponent],
  templateUrl: './global.component.html',
  styleUrl: './global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalComponent {}
