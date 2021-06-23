import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Customer } from "./models/customer";

@Injectable({
    providedIn: 'root',
  })
  export class CustomerService {
    constructor(private http: HttpClient) {}

    getAllCustomers(): Observable<any> {
        return this.http.get<any>('Customers').pipe(catchError(this.errorHandler));
    }

    getCustomerById(CId: string): Observable<any> {
      return this.http.get<any>('/Customers/' + CId);
    }

    getAllCountryCode(): Observable<any> {
      return this.http.get<any>('CountryCode').pipe(catchError(this.errorHandler));
    }

    createCustomer(customer: Customer): Observable<any> {
      return this.http.post<any>('Customers', customer);
    }

    update(id: string, customer: Customer): Observable<any> {
      return this.http.put<any>('Customers/' + id, customer);
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
