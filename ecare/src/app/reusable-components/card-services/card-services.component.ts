import { Component, OnInit, Input } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-services',
  templateUrl: './card-services.component.html',
  styleUrls: ['./card-services.component.scss']
})
export class CardServicesComponent implements OnInit {

  constructor(private _Services: ServicesService) { }

  @Input() category = ``;

  services: Subscription;

  ngOnInit() {
    if (this.category != '')
      this.getByCategory();
  }

  getAll(): void {
    this._Services.findAll().subscribe(r => this.services = r);
  }

  getByCategory() {
    this._Services.findByCategory(this.category).subscribe(r => {this.services = r; console.log(r)});
  }

  ngOnDestroy() {
    this.services.unsubscribe();
  }

}
