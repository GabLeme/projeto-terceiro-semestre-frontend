import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-create-services-or-update',
  templateUrl: './create-services-or-update.component.html',
  styleUrls: ['./create-services-or-update.component.scss']
})
export class CreateServicesOrUpdateComponent implements OnInit {

  constructor(private _ServicesService: ServicesService) { }

  @Input() typeOfOperation = ``;
  @Input() service: any;


  @Output() messageEvent = new EventEmitter<string>();

  category = new FormControl('');
  description = new FormControl('');
  value = new FormControl('');
  profile;

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('loggedUser'));
  }

  createOrUpdate() {
    if (this.typeOfOperation === 'create') {
      let payload = JSON.stringify({
        "description": this.description.value,
        "category": this.category.value,
        "providerName": this.profile['email'],
        "providerEmail": this.profile['email'],
        "providerCellphone": this.profile['cellPhone'],
        "announcementDate": new Date(),
        "value": this.value.value,
        "totalStars": 0
      })
      this._ServicesService.createService(payload).subscribe(r => {
        this.messageEvent.emit("created");
      })
    }
    else if (this.typeOfOperation === 'update') {
      //update
    }

  }


}
