import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorShortCardComponent } from './tutor-short-card/tutor-short-card.component';



@NgModule({
  declarations: [
    TutorShortCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TutorShortCardComponent
  ]
})
export class TutorModule { }
