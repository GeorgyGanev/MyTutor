import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorShortCardComponent } from './tutor-short-card/tutor-short-card.component';
import { TutorRegistrationComponent } from './tutor-registration/tutor-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TutorListComponent } from './tutor-list/tutor-list.component';
import { TutorLargeCardComponent } from './tutor-large-card/tutor-large-card.component';
import { SharedModule } from '../shared/shared.module';
import { TutorSingleCardComponent } from './tutor-single-card/tutor-single-card.component';
import { RouterModule } from '@angular/router';
import { TutorProfileComponent } from './tutor-profile/tutor-profile.component';
import { EditTutorComponent } from './edit-tutor/edit-tutor.component';
import { CommentModule } from '../comment/comment.module';



@NgModule({
  declarations: [
    TutorShortCardComponent,
    TutorRegistrationComponent,
    TutorListComponent,
    TutorLargeCardComponent,
    TutorSingleCardComponent,
    TutorProfileComponent,
    EditTutorComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    CommentModule
  ],
  exports: [
    TutorShortCardComponent,
    TutorRegistrationComponent
  ]
})
export class TutorModule { }
