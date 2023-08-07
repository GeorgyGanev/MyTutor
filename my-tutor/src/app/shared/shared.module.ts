import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { SlicePipe } from './pipes/slice.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    EmailValidatorDirective,
    SlicePipe,
    ElapsedTimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    EmailValidatorDirective,
    SlicePipe,
    ElapsedTimePipe
  ]
})
export class SharedModule { }
