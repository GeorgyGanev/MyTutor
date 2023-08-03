import { Component } from '@angular/core';
import { Tutor } from 'src/types/tutor-model';

@Component({
  selector: 'app-edit-tutor',
  templateUrl: './edit-tutor.component.html',
  styleUrls: ['./edit-tutor.component.css']
})
export class EditTutorComponent {

  tutor: Tutor | undefined;
}
