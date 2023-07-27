import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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

    let subjectsArr = form.value.subjects.split(', ');
    
    let pointerId: any = this.userService.user?.objectId;
    
    let pointerField: UserPointer = {
      __type: 'Pointer',
      className: '_User',
      objectId: pointerId,
    }
  
    let tutorData = {...form.value, subjects: subjectsArr}  
  
    this.tutorService.registerTutor(tutorData, pointerField).subscribe(() => {
      
      this.router.navigate(['/'])
    });
     

  }
}
