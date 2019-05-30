import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecommendationService } from 'src/app/services/recommendation.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-utilities-div',
  templateUrl: './utilities-div.component.html',
  styleUrls: ['./utilities-div.component.scss']
})
export class UtilitiesDivComponent implements OnInit {

  constructor(private _RecommendationService: RecommendationService, private _ActivatedRoute: ActivatedRoute) { }

  private user: any;
  private category: any;

  @Output() recServices = new EventEmitter<any>();

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('loggedUser'));
    this._ActivatedRoute.params.subscribe((params: Params) => { this.category = params['category'] });
  }

  getRecommendations() {
    this._RecommendationService.getRecommendations(this.user['email'], this.category).subscribe(r => {
      this.recServices.emit(r);
      console.log(r)
    })
  }


}
