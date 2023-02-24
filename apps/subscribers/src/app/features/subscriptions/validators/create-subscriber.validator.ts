import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const IdentityValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const email = control.get('Email');
    const phoneNumber = control.get('PhoneNumber');
    const countryCode = control.get('CountryCode');

    

    return email?.value || (phoneNumber?.value && countryCode?.value) ? null : { identityFailed: true };
};