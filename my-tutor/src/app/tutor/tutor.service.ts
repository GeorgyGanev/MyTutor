import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Tutor } from 'src/types/tutor-model';
import { UserPointer } from 'src/types/user-pointer';

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  
  tutor: Tutor | undefined;
  isTutor: boolean = false;
  tutorUsername: string = '';

  constructor(private http: HttpClient) { }

  registerTutor(tutorData: Tutor, id: UserPointer){
    return this.http.post<Tutor>('/api/classes/tutor', {...tutorData, userId: id } )
  }

  getTutors(){
    return this.http.get<Tutor[]>('/api/classes/tutor?order=-createdAt')
  }

  getLastTutors(limit: number){
    return this.http.get<Tutor[]>(`/api/classes/tutor?limit=${limit}&order=-createdAt`)
  }

  getSingleTutor(userId: string){
    return this.http.get<Tutor>(`/api/classes/tutor/${userId}`)
  }

  //added
  getTutorWithUserId(id: string){ 
    return this.http.get<Tutor>(`/api/classes/tutor?where={\"userId\":{ \"__type\": \"Pointer\", \"className\": \"_User\", \"objectId\": \"${id}\" }}`)
  }

  updateTutorProfile(tutorId: string, data: Tutor){
    return this.http.put<Tutor>(`/api/classes/tutor/${tutorId}`, data)
  }

  isUserUpdated(){
   this.isTutor = true;
  }

  setTutorUsername(name: string){
    this.tutorUsername = name;
  }

 
}
