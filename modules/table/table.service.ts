import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TableResponse } from './models/table-response';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient, private _router: Router) { }

  getAll(): Observable<any> {
    return this.http.get<any>('table');
  }
  getAllByFloorId(floorId:number): Observable<any> {
    return this.http.get<any>('table/GetTableByFloor?floorId='+floorId);
  }
  create(model: TableResponse): Observable<any> {
    return this.http.post<any>('table', model);
  }
  getById(Id: string): Observable<any> {
    return this.http.get<any>('table/' + Id);
  }
  update(id: string, model: TableResponse): Observable<any> {
    return this.http.put<any>('table/' + id, model);
  }
}
