import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PriceTag } from './models/price-tag';

@Injectable({
  providedIn: 'root'
})
export class PriceTagService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>("PriceTag")
  }

  getById(id: string): Observable<any> {
    return this.http.get<any>(`PriceTag/${id}`)
  }

  create(model : PriceTag):Observable<any>{
    return this.http.post<any>('PriceTag', model);
  }

  Update(model : PriceTag):Observable<any>{
    return this.http.put<any>(`PriceTag/${model.Uid}`, model);
  }
}
