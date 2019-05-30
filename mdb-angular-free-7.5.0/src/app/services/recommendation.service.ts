import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RecommendationService {

    constructor(private _HttpClient: HttpClient) { }

    private endopointApiLocalHost = environment.microservicos.recommendation;


    getRecommendations(senderEmail: string, category: string) {
        return this._HttpClient.get(this.endopointApiLocalHost + `/${senderEmail}/${category}`);
    }


}
