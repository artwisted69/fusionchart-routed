import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { AuthStrategy, AUTH_STRATEGY } from './auth.strategy';
import { Role } from '../../models/types';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    public readonly LOGIN_PATH = '/login';
    public readonly INITIAL_PATH = '/app/sample';
    public readonly ADMIN_PATH = '/admin';
  
    constructor(
      private http: HttpClient,
      private router: Router,
      @Inject(AUTH_STRATEGY) private auth: AuthStrategy<any>
    ) { }

    getInitialPathForRole(role: Role): string {
    return role === 'ADMIN' ? this.ADMIN_PATH : this.INITIAL_PATH;
    }

    login(user: User): Observable<User> {
        return this.http.post<any>(`${environment.url}/login`, user)
        .pipe(tap(data => this.auth.doLoginUser(data)));
    }

    logout(): Observable<any> {
        return this.http.get<any>(`${environment.url}/logout`)
        .pipe(tap(() => this.doLogoutUser()));
    } 

    logoutAndRedirectToLogin(): void {
        this.doLogoutUser();
        this.router.navigate(['/login']);
    }

    private doLogoutUser(): void {
        // this.cacheService.pruneAll();
        this.auth.doLogoutUser();
    }
}
