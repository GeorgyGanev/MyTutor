import { Attribute, Directive } from '@angular/core';
import { Form, FormControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: PasswordValidatorDirective,
      multi: true
    }
  ]
})
export class PasswordValidatorDirective implements Validator{

  constructor(@Attribute('appPasswordValidator') public passwordControl: string) { }


  validate (c: FormControl) {
    
    const password = c.root.get(this.passwordControl);
    const confirmPassword = c.value;

    if (confirmPassword.value === null){
      return null;
    }

    if (password){
      const subscription: Subscription = password.valueChanges.subscribe(() => {
        confirmPassword.updateValueAndValidity();
        subscription.unsubscribe();
      })
    };

  return password && password.value !== confirmPassword.value ? {passwordMatchError: true} : null;
  }

}
