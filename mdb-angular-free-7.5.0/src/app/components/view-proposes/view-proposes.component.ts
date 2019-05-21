import { Component, OnInit } from '@angular/core';
import { ProposesService } from 'src/app/services/proposes.service';

@Component({
  selector: 'app-view-proposes',
  templateUrl: './view-proposes.component.html',
  styleUrls: ['./view-proposes.component.scss']
})
export class ViewProposesComponent implements OnInit {

  constructor(private _ProposesService: ProposesService) { }

  proposes;
  proposeInfo;

  ngOnInit() {
    this.getByReceiver();
  }

  getByReceiver() {
    let receiverEmail = JSON.parse(localStorage.getItem('loggedUser'));

    this._ProposesService.getProposeByReceiver(receiverEmail['email']).subscribe(r => {this.proposes = r; console.log(r)});
  }

  collectInfoAboutPropose(propose){
    this.proposeInfo = propose;
    console.log(propose)
  }
}
