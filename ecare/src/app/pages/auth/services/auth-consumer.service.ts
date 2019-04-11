import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthConsumerService {

  constructor(private _Http: HttpClient) { }


  doLogin(payload){
    return this._Http.get("");
  }
}
