import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServicesCaregiverService } from './../services/services-caregiver.service';

@Component({
  selector: 'app-card-services-caregiver',
  templateUrl: './card-services-caregiver.component.html',
  styleUrls: ['./card-services-caregiver.component.scss']
})
export class CardServicesCaregiverComponent implements OnInit, OnDestroy {

  constructor(private _ServicesCaregiverService: ServicesCaregiverService) { }

  caregiverServices: any;

  ngOnInit() {
    this.getCaregiverServices(this.caregiverServices);
  }

  getCaregiverServices(variable): void {
    this._ServicesCaregiverService.getCaregiverServices().subscribe(r => variable = r);
  }

  ngOnDestroy() {
    this.caregiverServices.unsubscribe();
  }

}
