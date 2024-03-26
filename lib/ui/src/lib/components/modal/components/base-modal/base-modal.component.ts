import { Component, TemplateRef } from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'neo-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss'],
  imports: [
    NgTemplateOutlet,
    NgIf
  ],
  standalone: true
})
export class BaseModalStandaloneComponent {
  public title: string;
  public content: TemplateRef<any>;
}
