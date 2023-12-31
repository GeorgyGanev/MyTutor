import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

import { UserService } from 'src/app/user/user.service';
import { TutorService } from '../tutor.service';

import { UserPointer } from 'src/types/user-pointer';


@Component({
  selector: 'app-tutor-registration',
  templateUrl: './tutor-registration.component.html',
  styleUrls: ['./tutor-registration.component.css']
})
export class TutorRegistrationComponent {

  constructor(private userService: UserService, private router: Router, private tutorService: TutorService) { }

  registerTutor(form: NgForm){

    if (form.invalid){
      return;
    }

    let subjectsArr = form.value.subjects.split(', ');
    let pointerId: any = this.userService.user?.objectId;

    const user: any = this.userService.user;
    const sessionToken = user.sessionToken;

    let pointerField: UserPointer = {
      __type: 'Pointer',
      className: '_User',
      objectId: pointerId,
    }
  
    let tutorData = {...form.value, subjects: subjectsArr}  
    let name = tutorData.firstName;

    const regTutor = this.tutorService.registerTutor(tutorData, pointerField);
    const userUpdate = this.userService.editUser({isTutor: true}, pointerId, sessionToken);

    forkJoin({regTutor, userUpdate})
      .subscribe(() => {
        this.tutorService.isUserUpdated();
        this.userService.updateLocalStorage();
        this.tutorService.setTutorUsername(name)
        
        this.router.navigate(['/'])
      })
    
  }
}
