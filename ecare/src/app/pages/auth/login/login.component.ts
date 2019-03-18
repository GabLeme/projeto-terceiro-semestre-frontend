import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  serviceProvider = false;
  username: string;
  password: string;

  ngOnInit() {
  }

  login(): void {
    if (this.serviceProvider) {
      
    }
    else {

    }
  }

  validateUser(res): boolean {
    return res['username'] === this.username && res['password'] === this.password;
  }

  checkIfIsProvider(event): void {
    if (event.checked == true) {
      this.serviceProvider = true;
    }
    else {
      this.serviceProvider = false;
    }
  }

}
