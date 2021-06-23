import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UnauthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuth()) {
      this.router.navigate(['/pages']);
      return false;
    } else {
      return true;
    }
  }
}
