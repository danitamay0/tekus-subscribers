import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpClient,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private http: HttpClient,
    private _auth: AuthService,

  ) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this._auth.getToken()}`,
      },
    });


    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            //RESPONSE INTERCEPTOR
          }
        },
        (error) => {
          // http response status code


          if (error.status === 401) {
            //INVALID IS TOKE EXPIRED
            this._auth.logOut()
          }
        }
      )
    );
  }
}
