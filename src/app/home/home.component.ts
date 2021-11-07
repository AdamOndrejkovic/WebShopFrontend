import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../_services/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string | null;
  errorMessage: string = '';

  constructor(private authService: AuthenticationService) {
    this.username = authService.getUsername();
  }

  ngOnInit(): void {
  }

}
