import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OptionGroupResponse } from './models/option-group-response.model';

@Injectable({
  providedIn: 'root',
})
export class OptiongroupService {
  constructor(private http: HttpClient, private _router: Router) {}

  getAll(): Observable<any> {
    return this.http.get<any>('OptionGroupTemplete');
  }

  create(model: OptionGroupResponse): Observable<OptionGroupResponse> {
    return this.http.post<OptionGroupResponse>('OptionGroupTemplete', model);
  }

  getById(Id: string): Observable<OptionGroupResponse> {
    return this.http.get<OptionGroupResponse>('OptionGroupTemplete/' + Id);
  }

  getAllProducts(): Observable<any> {
    return this.http.get<any>('product/AllProducts');
  }
  update(id: string, model: OptionGroupResponse): Observable<any> {
    return this.http.put<any>('OptionGroupTemplete/' + id, model);
  }
}
