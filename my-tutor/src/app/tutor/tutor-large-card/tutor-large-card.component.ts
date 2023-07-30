import { Component, Input } from '@angular/core';
import { Tutor } from 'src/types/tutor-model';

@Component({
  selector: 'app-tutor-large-card',
  templateUrl: './tutor-large-card.component.html',
  styleUrls: ['./tutor-large-card.component.css']
})
export class TutorLargeCardComponent {

  isLoading = true;

  @Input('tutor') tutor!: Tutor


}
