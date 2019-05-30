import { Component, OnInit } from '@angular/core';
import { ProposesService } from 'src/app/services/proposes.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-view-proposes',
  templateUrl: './view-proposes.component.html',
  styleUrls: ['./view-proposes.component.scss']
})
export class ViewProposesComponent implements OnInit {

  constructor(private _ProposesService: ProposesService, private _ServicesService: ServicesService) { }



  proposes;
  proposeInfo;
  createService;
  emptyProposes;
  varShowCreate;
  service;

  update = false;

  ngOnInit() {
    this.verifyIfProviderHasAService();
  }

  getByReceiver() {
    let receiverEmail = JSON.parse(localStorage.getItem('loggedUser'));

    this._ProposesService.getProposeByReceiver(receiverEmail['email']).subscribe(r => { this.proposes = r; console.log(r)});
  }

  collectInfoAboutPropose(propose) {
    this.proposeInfo = propose;
    console.log(propose)
  }

  updateService(){
    this.update = true;
  }

  verifyIfProviderHasAService() {
    let providerName = JSON.parse(localStorage.getItem('loggedUser'));
    this._ServicesService.findByProviderName(providerName.email).subscribe(r => {


      let exists = r as Array<any>;
      if (exists.length === 0) {
        console.log("/*** DENTRO DO MÉTODO ******/")
        this.createService = true;
        this.emptyProposes = false;
        this.varShowCreate = false;
      }
      else {
        this.service = r;
        this._ProposesService.getProposeByReceiver(providerName.email).subscribe(r => {
          let exists = r as Array<any>;
          if (exists.length === 0) {
            this.emptyProposes = true;
            this.createService = false;
          }
          else {
            this.emptyProposes = false;
            this.createService = false;
            this.getByReceiver();
          }
        })
      }


    })


  }

  showCreate() {
    this.varShowCreate = true;
  }

  receiveMessage($event) {
    if ($event === 'created') {
      this.varShowCreate = false;
      this.emptyProposes = true;
      this.createService = false;
    }
    else if ($event === 'update') {
      this.verifyIfProviderHasAService();
    }
  }

}
