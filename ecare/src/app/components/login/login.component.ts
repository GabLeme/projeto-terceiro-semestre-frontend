import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  serviceProvider = false;

  ngOnInit() {
  }

  login() {
    if (this.serviceProvider) {
      //login como prestador
    }
    else {
      //login como cliente
    }
  }

  checkIfIsProvider(event) {
    if (event.checked == true) {
      this.serviceProvider = true;
    }
    else {
      this.serviceProvider = false;
    }
  }

}
