import { Component, OnDestroy, OnInit } from '@angular/core';
import { TutorService } from '../tutor/tutor.service';
import { Tutor } from 'src/types/tutor-model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private tutorService: TutorService) { }

  private subscription!: Subscription;

  tutors: Tutor[] = [];
  isLoading = true;

  ngOnInit(): void {
      this.subscription = this.tutorService.getLastTutors(3).subscribe((response: any) => {
        this.tutors = response.results;
        this.isLoading = false;
      })    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
