import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  constructor(private http: HttpClient, private _router: Router) {}


  getById(Id: string): Observable<any> {
    return this.http.get<any>('device/' + Id);
  }

  active(Id: string): Observable<any> {
    return this.http.get<any>('device/Active?id=' + Id);
  }
}
