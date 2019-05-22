import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-provider',
  templateUrl: './home-provider.component.html',
  styleUrls: ['./home-provider.component.scss']
})
export class HomeProviderComponent implements OnInit {

  constructor() { }

  profile: String;
  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('loggedUser'));
  }

}
