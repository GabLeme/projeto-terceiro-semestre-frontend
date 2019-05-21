import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    constructor(private _HttpClient: HttpClient) { }

    private endopointApiLocalHost = environment.microservicos.email;

    private httpOptions: any = {
        headers: new HttpHeaders({
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
        })

    };

    sendProposeEmailToProvider(payload: any) {
        return this._HttpClient.post(`${this.endopointApiLocalHost}`, payload, this.httpOptions);
    }
}
