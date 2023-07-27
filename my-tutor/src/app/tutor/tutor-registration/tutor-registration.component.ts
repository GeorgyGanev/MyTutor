import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';
import { User } from 'src/types/user-model';

@Component({
  selector: 'app-tutor-registration',
  templateUrl: './tutor-registration.component.html',
  styleUrls: ['./tutor-registration.component.css']
})
export class TutorRegistrationComponent {

  constructor(private userService: UserService) { }

  registerTutor(form: NgForm){

    const userId = this.userService.user?.objectId;
    console.log(this.userService.user);
    
    console.log(form.value);
    

  }
}
