import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthStrategy } from './auth.strategy';
import { User } from '../../models/user';
import { environment } from '../../../environments/environment';

export class SessionAuthStrategy implements AuthStrategy<User> {

  private loggedUser: User;

  constructor(private http: HttpClient) {}

  doLoginUser(user: User): void {
    this.loggedUser = user;
  }

  doLogoutUser(): void {
    this.loggedUser = undefined;
  }

  getCurrentUser(): Observable<User> {
    if (this.loggedUser) {
      return of(this.loggedUser);
    } else {
      return this.http.get<User>(`${environment.url}/user`)
        .pipe(tap(user => this.loggedUser = user));
    }
  }

}