import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerGroupResponse } from './models/customer-group-response';

@Injectable({
    providedIn: 'root',
  })
  export class CustomerGroupService {
    constructor(private http: HttpClient) {}
     //#regionCustomerGroup
  getAllCustomerGroup(): Observable<any> {
    return this.http.get<any>('CustomerGroup').pipe(catchError(this.errorHandler));
  }

  getCustomerGroupById(CId: string): Observable<any> {
    return this.http.get<any>('CustomerGroup/' + CId);
  }

  createCustomerGroup(customerGroup: CustomerGroupResponse): Observable<any> {
    return this.http.post<any>('CustomerGroup', customerGroup);
  }

  update(id: string, customerGroup: CustomerGroupResponse): Observable<any> {
    return this.http.put<any>('CustomerGroup/' + id, customerGroup);
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
  //#endregionCustomerGroup
}
