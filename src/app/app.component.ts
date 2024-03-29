import { Component } from '@angular/core';
import {AuthenticationService} from "./_services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebShop';
  user: string | null;

  constructor(private authenticationService: AuthenticationService) {
    this.user = this.authenticationService.getUsername();
  }
}
