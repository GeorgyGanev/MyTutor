import { Component, OnInit } from '@angular/core';
import { TutorService } from '../tutor/tutor.service';
import { Tutor } from 'src/types/tutor-model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tutorService: TutorService) { }

  tutors: Tutor[] = [];

  ngOnInit(): void {
      this.tutorService.getLastTutors(3).subscribe((response: any) => {
        this.tutors = response.results;
      })    
  }

}
