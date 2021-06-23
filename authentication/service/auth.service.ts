import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LOGIN_FROM, User } from 'src/app/core/models/model';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    public readonly jwtHelper: JwtHelperService
  ) {}

  login(loginForm: LOGIN_FROM): Observable<User> {
    return this.http.post<User>('auth/login', loginForm);
  }

  logOut(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  isAuth(): boolean {
    const token = localStorage.getItem('TOKEN'); //token
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }
}
