
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { AuthStrategy, AUTH_STRATEGY } from './auth.strategy';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    public readonly LOGIN_PATH = '/login';
    public readonly INITIAL_PATH = '/app/dashboard';
    public readonly ADMIN_PATH = '/admin';
  
  constructor(
      private http: HttpClient,
      private router: Router,
      @Inject(AUTH_STRATEGY) private auth: AuthStrategy<any>) { }

  login(user: User): Observable<User> {
    return this.http.post<any>(`${environment.url}/login`, user)
      .pipe(tap(data => this.auth.doLoginUser(data)));
  }

  logout() {
    return this.http.get<any>(`${environment.url}/logout`)
      .pipe(tap(() => this.doLogoutUser()));
  }

  logoutAndRedirectToLogin() {
    this.doLogoutUser();
    this.router.navigate(['/login']);
  }

  private doLogoutUser() {
    // this.cacheService.pruneAll();
    // this.auth.doLogoutUser();
  }
}
