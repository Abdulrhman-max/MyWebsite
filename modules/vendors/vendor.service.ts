import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient, private _router: Router) { }

  getAll(): Observable<any> {
    return this.http.get<any>('vendors');
  }
}
