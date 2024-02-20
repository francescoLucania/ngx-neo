import { Component, Input } from '@angular/core';

@Component({
  selector: 'neo-f-article-item',
  templateUrl: './f-article-item.component.html',
  styleUrls: ['./f-article-item.component.scss'],
})
export class FArticleItemComponent {
  @Input() public title: string;
  @Input() public uri: string;
  @Input() public image: string;
  @Input() public topics: { value: string; uri: string }[];
}
