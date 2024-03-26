import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INavigateList } from 'ngx-neo-ui/lib/components/navigate-list/models/navigate';
import { NavigateListModule } from 'ngx-neo-ui';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'neo-styles',
  imports: [
    CommonModule,
    NavigateListModule,
    RouterModule,
  ],
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
