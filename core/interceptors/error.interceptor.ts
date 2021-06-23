import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from 'src/app/authentication/service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    public readonly auth: AuthService,
    private readonly router: Router,
    private readonly toastr: ToastrService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        () => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status !== 401) {
              return;
            }
            console.log('401 UNAUTHORIZED !');
            this.toastr.warning('TOKEN IS EXPIRED !, LOGIN AGAIN PLEASE !');
            this.router.navigate(['auth']);
          }
        }
      )
    );
    // return next.handle(request).pipe(
    //   (event: HttpEvent<any>) => {
    //     if (event instanceof HttpResponse) {
    //       // do stuff with response if you want
    //     }
    //   },
    //   (err: any) => {
    //     if (err instanceof HttpErrorResponse) {
    //       if (err.status === 401) {
    //         // redirect to the login route
    //         // or show a modal
    //         console.log('401 UNAUTHORIZED !');
    //         this.toastr.warning('TOKEN IS EXPIRED !, LOGIN AGAIN PLEASE !');
    //         this.router.navigate(['auth']);
    //       }
    //     }
    //   }
    // );
  }
}
