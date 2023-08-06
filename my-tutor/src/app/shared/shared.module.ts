import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { SlicePipe } from './pipes/slice.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    EmailValidatorDirective,
    SlicePipe

  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    EmailValidatorDirective,
    SlicePipe
    
  ]
})
export class SharedModule { }
