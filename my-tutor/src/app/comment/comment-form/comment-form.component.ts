import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorService } from 'src/app/tutor/tutor.service';
import { UserService } from 'src/app/user/user.service';
import { Comment } from 'src/types/comment-model';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {

  constructor(private router: Router, private userService: UserService, private tutorService: TutorService, private ar: ActivatedRoute, private commentService: CommentService) {}

  commentHandler(form: NgForm){

    const userId = this.userService.user?.objectId;
    const tutorId = this.ar.snapshot.params['tutorId'];
    const username = this.userService.user?.username;

    const commentObj = {
      username,
      comment: form.value.comment,
      ownerId: {__type: 'Pointer', className: '_User', objectId: userId },
      tutorId: {__type: 'Pointer', className: 'tutor', objectId: tutorId }
    }

    this.commentService.addComment(commentObj).subscribe((res) => {
     
      form.reset();
      this.router.navigate(['/tutors'])

    }
    );


  }
}
