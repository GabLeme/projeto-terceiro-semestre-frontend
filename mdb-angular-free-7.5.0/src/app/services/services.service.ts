import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private _HttpClient: HttpClient) { }

  private endopointApiLocalHost = environment.endpointLocal;

  private httpOptions: any = {
    headers: new HttpHeaders({
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    })

  };

  findAll(): Observable<any> {
    return this._HttpClient.get(`${this.endopointApiLocalHost}/services/`);
  }

  findById(id: string) {
    return this._HttpClient.get(`${this.endopointApiLocalHost}/services/${id}`);
  }

  findByCategory(category: string): Observable<any> {
    return this._HttpClient.get(`${this.endopointApiLocalHost}/services?category=${category}`);
  }

  filterByValue(value: number, category: string) {
    return this._HttpClient.get(`${this.endopointApiLocalHost}/services/filter?value=${value}&category=${category}`);
  }

  findByProviderName(name: string) {
    return this._HttpClient.get(`${this.endopointApiLocalHost}/services/filter/list?providerName=${name}`);
  }

  createService(payload: any) {
    return this._HttpClient.post(`${this.endopointApiLocalHost}/services`, payload, this.httpOptions);
  }
}
