import { Component, OnInit } from '@angular/core';
import { TutorService } from '../tutor.service';
import { ActivatedRoute } from '@angular/router';
import { Tutor } from 'src/types/tutor-model';

@Component({
  selector: 'app-tutor-single-card',
  templateUrl: './tutor-single-card.component.html',
  styleUrls: ['./tutor-single-card.component.css']
})
export class TutorSingleCardComponent implements OnInit {

  tutor: Tutor | undefined;
  isLoading = true;

  constructor(private tutorService: TutorService, private activatedRoute: ActivatedRoute){ }


  ngOnInit(): void {
    this.fetchTutor();  
  }

  fetchTutor(): void{
    const id = this.activatedRoute.snapshot.params['tutorId'];

    this.tutorService.getSingleTutor(id).subscribe((tutor) => {
      this.tutor = tutor;
      this.isLoading = false;
    })
  }
}
