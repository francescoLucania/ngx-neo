import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'neo-ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf
  ]
})
export class ButtonStandaloneComponent {
  @Input() public label: string;
  @Input() public theme: 'base' | 'secondary' | 'brand' = 'base';
  @Input() public size: 'base' | 'small' | 'large' = 'base';
  @Input() public fullWidth = false;
  @Input() public showLoader = false;

  @Input() public disabled = false;
  @Input() public buttonType: 'submit' | 'reset' | 'button' = 'button';

  @Input() public link = '';
  @Input() public target: '_blank' | '_self' | '_parent' | '_top' = '_self';

  @Input() public title: string;
  @Input() public ariaLabel: string;
  @Input() public tabIndex: string;
}
