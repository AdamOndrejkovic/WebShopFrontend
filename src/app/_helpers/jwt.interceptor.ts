import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthenticationService} from "../_services/authentication.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class JwtInterceptor implements HttpInterceptor{
  constructor(private accountService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = this.accountService.getUsername();
    const isLoggedIn = user && this.accountService.getUsername();
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isLoggedIn && isApiUrl){
      request = request.clone(
        {
          setHeaders: {
            Authorization: `Bearer ${this.accountService.getToken()}`
          }
        }
      )
    }

    return next.handle(request);
  }
}
