import { Component, Input } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'neo-f-article-item',
  templateUrl: './f-article-item.component.html',
  styleUrls: ['./f-article-item.component.scss'],
  standalone: true,
  imports: [NgIf, NgForOf],
})
export class FArticleItemComponent {
  @Input() public title: string;
  @Input() public uri: string;
  @Input() public image: string;
  @Input() public topics: { value: string; uri: string }[];
}
