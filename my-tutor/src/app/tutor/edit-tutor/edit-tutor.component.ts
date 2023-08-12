import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Tutor } from 'src/types/tutor-model';
import { TutorService } from '../tutor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-tutor',
  templateUrl: './edit-tutor.component.html',
  styleUrls: ['./edit-tutor.component.css']
})
export class EditTutorComponent implements OnInit {

  @Input('tutor') tutor: Tutor | undefined;
  @Output() resetEdit: EventEmitter<any> = new EventEmitter()
  

  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    imageUrl: ['', Validators.required],
    age: [0, Validators.required],
    subjects: ['', Validators.required],
    price: [0, Validators.required],
    educationLevel: ['', Validators.required],
    about: ['', Validators.required],
    tel: ['', Validators.required]
  })
  
  constructor(private fb: FormBuilder, private tutorService: TutorService, private router: Router) { }

  ngOnInit(): void {

    const { firstName, lastName, imageUrl, age, subjects, price, educationLevel, about, tel} = this.tutor!
    
    this.form.setValue({
      firstName, 
      lastName,
      imageUrl, 
       age: age, 
       subjects: subjects.join(', '), 
       price: price,
       educationLevel,
       about,
       tel
    })
  }

  saveProfileHandler(){
    if (this.form.invalid){
      return;
    }
    let tutorId = this.tutor?.objectId;
    let subjectsArr = this.form.value.subjects?.split(', ');
    let tutorData: any = {...this.form.value, subjects: subjectsArr};

    this.tutorService.updateTutorProfile(tutorId!, tutorData)
      .subscribe(() => {
    
        this.router.navigate(['/'])

      })
  }

  resetForm(){
    this.resetEdit.emit()
  }

}
