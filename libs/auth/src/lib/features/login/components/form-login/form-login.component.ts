import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TypeFetching } from 'libs/auth/src/lib/core/interfaces/IFetching';
import { AuthService } from 'libs/auth/src/lib/core/services/auth.service';

@Component({
  selector: 'tekus-subscribers-form-login',
  templateUrl: './form-login.component.html',
})
export class FormLoginComponent {
  form: FormGroup
  fetching: TypeFetching = 'iddle'
  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private router: Router
  ) {
    this.form = this._fb.group({
      UserName: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    })
  }

  logIng() {

    this.fetching = 'pending'

    this._auth.logIn(this.form.value).subscribe(r => {
      if (r.logged == false) {
        this.fetching = 'rejected'
        return
      }
      this.fetching = 'succeded'
      this.router.navigate(['/'])
    }, err => {
      this.fetching = 'rejected'
    })
  }
}
