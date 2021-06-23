import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService, private readonly router: Router) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('this is client side error');
          errorMsg = `Error: ${error.error.message}`;
          this.toastr.error(errorMsg);
        } else {
          console.log('this is server side error');
          console.log(error);
          //this.toastr.error('server side error');
          if (error.status === 401) {
            this.toastr.error('TOKEN IS EXPIRED , LOGIN AGAIN !');
            localStorage.clear();
            sessionStorage.clear();
            this.router.navigate(['./auth']);
            return throwError('token expired !');
          }
          if (error.status === 500) {
            this.toastr.error('SERVER ERROR !, try later thank you :)');
          }
          errorMsg = `Message: ${error.error.Errors[0]}`;
          this.toastr.error(errorMsg);
        }
        return throwError(errorMsg);
      })
    );
  }
}
