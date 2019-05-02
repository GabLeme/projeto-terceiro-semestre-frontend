import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _ActivatedRoute: ActivatedRoute, private _AuthService: AuthService, private _Router: Router ) { }

  provider: boolean;
  consumer: boolean;
  successMessage: String;

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

  Validation(){
    if (this.firstName.value === '' ||
      this.email.value === '' ||
      this.lastName.value === '' ||
      this.email.value === '' || this.password.value === '' ||
      (this.password.value + '').length < 8) {
      this.successMessage = 'Não foi possivel Efetuar o cadastro';
      return false;
    } else if (this.provider && this.cellPhone.value === '' ) {
      this.successMessage = 'Favor Preencher Telefone';
      return false;
    }
    this._AuthService.Exists(this.email.value).subscribe(r => {
      if (r != null) {
        console.log(r);
        localStorage.setItem('loggedUser', JSON.stringify(r));
        localStorage.setItem('typeUser', "consumer");
        this.successMessage = 'Ja exist esse Email';
        return false;
      }
      else {
         console.log(r);
         return true;
      }
    })
    return true;
  }

  register() {
    const payload = JSON.stringify({
      "firstName": this.firstName.value,
      "lastName": this.lastName.value,
      "email": this.email.value,
      "password": this.password.value,
      "cellPhone": this.cellPhone.value
    })

  if (this.Validation()) {
      if (!this.provider) {
        this._AuthService.saveConsumer(payload).subscribe(r => {
          this.cleanFields();
          this.successMessage = "Sucesso! Estamos ansiosos para que você acesse nossa plataforma, dá um pulinho lá!";
        })
      }
      else {
        this._AuthService.saveProvider(payload).subscribe(r => {
          this.cleanFields();

          this.successMessage = "Parabéns! Temos orgulho de ter você em nosso time!";

        })
      }
    }
  }

}
