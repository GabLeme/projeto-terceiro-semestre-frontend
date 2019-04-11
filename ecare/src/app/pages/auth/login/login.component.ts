import { Component, OnInit } from '@angular/core';
import { AuthConsumerService } from '../services/auth-consumer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthConsumer: AuthConsumerService, private _Router: Router) { }

  serviceProvider: boolean = false;
  username: string;
  password: string;
  errorMessage: string;

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
      this._AuthConsumer.doLogin(loginPayload).subscribe(r => {
        if (loginPayload['username'] === r['username'] && loginPayload['password'] === r['password']) {
          window.localStorage.setItem('loggedUser', JSON.stringify({ r }))
          
        }
        else
          this.errorMessage = "Usuário ou senha inválidos.";
      })
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
