import { Component } from '@angular/core';

@Component({
  selector: 'neo-ui-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public date = Date.now();
}
