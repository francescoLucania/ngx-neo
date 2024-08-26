import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'neo-popover-base-component',
  standalone: true,
  imports: [],
  templateUrl: './popover-base-component.component.html',
  styleUrl: './popover-base-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopoverBaseComponentComponent {

}
