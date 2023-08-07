import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from 'src/types/comment-model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  showCommentForm: boolean = false;

  constructor(private http: HttpClient) { }

  addComment(comment: any){
    return this.http.post<Comment>('/api/classes/Comment', comment);
  }

  getTutorComments(tutorId: string) {
    return this.http.get<Comment>(`/api/classes/Comment?where={\"tutorId\":{ \"__type\": \"Pointer\", \"className\": \"tutor\", \"objectId\": \"${tutorId}\" }}`)
  }

}
