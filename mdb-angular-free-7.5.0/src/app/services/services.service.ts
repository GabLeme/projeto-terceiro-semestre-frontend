import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private _HttpClient: HttpClient) { }

  private endopointApiLocalHost = environment.endpointLocal;

  findAll(): Observable<any> {
    return this._HttpClient.get(`${this.endopointApiLocalHost}/services/`);
  }

  findById(id: string) {
    return this._HttpClient.get(`${this.endopointApiLocalHost}/services/${id}`);
  }

  findByCategory(category: string): Observable<any>{
    return this._HttpClient.get(`${this.endopointApiLocalHost}/services?category=${category}`);    
  }
}
