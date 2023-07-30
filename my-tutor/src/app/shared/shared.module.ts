import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { PasswordValidatorDirective } from './validators/password-validator.directive';

@NgModule({
  declarations: [
    LoaderComponent,
    EmailValidatorDirective,
    PasswordValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    EmailValidatorDirective,
    PasswordValidatorDirective
  ]
})
export class SharedModule { }
