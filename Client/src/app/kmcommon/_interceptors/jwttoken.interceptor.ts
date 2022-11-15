import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../_services/user.service';

@Injectable()
export class JwttokenInterceptor implements HttpInterceptor {

  constructor(private userSer: UserService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    const token=this.userSer.getToken();
    if(token)
    {
      const tokenisedrequest = request.clone({headers:request.headers.set('x-access-token',token)});
         return next.handle(tokenisedrequest);;
    }
    return next.handle(request);
  }
}
