import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TutorService } from 'src/app/tutor/tutor.service';
import { UserService } from 'src/app/user/user.service';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {

  @Output() comment: EventEmitter<any> = new EventEmitter();

  username: string = this.userService.user!.username || this.userService.username;
  commentObj: any;
  
  constructor( private userService: UserService, private tutorService: TutorService, private ar: ActivatedRoute, private commentService: CommentService) {}
  
  commentHandler(form: NgForm){

    if (form.invalid) {
      return;
    }

    if (form.value.comment.trim() === ''){
      return;
    }

    const userId = this.userService.user?.objectId;
    const tutorId = this.ar.snapshot.params['tutorId'];
  
    this.commentObj = {
      username: this.username,
      comment: form.value.comment,
      ownerId: {__type: 'Pointer', className: '_User', objectId: userId },
      tutorId: {__type: 'Pointer', className: 'tutor', objectId: tutorId }
    }

    this.commentService.addComment(this.commentObj).subscribe(() => {
      form.reset(); 
    }
    );
  }

  formHandler(e: any) {
    if (e.comment === '' || e.comment.trim() === ''){
      return
    }    
    const newComment = {
      ...e,
      username: this.username,
      createdAt: new Date()
    }
      this.comment.emit(newComment)
  }

}
