import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'neo-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  standalone: true
})
export class CodeComponent {}
