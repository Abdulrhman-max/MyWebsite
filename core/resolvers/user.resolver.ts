import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { empty, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/model';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable({
  providedIn: 'root',
})
export class UsersResolver implements Resolve<User> {
  constructor(
    private readonly http: HttpClient,
    private readonly spinner: NgxSpinnerService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {
    this.spinner.show();
    return this.http.get<User>('user').pipe(
      catchError((error) => {
        return empty();
      })
    );
  }
}
