import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private dataSource = new BehaviorSubject<User>(new User());
    data = this.dataSource.asObservable();

    constructor() { }

    updatedUser(data: User) {
        this.dataSource.next(data);
    }

}