import { Component, OnInit } from '@angular/core';
import { AccessRole } from 'src/app/utils/access-role';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl } from '@angular/forms';

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

  updateConsumer() {
    const payload = JSON.stringify({
      "_id": this.consumerProfile['_id'],
      "firstName": this.consumerProfile['firstName'],
      "lastName": this.consumerProfile['lastName'],
      "email": this.consumerProfile['firstName'],
      "password": this.newPassword.value
    })

    if (this.verifyIfPasswordMatch()) {
      this._AuthService.updateConsumer(payload).subscribe(r => {
        console.log('entrei')
        this.errorMessage = '';
        this.successMessage = "Dados atualizados :)";
        localStorage.setItem('loggedUser', JSON.stringify(r));
        this.consumerProfile = JSON.parse(localStorage.getItem('loggedUser'));
      })
    }
  }


}
