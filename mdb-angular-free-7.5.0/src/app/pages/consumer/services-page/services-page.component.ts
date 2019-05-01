import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {

  constructor(private _ActivatedRoute: ActivatedRoute, private _Router: Router) {
    this._Router.routeReuseStrategy.shouldReuseRoute = () => false; 
  }

  category: String;

  ngOnInit() {
    this._ActivatedRoute.params.subscribe((params: Params) => { this.category = params['category'] });
  }



}
