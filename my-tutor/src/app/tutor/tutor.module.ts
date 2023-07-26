import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorShortCardComponent } from './tutor-short-card/tutor-short-card.component';
import { TutorRegistrationComponent } from './tutor-registration/tutor-registration.component';



@NgModule({
  declarations: [
    TutorShortCardComponent,
    TutorRegistrationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TutorShortCardComponent
  ]
})
export class TutorModule { }
