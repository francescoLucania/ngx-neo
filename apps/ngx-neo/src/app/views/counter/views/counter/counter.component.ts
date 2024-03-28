import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import {
  countSelector,
  updatedAtSelector,
  decrease,
  increase,
} from '../../../../reducers/counter';
import { ButtonStandaloneComponent } from 'ngx-neo-ui';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'neo-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  standalone: true,
  imports: [
    ButtonStandaloneComponent,
    AsyncPipe,
    DatePipe,
    NgIf
  ]
})
export class CounterComponent {
  public count$ = this.store.select(countSelector);
  public disableCounter$ = this.count$.pipe(map((value) => value <= 0));
  public updatedAt$ = this.store.select(updatedAtSelector);

  constructor(private store: Store) {}

  public increase() {
    this.store.dispatch(increase());
  }

  public decrease() {
    this.store.dispatch(decrease());
  }
}
