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
import { ErrorComponent } from './core/error/error.component';

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
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'registration',
    component: TutorRegistrationComponent,
    canActivate: [AuthActivate]
  },
  {
    path: 'tutors',
    loadChildren: () => import('./tutor/tutor.module').then((m) => m.TutorModule),
    component: TutorListComponent
  },

  {
    path: 'tutors/:tutorId',
    component: TutorSingleCardComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
