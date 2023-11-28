import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  public set setAlert(message: string) {
    this._message$.next(message);
    setTimeout(() => {
      this._message$.next(null);
    }, 3000);
  }
  private _message$ = new BehaviorSubject<string | null>(null);
  public message$ = this._message$.asObservable();
}
