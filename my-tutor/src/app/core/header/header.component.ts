import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TutorService } from 'src/app/tutor/tutor.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userService: UserService, private router: Router, private tutorService: TutorService) { }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get isTutor(): boolean  {
    return this.tutorService.isTutor || this.userService.isTutor;
  }
  
  get username(): any {
    // this.tutorService.tutorUsername || this.userService.userName
    //return this.userService.user?.username
    
    return this.userService.userName || this.userService.user?.username;
  }

  logout(){
    this.userService.logOut();
    this.router.navigate(['/'])
  }

  // loadTutorProfile(){
  //   const userId = this.userService.user?.objectId;
  //   this.tutorService.getTutorWithUserId(userId!)
  //   .subscribe((tutor) => console.log(tutor)
  //   )
  
  // }

}
