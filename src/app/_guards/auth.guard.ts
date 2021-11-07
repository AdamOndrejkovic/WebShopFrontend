import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthenticationService} from "../_services/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationService) {
  }

  canActivate(){
    if (this.authService.getToken()){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
