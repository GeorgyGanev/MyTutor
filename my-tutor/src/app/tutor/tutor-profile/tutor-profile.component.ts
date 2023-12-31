import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { TutorService } from '../tutor.service';
import { Tutor } from 'src/types/tutor-model';

@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.css']
})
export class TutorProfileComponent implements OnInit {

  constructor(private userService: UserService, private tutorService: TutorService) { }

  tutor: Tutor | undefined
  notRegistered: boolean = false;
  isLoading: boolean = true;
  userId: string | undefined
  editMode: boolean = false;

  ngOnInit(): void {
  
    this.userId = this.userService.user?.objectId

    if (this.userId === undefined) {
      let ls = localStorage.getItem('[user]') || '';
      let id = JSON.parse(ls).objectId;
      this.userId = id;
    }
    
    this.tutorService.getTutorWithUserId(this.userId!)
      .subscribe((tutor: any) => {
        this.isLoading = false;
        this.tutor = tutor.results[0];

        if (this.tutor === undefined) {
          this.notRegistered = true;
        }
      })
  }

  editProfile(){
    this.editMode = true;
  }

  resetEdit(){
    this.editMode = false;
  }

}
