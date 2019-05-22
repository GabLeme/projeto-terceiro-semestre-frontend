import { Component, OnInit } from '@angular/core';
import { AccessRole } from 'src/app/utils/access-role';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private _AuthService: AuthService) { }

  typeUser;

  profile: any;
  errorMessage: String;
  successMessage: String;
  changePass;
  newPhoto64;

  //Form
  firstName = new FormControl('');
  lastName = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  newPassword = new FormControl('');


  ngOnInit() {
    this.typeUser = localStorage.getItem('typeUser');
    this.profile = JSON.parse(localStorage.getItem('loggedUser'));
  }


  verifyIfPasswordMatch(): boolean {
    if (this.password.value != this.profile['password']) {
      this.errorMessage = "Opa! senha errada, tente novamente.";
      return false;
    }

    return true;
  }

  onSwitchChange() {
    if ($('#customSwitches').is(':checked')) {
      this.changePass = true;
    }
    else {
      this.changePass = false;
    }
  }

  verifyTypeOfUser() {
    return this.typeUser;
  }

  updateConsumer() {
    if (this.verifyTypeOfUser() === 'consumer') {

      if (this.changePass) {
        if (this.verifyIfPasswordMatch()) {
          let payload = JSON.stringify({
            "_id": this.profile['_id'],
            "firstName": this.profile['firstName'],
            "lastName": this.profile['lastName'],
            "email": this.profile['email'],
            "password": this.newPassword.value,
            "photo": this.profile['photo']
          })

          this._AuthService.updateConsumer(payload).subscribe(r => {
            console.log(`****O QUE FOI ENVIADO***** \n ${payload}`)
            this.errorMessage = '';
            this.successMessage = "Dados atualizados :)";
            localStorage.setItem('loggedUser', JSON.stringify(r));
            console.log(`****O QUE FOI RECEBIDO***** \n`)
            console.log(r)
            this.profile = JSON.parse(localStorage.getItem('loggedUser'));
          })
        }
        else {
          this.errorMessage = 'Senha inválida.';
        }
      }
      else {
        let payload = JSON.stringify({
          "_id": this.profile['_id'],
          "firstName": this.profile['firstName'],
          "lastName": this.profile['lastName'],
          "email": this.profile['email'],
          "password": this.profile['password'],
          "photo": this.newPhoto64
        })

        this._AuthService.updateConsumer(payload).subscribe(r => {
          console.log(`****O QUE FOI ENVIADO***** \n ${payload}`)
          this.errorMessage = '';
          localStorage.setItem('loggedUser', JSON.stringify(r));
          console.log(`****O QUE FOI RECEBIDO***** \n`)
          console.log(r)
          this.profile = JSON.parse(localStorage.getItem('loggedUser'));
        })
      }

    }
    else {
      if (this.changePass) {
        if (this.verifyIfPasswordMatch()) {
          let payload = JSON.stringify({
            "_id": this.profile['_id'],
            "firstName": this.profile['firstName'],
            "lastName": this.profile['lastName'],
            "email": this.profile['email'],
            "password": this.newPassword.value,
            "photo": this.profile['photo']
          })

          this._AuthService.updateProvider(payload).subscribe(r => {
            console.log(`****O QUE FOI ENVIADO***** \n ${payload}`)
            this.errorMessage = '';
            this.successMessage = "Dados atualizados :)";
            localStorage.setItem('loggedUser', JSON.stringify(r));
            console.log(`****O QUE FOI RECEBIDO***** \n`)
            console.log(r)
            this.profile = JSON.parse(localStorage.getItem('loggedUser'));
          })
        }
        else {
          this.errorMessage = 'Senha inválida.';
        }
      }
      else {
        let payload = JSON.stringify({
          "_id": this.profile['_id'],
          "firstName": this.profile['firstName'],
          "lastName": this.profile['lastName'],
          "email": this.profile['email'],
          "password": this.profile['password'],
          "photo": this.newPhoto64
        })

        this._AuthService.updateProvider(payload).subscribe(r => {
          console.log(`****O QUE FOI ENVIADO***** \n ${payload}`)
          this.errorMessage = '';
          localStorage.setItem('loggedUser', JSON.stringify(r));
          console.log(`****O QUE FOI RECEBIDO***** \n`)
          console.log(r)
          this.profile = JSON.parse(localStorage.getItem('loggedUser'));
        })
      }
    }
  }

  transformImageToBase64(readerEvt, midia) {
    let file = readerEvt.target.files[0];
    var reader = new FileReader();
    let that = this;
    reader.readAsDataURL(file);
    reader.onload = function () {
      that.newPhoto64 = reader.result;
    };
    reader.onerror = function (error) {
      //trata erro
      console.log(error)
    };
  }



}
