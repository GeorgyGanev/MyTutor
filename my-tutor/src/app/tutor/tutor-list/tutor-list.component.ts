import { Component, OnDestroy, OnInit } from '@angular/core';
import { TutorService } from '../tutor.service';
import { Tutor } from 'src/types/tutor-model';

@Component({
  selector: 'app-tutor-list',
  templateUrl: './tutor-list.component.html',
  styleUrls: ['./tutor-list.component.css']
})
export class TutorListComponent implements OnInit, OnDestroy {

  constructor(private tutorService: TutorService) { }

  tutorList: Tutor[] = [];
  isLoading = true;

  ngOnInit(): void {
  this.tutorService.getTutors().subscribe((response: any) => {
    
      this.tutorList = response.results;
      this.isLoading = false;
    })  
  }

  ngOnDestroy(): void {
    
  }

}
