import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs';
import { AuthApiService } from '../api/auth.api';
import { Apps } from '../enum/apps-enum';
import { ILogin } from '../interfaces/ILogin';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private _authApi: AuthApiService,
        private cookieService: CookieService,
        private router: Router,
        private user: UserService
    ) { }


    logIn(data: ILogin) {
        return this._authApi.logIn(data).pipe(map((r): { logged: Boolean } => {
            let logged = false
            if (r.Token) {
                localStorage.setItem('token', r.Token)
                logged = true
                this.user.updatedUser(new User(r.FirstName, r.LastName, r.Token))
            }
            return { logged }
        }))
    }

    logOut() {
        localStorage.removeItem('token');
        this.router.navigate(['/auth/login'])
    }

    isLoggedIn() {
        return localStorage.getItem('token') ? true : false
    }

    getApps() {
        return Apps
    }

    getToken() {
        return localStorage.getItem('token') || '';
    }
}