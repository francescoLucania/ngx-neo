import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ButtonStandaloneComponent,
  ModalService,
  OpenModalTemplateRefDirective,
} from 'ngx-neo-ui';
import { CodeComponent } from '../../../../components/code/code.component';
import { RouterLink } from '@angular/router';
import { PopoverDirective } from 'lib/ui/src/lib/components/popover/directives/popover/popover.directive';

@Component({
  selector: 'neo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ButtonStandaloneComponent,
    CodeComponent,
    RouterLink,
    OpenModalTemplateRefDirective,
    PopoverDirective,
  ],
  standalone: true,
})
export class HomeComponent {
  constructor(public readonly modalService: ModalService) {}
}
