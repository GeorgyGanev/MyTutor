import { Component, Input } from '@angular/core';
import { Tutor } from 'src/types/tutor-model';
import { TutorService } from '../tutor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor-short-card',
  templateUrl: './tutor-short-card.component.html',
  styleUrls: ['./tutor-short-card.component.css']
})
export class TutorShortCardComponent {

@Input('tutor') tutor: Tutor | undefined;

constructor(private tutorService: TutorService, private router: Router){ }

submitCard(objectId: any){
 
  //console.log(objectId);
  // this.tutorService.getSingleTutor(objectId).subscribe((user) => {
  //   console.log(user);
  //});

  this.router.navigate([`tutors/${objectId}`])
  
}
  
}
