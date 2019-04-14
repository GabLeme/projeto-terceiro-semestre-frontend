import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesCaregiverService {

  constructor(private _HttpClient: HttpClient) { }

  getCaregiverServices(): Observable<any> {
    return this._HttpClient.get('https://randomuser.me/api');
  }
}
