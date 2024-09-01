import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeComponent } from '../../../../components/code/code.component';
import { PopoverDirective } from 'lib/ui/src/lib/components/popover';

@Component({
  selector: 'neo-popover',
  standalone: true,
  imports: [
    CodeComponent,
    PopoverDirective
  ],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopoverComponent {

  public basePopoverCode1 = {
    str: `<span><</span>button<br>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;type="button"</span><br>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;class="my-button"</span><br>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;[openNeoPopoverFromTemplate]="testTemplate"</span><br>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;[openNeoPopoverTitle]="'My Base Popover'"</span><br>
          <span>></span><br>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;My button for Popover</span><br>
          <span><</span>/button><br><br>

          <span><</span>ng-template #testTemplate><span>></span><span><</span>/button><br>
          &nbsp;&nbsp;&nbsp;&nbsp;My test popover<br>
          <span><</span>/ng-template>
      `,
  };

}
