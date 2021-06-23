import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FloorResponse } from './models/floor-response';

@Injectable({
  providedIn: 'root'
})
export class FloorService {

  constructor(private http: HttpClient, private _router: Router) { }

  getAll(): Observable<any> {
    return this.http.get<any>('floor');
  }
  getAllBranchs(): Observable<any> {
    return this.http.get<any>('branch/GetBranchByUser');
  }
  create(model: FloorResponse): Observable<any> {
    return this.http.post<any>('floor', model);
  }
  getById(Id: string): Observable<any> {
    return this.http.get<any>('floor/' + Id);
  }
  update(id: string, model: FloorResponse): Observable<any> {
    return this.http.put<any>('floor/' + id, model);
  }
}
