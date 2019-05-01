import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _Router: Router, private _AuthService: AuthService) { }

  private isProvider: boolean = false;

  email = new FormControl('');
  password = new FormControl('');
  errorMessage: String;

  ngOnInit() {
    localStorage.clear();
  }

  authentication() {
    if (!this.isProvider) {
      this._AuthService.makeLoginOfConsumer(this.email.value, this.password.value).subscribe(r => {
        if (r != null) {
          localStorage.setItem('loggedUser', JSON.stringify(r));
          localStorage.setItem('typeUser', "consumer");
          this._Router.navigate(['/home/services/cuidador'])
        }
        else
          this.errorMessage = "Usuario ou senha inválidos.";
      })
    }
    else {
      this._AuthService.makeLoginOfProvider(this.email.value, this.password.value).subscribe(r => {
        if (r != null) {
          localStorage.setItem('loggedUser', JSON.stringify(r));
          localStorage.setItem('typeUser', "provider");
          this._Router.navigate(['/home/services/cuidador'])
        }
        else
          this.errorMessage = "Usuario ou senha inválidos.";
      })
    }
  }


  checkIfIsProvider(event): void {
    if (event.checked == true) {
      this.isProvider = true;
    }
  }

}
