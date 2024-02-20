import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INavigateList } from 'ngx-neo-ui/lib/components/navigate-list/models/navigate';
import { NavigateListModule } from 'ngx-neo-ui';
import { RouterModule } from '@angular/router';
import { CodeModule } from '../../../../components/code/code.module';
import { GlobalComponent } from '../global/global.component';

@Component({
  selector: 'neo-styles',
  standalone: true,
  imports: [
    CommonModule,
    NavigateListModule,
    RouterModule,
    CodeModule,
    GlobalComponent,
  ],
  templateUrl: './styles.component.html',
  styleUrl: './styles.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StylesComponent {
  public formsMenu: INavigateList[] = [
    { name: 'Global Styles', uri: 'global' },
    { name: 'Media Query', uri: 'media-query' },
    { name: 'Typography', uri: 'typography' },
  ];
}
