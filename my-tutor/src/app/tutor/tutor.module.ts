import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorShortCardComponent } from './tutor-short-card/tutor-short-card.component';
import { TutorRegistrationComponent } from './tutor-registration/tutor-registration.component';
import { FormsModule } from '@angular/forms';
import { TutorListComponent } from './tutor-list/tutor-list.component';
import { TutorLargeCardComponent } from './tutor-large-card/tutor-large-card.component';



@NgModule({
  declarations: [
    TutorShortCardComponent,
    TutorRegistrationComponent,
    TutorListComponent,
    TutorLargeCardComponent
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
