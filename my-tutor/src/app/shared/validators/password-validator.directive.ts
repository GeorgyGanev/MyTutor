import { Directive } from '@angular/core';
import { AbstractControl,  FormGroup,  NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function validatePassword(): ValidatorFn {
    
  return (control: AbstractControl) => {
      let isValid = false;
      
      if(control && control instanceof FormGroup){
          let group = control as FormGroup;

          if (group.controls['passwordInput'] && group.controls['rePasswordInput']){
              isValid = group.controls['passwordInput'].value == group.controls['rePasswordInput'].value;
          }
      }
      if (isValid) {
          return null;
      } else {
          return {'passwordMatchError': 'failed'}
      }
  }

}


@Directive({
  selector: '[appPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidatorDirective,
      multi: true
    }
  ]
})
export class PasswordValidatorDirective implements Validator{

  private validator;

  constructor(){ 
    this.validator = validatePassword();
  }

  validate(control: AbstractControl): ValidationErrors | null {

    return this.validator(control)
    
  }

}
