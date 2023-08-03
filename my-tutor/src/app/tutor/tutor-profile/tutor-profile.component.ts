import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { TutorService } from '../tutor.service';
import { Tutor } from 'src/types/tutor-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.css']
})
export class TutorProfileComponent implements OnInit {

  constructor(private userService: UserService, private tutorService: TutorService) { }

  userId = this.userService.user?.objectId;
  tutor: Tutor | undefined
  notRegistered: boolean = false;
  isLoading: boolean = true;


  ngOnInit(): void {
    this.tutorService.getTutorWithUserId(this.userId!)
      .subscribe((tutor: any) => {
        this.isLoading = false;
        this.tutor = tutor.results[0];

        if (this.tutor === undefined) {
          this.notRegistered = true;
        }
      })
  }

}
