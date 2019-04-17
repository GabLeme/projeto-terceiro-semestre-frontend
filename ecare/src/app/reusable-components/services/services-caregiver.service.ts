import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesCaregiverService {

  constructor(private _HttpClient: HttpClient) { }

  private endopointApiLocalHost = environment.endpointLocal;

  findAll(): Observable<any> {
    return this._HttpClient.get(`${this.endopointApiLocalHost}/caregiverServices/`);
  }
}
