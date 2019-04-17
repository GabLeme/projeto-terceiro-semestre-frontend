import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServicesCaregiverService } from './../services/services-caregiver.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-services-caregiver',
  templateUrl: './card-services-caregiver.component.html',
  styleUrls: ['./card-services-caregiver.component.scss']
})
export class CardServicesCaregiverComponent implements OnInit, OnDestroy {

  constructor(private _ServicesCaregiverService: ServicesCaregiverService) { }

  caregiverServices: Subscription;

  ngOnInit() {
    this.getCaregiverServices();
  }

  getCaregiverServices(): void {
    this._ServicesCaregiverService.findAll().subscribe(r => this.caregiverServices = r);
  }

  ngOnDestroy() {
    this.caregiverServices.unsubscribe();
  }

}
