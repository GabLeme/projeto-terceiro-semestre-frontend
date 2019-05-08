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

  private accessRole = new AccessRole();

  consumerProfile: any;
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
    if (this.accessRole.verifyAccessRole(localStorage.getItem("typeUser"), "consumidor")) {
      this.consumerProfile = JSON.parse(localStorage.getItem('loggedUser'));
    }
  }

  verifyIfPasswordMatch(): boolean {
    if (this.password.value != this.consumerProfile['password']) {
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

  updateConsumer() {

    if (this.changePass) {
      if (this.verifyIfPasswordMatch()) {
        let payload = JSON.stringify({
          "_id": this.consumerProfile['_id'],
          "firstName": this.consumerProfile['firstName'],
          "lastName": this.consumerProfile['lastName'],
          "email": this.consumerProfile['email'],
          "password": this.newPassword.value,
          "photo": this.consumerProfile['photo']
        })

        this._AuthService.updateConsumer(payload).subscribe(r => {
          console.log(`****O QUE FOI ENVIADO***** \n ${payload}`)
          this.errorMessage = '';
          this.successMessage = "Dados atualizados :)";
          localStorage.setItem('loggedUser', JSON.stringify(r));
          console.log(`****O QUE FOI RECEBIDO***** \n`)
          console.log(r)
          this.consumerProfile = JSON.parse(localStorage.getItem('loggedUser'));
        })
      }
      else {
        this.errorMessage = 'Senha inválida.';
      }
    }
    else {
      let payload = JSON.stringify({
        "_id": this.consumerProfile['_id'],
        "firstName": this.consumerProfile['firstName'],
        "lastName": this.consumerProfile['lastName'],
        "email": this.consumerProfile['email'],
        "password": this.consumerProfile['password'],
        "photo": this.newPhoto64
      })

      this._AuthService.updateConsumer(payload).subscribe(r => {
        console.log(`****O QUE FOI ENVIADO***** \n ${payload}`)
        this.errorMessage = '';
        this.successMessage = "Dados atualizados :)";
        localStorage.setItem('loggedUser', JSON.stringify(r));
        console.log(`****O QUE FOI RECEBIDO***** \n`)
        console.log(r)
        this.consumerProfile = JSON.parse(localStorage.getItem('loggedUser'));
      })
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
