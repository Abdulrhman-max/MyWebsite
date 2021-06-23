import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DeliveryZoneResponse } from './models/delivery-zone-response';

@Injectable({
  providedIn: 'root'
})
export class DeliveryZoneService {

  constructor(private http: HttpClient, private _router: Router) { }


  getAll(): Observable<any> {
    return this.http.get<any>('DeliveryZone');
  }
  getById(Id: string): Observable<any> {
    return this.http.get<any>('DeliveryZone/' + Id);
  }
  create(model: DeliveryZoneResponse): Observable<any> {
    return this.http.post<any>('DeliveryZone', model);
  }
  update(id: string, model: DeliveryZoneResponse): Observable<any> {
    return this.http.put<any>('DeliveryZone/' + id, model);
  }
}
