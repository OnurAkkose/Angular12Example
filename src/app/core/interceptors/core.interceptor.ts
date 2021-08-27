import { AuthService } from './../services/auth.service';

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { AuthenticationState } from '../store/states/user.state';
import { UserModel } from 'src/app/models/user/user';
import { catchError, map } from 'rxjs/operators';
import { Login } from '../store/actions/user.actions';
import { AlertifyService } from '../services/alertify.service';

@Injectable()
export class CoreInterceptor implements HttpInterceptor {
  @Select(AuthenticationState.userInfo) token! : UserModel;
  constructor(private alertifyService: AlertifyService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token');
    if(token){
      request = request.clone({
        setHeaders: {
          token: token
        }
      });    
    }
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(request).pipe(
      map((response) => response),
      catchError((err: any) => {
        console.log(err);
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            localStorage.removeItem('token');
          }
          if (err.status === 400) {
            this.alertifyService.invalid_username(
              'invalid username or password '
            );
          }
          if (err.status === 500) {
            this.alertifyService.warning('an error was occured')
          }
        }

        return throwError(err);
      })
    )
    
  }
}
