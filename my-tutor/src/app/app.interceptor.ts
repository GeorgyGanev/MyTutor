import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environments/environment';
import { Router } from '@angular/router';

const { apiUrl, headers } = environment;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

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
    
    return next.handle(request);
  }
}

export const appInterceptorProvider: Provider = {
  multi: true,
  useClass: AppInterceptor,
  provide: HTTP_INTERCEPTORS
}
