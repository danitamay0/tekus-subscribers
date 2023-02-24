import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReqResSubscribers } from '../interfaces/reqResSubscribers';

@Injectable({
    providedIn: 'root' 
})
export class SubscribersApiService {
    constructor(private _http: HttpClient) {
    }
    loadSubscribers(params = {}) {
        return this._http.get<ReqResSubscribers>(`/api/subscribers`, { params });
    }
}