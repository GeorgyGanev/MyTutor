import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class EmailValidatorDirective implements Validator, OnChanges {

  @Input() appEmailValidator: string = '';
  
  validator: ValidatorFn;

  constructor() {
    this.validator = emailValidator();
   }

  validate(control: FormControl) {
    return this.validator(control);
  }
 
  ngOnChanges(changes: SimpleChanges): void {
    const currentEmailChanges = changes['appEmailValidator'];
    if(currentEmailChanges){
      this.validator = emailValidator()
    }
  }

}
