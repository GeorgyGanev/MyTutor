import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';
import { emailValidator } from './email-validator';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: EmailValidatorDirective,
      multi: true
    }
  ]
})
export class EmailValidatorDirective implements Validator {

  validator: ValidatorFn;

  constructor() {
    this.validator = emailValidator();
   }

  validate(control: FormControl) {
    return this.validator(control);
  }
 
  // emailValidator(): ValidatorFn {
  //   return (control) => {
  //     if (control.value !== '' && control.value != null){
  //       let isValid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(control.value);

  //       if (isValid){
  //         return null;
  //       } else {
  //         return {
  //           emailValidator: {valid: false}
  //         };
  //       }
  //     } else {
  //       return null;
  //     }
  //   };
  // }

}
