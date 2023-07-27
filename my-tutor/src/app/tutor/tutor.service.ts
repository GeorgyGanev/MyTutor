import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Tutor } from 'src/types/tutor-model';
import { UserPointer } from 'src/types/user-pointer';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  constructor(private http: HttpClient) { }

  registerTutor(tutorData: Tutor, id: UserPointer){
  
    return this.http.post<Tutor>('/api/classes/tutor', {...tutorData, userId: id } )
    
  }


  getTutors(){
    return this.http.get<Tutor[]>('/api/classes/tutor')
  }
}
