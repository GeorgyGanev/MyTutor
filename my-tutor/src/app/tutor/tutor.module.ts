import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorShortCardComponent } from './tutor-short-card/tutor-short-card.component';
import { TutorRegistrationComponent } from './tutor-registration/tutor-registration.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TutorShortCardComponent,
    TutorRegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TutorShortCardComponent
  ]
})
export class TutorModule { }
