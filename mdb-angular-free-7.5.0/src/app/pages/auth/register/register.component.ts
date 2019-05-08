import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { isBoolean } from 'util';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _ActivatedRoute: ActivatedRoute, private _AuthService: AuthService, private _Router: Router) { }

  provider: boolean;
  consumer: boolean;
  message: String;

  //Forms
  firstName = new FormControl('');
  lastName = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  cellPhone = new FormControl('');


  ngOnInit() {
    this.verifyTypeOfRegister();
  }

  verifyTypeOfRegister() {
    this._ActivatedRoute.params.subscribe((params: Params) => {
      if (params['typeOfUser'] === 'prestador')
        this.provider = true;
      else
        this.consumer = true;
    });
  }


  cleanFields() {
    this.firstName.setValue('');
    this.lastName.setValue('');
    this.email.setValue('');
    this.password.setValue('');
    this.cellPhone.setValue('');
  }

  checkIfEmailExists(): boolean {
    let exists = false;
    this._AuthService.checkIfConsumerEmailExists(this.email.value).subscribe(r => {
      if (r) {
        this.message = "Email já existente.";
      }
    })

    return exists;
  }

  register() {
    this.checkIfEmailExists();
    const payload = JSON.stringify({
      "firstName": this.firstName.value,
      "lastName": this.lastName.value,
      "email": this.email.value,
      "password": this.password.value,
      "cellPhone": this.cellPhone.value
    })
    if (!this.provider && !this.checkIfEmailExists()) {
      this._AuthService.saveConsumer(payload).subscribe(r => {
        this.cleanFields();
        this.message = "Sucesso! Estamos ansiosos para que você acesse nossa plataforma, dá um pulinho lá!";
      })
    }
    else {
      this._AuthService.saveProvider(payload).subscribe(r => {
        this.cleanFields();
        this.message = "Parabéns! Temos orgulho de ter você em nosso time!";
      })
    }
  }

}
