import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-filter-div',
  templateUrl: './filter-div.component.html',
  styleUrls: ['./filter-div.component.scss']
})
export class FilterDivComponent implements OnInit {

  @Input() category = ``;
  @Output() messageEvent = new EventEmitter<any>();
  inputPrice: number;
  services_filter: any;

  constructor(private _ServicesService: ServicesService) { }

  ngOnInit() {
    this.inputPrice = 500;
  }

  getValueFromSlider() {
    const priceInput = (<HTMLInputElement>document.getElementById('buscaPorPreco')).value;
    this.inputPrice = parseFloat(priceInput);
  }

  searchByFilter() {
    this._ServicesService.filterByValue(this.inputPrice, this.category).subscribe(r => this.sendServices(r));
  }

  sendServices(message) {
    this.messageEvent.emit(message);
  }

  }
