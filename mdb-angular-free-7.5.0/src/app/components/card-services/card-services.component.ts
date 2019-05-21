import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { Subscription } from 'rxjs';
import { FilterDivComponent } from '../filter-div/filter-div.component';
import * as $ from 'jquery';
import { ProposesService } from 'src/app/services/proposes.service';
import { FormControl, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-card-services',
  templateUrl: './card-services.component.html',
  styleUrls: ['./card-services.component.scss']
})
export class CardServicesComponent implements OnInit {

  constructor(private _Services: ServicesService, private _ProposesService: ProposesService, private _EmailService: EmailService) { }

  @ViewChild(FilterDivComponent) filterDiv;
  @Input() category = ``;
  informationAboutTheService: any;
  services;

  //Form
  myEmail = new FormControl(null, [Validators.required, Validators.email]);
  dateOne = new FormControl('');
  dateTwo = new FormControl('');
  value = new FormControl('');
  successMessage;



  ngOnInit() {
    if (this.category != '')
      this.getByCategory();
  }

  receiveMessage($event) {
    this.services = $event;
  }

  getAll(): void {
    this._Services.findAll().subscribe(r => this.services = r);
  }

  getByCategory() {
    this._Services.findByCategory(this.category).subscribe(r => { this.services = r; console.log(r) });
  }

  getInformationsAboutTheSelectedService(service) {
    this.informationAboutTheService = service;
  }

  createPropose() {
    let senderEmail = JSON.parse(localStorage.getItem('loggedUser'));
    const payload = JSON.stringify({
      "senderEmail": this.myEmail.value,
      "receiverEmail": this.informationAboutTheService['providerEmail'],
      "serviceDate": "De: " + this.dateOne.value + ", Até: " + this.dateTwo.value,
      "value": parseFloat(this.value.value)
    })

    let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));


    const payloadEmail = JSON.stringify({
      "receiverEmail": this.informationAboutTheService['providerEmail'],
      "senderEmail": this.myEmail.value,
      "subject": "Proposta de serviço.",
      "text": "abcs",
      "date": "De: " + this.dateOne.value + ", Até: " + this.dateTwo.value,
      "value": parseFloat(this.value.value),
      "photo": "http://chittagongit.com/download/96696"
    })

    this._ProposesService.createPropose(payload).subscribe(r => {
      this.sendEmailToProvider(payloadEmail);
      console.log(payloadEmail)
    })
  }

  cleanFields() {
    this.myEmail.setValue('');
    this.dateOne.setValue('');
    this.dateTwo.setValue('');
    this.value.setValue('');
  }

  sendEmailToProvider(payload) {
    this._EmailService.sendProposeEmailToProvider(payload).subscribe(r => {
      this.successMessage = true;
    })
  }

}
