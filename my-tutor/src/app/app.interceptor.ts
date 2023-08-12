import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { environment } from './environments/environment';
import { Router } from '@angular/router';
import { ErrorService } from './core/error/error.service';

const { apiUrl, headers } = environment;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private router: Router, private errorService: ErrorService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    if (request.url.startsWith('/api')){
      request = request.clone({
        url: request.url.replace('/api', apiUrl),
        withCredentials: true,
        headers: new HttpHeaders(headers)
      });
    }
    
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.error?.code === 101){
          this.router.navigate(['/login']);
        } else if (err.error?.code === 203 || err.error?.code === 202 ) {
          this.router.navigate(['/signup'])
        } else {
          this.router.navigate(['/error'])
        }
       throw err
      })
    );
  }
}

export const appInterceptorProvider: Provider = {
  multi: true,
  useClass: AppInterceptor,
  provide: HTTP_INTERCEPTORS
}
