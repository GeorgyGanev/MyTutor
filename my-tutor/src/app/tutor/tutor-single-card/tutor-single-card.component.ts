import { Component, OnInit } from '@angular/core';
import { TutorService } from '../tutor.service';
import { ActivatedRoute } from '@angular/router';
import { Tutor } from 'src/types/tutor-model';
import { UserService } from 'src/app/user/user.service';
import { CommentService } from 'src/app/comment/comment.service';

@Component({
  selector: 'app-tutor-single-card',
  templateUrl: './tutor-single-card.component.html',
  styleUrls: ['./tutor-single-card.component.css']
})
export class TutorSingleCardComponent implements OnInit {

  tutor: Tutor | undefined;
  isLoading = true;

  //Comments section
  showComments: boolean = false;
  isOwner: boolean = false;
  userId: string | undefined;
  
  constructor(private tutorService: TutorService, private activatedRoute: ActivatedRoute, private userService: UserService, private commentService: CommentService){ }

  ngOnInit(): void {
    this.fetchTutor();  
   
  }

  setUserId(id: string) {
    this.userId = id;
  }

  fetchTutor(): void{
    const id = this.activatedRoute.snapshot.params['tutorId'];

    this.tutorService.getSingleTutor(id).subscribe((tutor) => {
      this.tutor = tutor;

      this.setUserId(tutor.userId.objectId);
      
      this.isLoading = false;
    })

  }

  viewComments(): void{
   
    if (this.userId === this.userService.user?.objectId) {
      this.isOwner = true;
    }

    this.showComments = !this.showComments
    
  }

}
