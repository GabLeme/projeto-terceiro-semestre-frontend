import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _ActivatedRoute: ActivatedRoute, private _AuthService: AuthService) { }

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

  register() {
    const payload = JSON.stringify({
      "firstName": this.firstName.value,
      "lastName": this.lastName.value,
      "email": this.email.value,
      "password": this.password.value,
      "cellPhone": this.cellPhone.value
    })

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
