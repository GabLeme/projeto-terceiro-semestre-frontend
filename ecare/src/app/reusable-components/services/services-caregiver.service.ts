import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CaregiverService } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServicesCaregiverService {

  constructor(private _HttpClient: HttpClient) { }

  getCaregiverServices(): Observable<any> {
    return this._HttpClient.get('http://reembolso.digisystem.com.br:3001/api/assinaturaHistorico');
  }
}
