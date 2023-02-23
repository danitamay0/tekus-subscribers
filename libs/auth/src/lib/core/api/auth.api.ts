import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin, ReqResLogin } from '../interfaces/ILogin';

@Injectable({
    providedIn: 'root' // ADDED providedIn root here.
})
export class AuthApiService {
    constructor(private http: HttpClient) {
    }
    logIn(data: ILogin) {
        return this.http.post<ReqResLogin>(`/api/account/login`, { ...data })
    }
}