import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token = localStorage.getItem('token');
    console.log('passou');
    if (!!token) {
      const cloneRequest = req.clone({headers: req.headers.append('Authorization', `Bearer ${token}`)});
      return  next.handle(cloneRequest);
    }
    return next.handle(req);
  }
}
