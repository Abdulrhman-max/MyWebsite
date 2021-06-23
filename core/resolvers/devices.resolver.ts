import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { empty, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DevicesResolver implements Resolve<boolean> {
  constructor(private readonly http: HttpClient,    private readonly spinner: NgxSpinnerService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.spinner.show();
    return this.http.get<any>('device').pipe(
      catchError((error) => {
        return empty();
      })
    );  }
}
