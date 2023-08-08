import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {

  @Input() isOwner!: boolean;
  comments: any = [];
  noComments: boolean = false;
  isLoading: boolean = true;
  
  constructor(private commentService: CommentService, private ar: ActivatedRoute) { }
 
  ngOnInit(): void {

    const id = this.ar.snapshot.params['tutorId'];
    this.commentService.getTutorComments(id)
      .subscribe((response: any) => {
        
        if (response.results.length === 0){
          this.noComments = true;
          this.isLoading = false;
        } else {
          this.comments = response.results;
          this.isLoading = false;
        }  
      })
  }
  
  addComment(obj: any) {
    this.comments.push(obj);  
  }
}
