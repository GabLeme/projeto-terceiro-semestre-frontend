import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  serviceProvider: boolean = false;
  username: string;
  password: string;

  ngOnInit() {
  }

  login(): void {
    const loginPayload = JSON.stringify({
      "username": this.username,
      "password": this.password
    })

    if (this.serviceProvider) {
      // chama serviço de login como prestador passando loginPayload  
    }
    else {
      // chama serviço de login como consumidor passando loginPayload
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
