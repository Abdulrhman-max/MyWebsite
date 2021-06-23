import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { BranchResponse } from './models/branch-response';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  constructor(private http: HttpClient, private _router: Router) {}

  getAll(): Observable<any> {
    return this.http.get<any>('branch');
  }
  getAllVendors(): Observable<any> {
    return this.http.get<any>('vendors');
  }
  getAllDeliveryZones(): Observable<any> {
    return this.http.get<any>('deliveryZone');
  }
  getAllWarehouses(): Observable<any> {
    return this.http.get<any>('Warehouses');
  }

  create(model: BranchResponse): Observable<any> {
    return this.http.post<any>('branch', model);
  }

  update(id: string, model: BranchResponse): Observable<any> {
    return this.http.put<any>('branch/' + id, model);
  }

  getById(Id: string): Observable<any> {
    return this.http.get<any>('branch/' + Id);
  }
  active(Id: string): Observable<any> {
    return this.http.get<any>('branch/ActiveAsync?id=' + Id);
  }
}
