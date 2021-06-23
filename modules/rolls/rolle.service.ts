import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RollResponse } from './models/roll-response';

@Injectable({
  providedIn: 'root'
})
export class RolleService {

  constructor(private http: HttpClient, private _router: Router) { }

  getAllRoles(): Observable<any> {
    return this.http.get<any>('roles').pipe(catchError(this.errorHandler));
  }

  addRoll(roll: RollResponse): Observable<any> {
    return this.http.post<any>('roles', roll).pipe(catchError(this.errorHandler));
  }
  getRollByID(id: any) {
    return this.http.get<any>('roles/' + id);
  }
  updateRoll(id: any, data: RollResponse): Observable<any> {
    return this.http.put<any>('roles/' + id, data);
  }
  getCategoryPermissons(): Observable<any> {
    return this.http.get<any[]>('permissionCategories').pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
