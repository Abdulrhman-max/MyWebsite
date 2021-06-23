import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentMethod } from './models/payment-method';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>('paymentmethod');
  }

  getById(id:string):Observable<any>{
    return this.http.get<any>("paymentmethod/"+id)
  }

  getTypes():Observable<any>{
    return this.http.get<any>('paymentmethod/paymentmethodtypes');
  }

  create(model : PaymentMethod):Observable<any>{
    return this.http.post<any>('paymentmethod', model);
  }

  Update(model : PaymentMethod):Observable<any>{
    return this.http.put<any>('paymentmethod', model);
  }
}
