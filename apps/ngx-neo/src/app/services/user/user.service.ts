import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userType: 'admin' | 'guest' | 'authorized' = 'guest';

  public getUser() {
    // проверяем пользователя, возможно делаем запрос
    return of(this.userType).pipe(
      tap((data) => {
        console.log('getUser => ', data);
      })
    );
  }
}
