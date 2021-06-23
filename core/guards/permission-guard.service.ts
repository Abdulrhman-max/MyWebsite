import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root',
})
export class PermissionGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor( private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let roles = this.GetRoles();
    let role = route.data.role;
    if (roles.find((x) => x == role)) {
      return true;
    } else {
      this.router.navigateByUrl('PageNotAccess');
      return false;
    }
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
  canLoad(
    route: any,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    let roles = this.GetRoles();
    let role = route.data.role;
    if (roles.find((x) => x == role)) {
      return true;
    } else {
      this.router.navigateByUrl('PageNotAccess');
      return false;
    }
  }
  GetRoles(): string[] {
    let myRawToken = String(localStorage.getItem('TOKEN'));
    let roles: string[];
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(myRawToken);

    roles =
      decodedToken[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ];

    return roles;
  }
}
