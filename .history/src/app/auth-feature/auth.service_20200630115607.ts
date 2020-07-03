import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  login(user: User): Observable<User> {
    return this.http.post<any>(`${config.authUrl}/login`, user)
      .pipe(tap(data => this.auth.doLoginUser(data)));
  }

  logout() {
    return this.http.get<any>(`${config.authUrl}/logout`)
      .pipe(tap(() => this.doLogoutUser()));
  }


  private doLogoutUser() {
    // this.cacheService.pruneAll();
    // this.auth.doLogoutUser();
  }
}
