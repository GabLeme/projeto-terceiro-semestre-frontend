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
  consumer = true;
  ngOnInit() {
    let a = JSON.parse(localStorage.getItem('loggedUser'));
    if (localStorage.getItem('typeUser') === "provider") this.consumer = false;
    this.consumerName = a['firstName'];
  }

}
