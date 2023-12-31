import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TutorRegistrationComponent } from './tutor/tutor-registration/tutor-registration.component';
import { AuthActivate } from './core/guards/auth.activate';
import { TutorListComponent } from './tutor/tutor-list/tutor-list.component';
import { TutorSingleCardComponent } from './tutor/tutor-single-card/tutor-single-card.component';
import { TutorProfileComponent } from './tutor/tutor-profile/tutor-profile.component';
import { RegisterActivate } from './core/guards/register.activate';
import { LoggedActivate } from './core/guards/logged.activate';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoggedActivate]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [LoggedActivate]
  },
  {
    path: 'registration',
    component: TutorRegistrationComponent,
    canActivate: [AuthActivate, RegisterActivate]
  },
  {
    path: 'tutors',
    component: TutorListComponent
  },

  {
    path: 'tutors/:tutorId',
    component: TutorSingleCardComponent,
  
  },
  {
    path: 'tutor-profile',
    component: TutorProfileComponent,
    canActivate: [AuthActivate]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
