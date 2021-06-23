import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUser(): Observable<User> {
    return this.http.get<User>('user');
  }

  public getBranches(): Observable<any> {
    return this.http.get<any>('branch');
  }

  public getRolles(): Observable<any> {
    return this.http.get<any>('roles');
  }

  public user(data: User): Observable<User> {
    return this.http.post<User>('user', data);
  }
}
