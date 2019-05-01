import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

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

    makeLoginOfConsumer(email: String, password: String) {
        return this._HttpClient.post(`${this.endopointApiLocalHost}/consumers/login?email=${email}&password=${password}`, null, this.httpOptions);
    }

    makeLoginOfProvider(email: String, password: String) {
        return this._HttpClient.post(`${this.endopointApiLocalHost}/providers/login?email=${email}&password=${password}`, null, this.httpOptions);
    }

    saveConsumer(payload: any) {
        return this._HttpClient.post(`${this.endopointApiLocalHost}/consumers/`, payload, this.httpOptions);
    }

    saveProvider(payload: any) {
        return this._HttpClient.post(`${this.endopointApiLocalHost}/providers/`, payload, this.httpOptions);
    }
}
