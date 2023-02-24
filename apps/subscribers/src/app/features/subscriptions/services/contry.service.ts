

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { map, Observable, tap } from 'rxjs';
import { ReqResCountry } from '../interfaces/reqResSubscribers';

@Injectable({
    providedIn: 'root'
})
export class ContryService {
    constructor(private http: HttpClient) {

    }

    getData(opts: string): Observable<any> {
        return this.http.get<ReqResCountry>('/api/countries', { params: { criteria: opts } })
            .pipe(map(data => data.Data))
    }

}