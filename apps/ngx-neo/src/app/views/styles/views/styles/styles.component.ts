import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { INavigateList, NavigateListComponent } from 'ngx-neo-ui';

@Component({
  selector: 'neo-styles',
  imports: [RouterModule, NavigateListComponent],
  templateUrl: './styles.component.html',
  styleUrl: './styles.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class StylesComponent {
  public formsMenu: INavigateList[] = [
    { name: 'Global Styles', uri: 'global' },
    { name: 'Media Query', uri: 'media-query' },
    { name: 'Typography', uri: 'typography' },
  ];
}
