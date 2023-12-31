import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { TutorService } from '../tutor.service';
import { Tutor } from 'src/types/tutor-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tutor-list',
  templateUrl: './tutor-list.component.html',
  styleUrls: ['./tutor-list.component.css']
})
export class TutorListComponent implements OnInit, OnDestroy {

  constructor(private tutorService: TutorService) { }

  private subscription!: Subscription

  tutorList: Tutor[] = [];
  isLoading = true;
  filterInput: string = '';
  filterList: Tutor[] = [];
  
  ngOnInit(): void {
    
  this.subscription = this.tutorService.getTutors().subscribe((response: any) => {

        this.tutorList = response.results;
        this.filterList = this.tutorList;
        this.isLoading = false;
      
    })  
  }

  filter(){
    let value = this.filterInput.charAt(0).toUpperCase() + this.filterInput.toLowerCase().slice(1);
    this.filterList = this.tutorList.filter((tutor) => tutor.subjects.includes(value));  
    
    }

  reset (){    
    this.filterList = this.tutorList; 
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
