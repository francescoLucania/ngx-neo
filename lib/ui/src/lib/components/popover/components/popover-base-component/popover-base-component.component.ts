import { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'neo-popover-base-component',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './popover-base-component.component.html',
  styleUrl: './popover-base-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopoverBaseComponentComponent implements OnInit{

  public content: TemplateRef<any>;

  public ngOnInit() {
    console.log('this.content', this)
  }

}
