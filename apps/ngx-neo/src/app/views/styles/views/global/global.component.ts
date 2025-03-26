import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeComponent } from '../../../../components/code/code.component';

@Component({
  selector: 'neo-global',
  standalone: true,
  imports: [CommonModule, CodeComponent],
  templateUrl: './global.component.html',
  styleUrl: './global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalComponent {}
