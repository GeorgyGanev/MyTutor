import { Component, Input } from '@angular/core';
import { Tutor } from 'src/types/tutor-model';

@Component({
  selector: 'app-tutor-short-card',
  templateUrl: './tutor-short-card.component.html',
  styleUrls: ['./tutor-short-card.component.css']
})
export class TutorShortCardComponent {

@Input('tutor') tutor: Tutor | undefined;
  
}
