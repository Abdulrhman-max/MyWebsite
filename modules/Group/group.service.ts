import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GroupResponse } from './models/group-response';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(private http: HttpClient) {}
  //#regionGroup
  getAllGroup(): Observable<any> {
    return this.http.get<any>('groups').pipe(catchError(this.errorHandler));
  }
  getAllBranch(): Observable<any> {
    return this.http.get<any>('branch').pipe(catchError(this.errorHandler));
  }
  getGroupByID(id: any) {
    return this.http.get<any>('groups/' + id);
  }
  getPerantGroup(groupID: any) {
    return this.http.get<any>('parent/' + groupID);
  }
  updateGroup(id: any, group: GroupResponse,image: any): Observable<GroupResponse> {
    let formData = new FormData();
    formData.append('data', JSON.stringify(group));
    formData.append('image', image);
    return this.http.put<GroupResponse>('groups/' + id, formData);
  }
  addGroup(group: GroupResponse, image: any): Observable<GroupResponse> {
    let formData = new FormData();
    formData.append('data', JSON.stringify(group));
    formData.append('image', image);
    return this.http.post<GroupResponse>('groups', formData).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  //#endregionGroup
}
