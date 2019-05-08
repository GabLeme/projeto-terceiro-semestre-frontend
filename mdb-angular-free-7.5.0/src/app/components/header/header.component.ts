import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  //Só para aparecer no menu
  consumerName;
  ngOnInit() {
    let a = JSON.parse(localStorage.getItem('loggedUser'));
    this.consumerName = a['firstName'];
  }

}
