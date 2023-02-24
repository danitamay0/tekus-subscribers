import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SwalService } from '@tekus-subscribers/shared-components';
import { debounceTime, distinctUntilChanged, map, Observable, startWith, switchMap, pipe } from 'rxjs';
import { Country } from '../../interfaces/reqResSubscribers';
import { ContryService } from '../../services/contry.service';
import { createSubscriber, createSubscriberUnset } from '../../store/actions/create-subscription.actions';
import { IdentityValidator } from '../../validators/create-subscriber.validator';

@Component({
  selector: 'tekus-subscribers-form-create-subscriber',
  templateUrl: './form-create-subscriber.component.html',
  styles: [],
})
export class FormCreateSubscriberComponent {
  form: FormGroup
  filteredOptions: Country[] = []

  constructor(
    private _fb: FormBuilder, private store: Store,
    private _swal: SwalService, private _contry: ContryService) {

    this.store.dispatch(createSubscriberUnset())

    this.form = this._fb.group({
      Name: ["", Validators.required],
      Email: ["", Validators.email],
      CountryCode: [],
      PhoneNumber: [],
      JobTitle: [],
      Area: [],
      Topics: [[]],

    }, { validators: IdentityValidator })

    this.form.get('CountryCode')!.valueChanges
      .pipe(
        startWith(''),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(val => {
          return this.filter(val || '')
        })
      ).subscribe();
  }

  filter(val: string): Observable<any[]> {
    return this._contry.getData(val)
      .pipe(
        map((response: Country[]) => {
          this.filteredOptions = response
          return []
        })
      )
  }

  save() {
    this._swal.show({
      icon: 'question',
      title: '¡Antención!',
      text: `Se dispone a guardar un suscriptor`,
      showCancel: true
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        this.store.dispatch(createSubscriber({ data: this.form.value }))
      }
    })

  }


  get nameInvalid() {
    const controlName = this.form.get('Name')
    return controlName?.touched && controlName.errors
  }
  get emailInvalid() {
    const controlName = this.form.get('Email')
    return controlName?.touched && controlName.errors
  }

  get identityInvalid() {

    return this.form.errors?.['identityFailed'] && (this.form.touched)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
