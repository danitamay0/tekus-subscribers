import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReqResSubscribers } from '../interfaces/reqResSubscribers';
import { ICreateSubscriber } from '../interfaces/createSubscriber';

@Injectable({
    providedIn: 'root'
})
export class SubscribersApiService {
    constructor(private _http: HttpClient) {
    }
    loadSubscribers(params = {}) {
        return this._http.get<ReqResSubscribers>(`/api/subscribers`, { params });
    }

    removeSubscribers(id: string) {
        return this._http.delete<any>(`/api/subscribers/${id}`);
    }

    insertSubscribers(subscriber: ICreateSubscriber) {
        return this._http.post<any>(`/api/subscribers`, { Subscribers: [subscriber] });
    }
}