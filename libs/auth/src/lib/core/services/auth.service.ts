import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs';
import { AuthApiService } from '../api/auth.api';
import { Apps } from '../enum/apps-enum';
import { ILogin } from '../interfaces/ILogin';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private _authApi: AuthApiService, private cookieService: CookieService) { }


    logIn(data: ILogin) {
        return this._authApi.logIn(data).pipe(map((r): { logged: Boolean } => {

            let logged = false
            if (r.Token) {
                this.cookieService.set('token', r.Token);
                logged = true
            }
            return { logged }
        }))
    }

    logOut() {
        this.cookieService.delete('token');
    }

    isLoggedIn() {
        return this.cookieService.get('token') ? true : false
    }

    getApps() {
        return Apps
    }
}