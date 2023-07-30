
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

import { IUser } from 'src/types/user';
import { User } from 'src/types/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user$$ = new BehaviorSubject<IUser | User | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: IUser | User | undefined;

  get isLogged(): boolean{
    return !!this.user;
  } 

  get isTutor(): boolean {
    return this.user?.isTutor!
  }

  set isTutor(value: boolean) {
    this.user!.isTutor = true;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) { 
    this.subscription = this.user$.subscribe((user) => {
      
      this.user = user;
    })
  }

  register(
    username: string,
    email: string,
    password: string
  ){
     return this.http.post<IUser>('/api/users', {
      email,
      password,
      username
    })
    .pipe(tap((user) => {
        this.user$$.next(user);
      }));
  }

  login(email: string, password: string){
    return this.http.get<IUser>(`/api/login?email=${email}&password=${password}`)
    .pipe(tap((user) => {
      this.user$$.next(user);      
    }))
  }

  autoLogin(){
    const userData =  localStorage.getItem('[user]');
    if (!userData) {
      return;
    }

    const data = JSON.parse(userData);
    const loggedUser = new User(data.email, data.username, data.isTutor, data.objectId, data.sessionToken);

    //this.user = loggedUser;

    this.user$$.next(loggedUser);
  }

  logOut(){
    localStorage.removeItem('[user]');
    this.user$$.next(undefined);
    //this.user = undefined;
  }

  editUser(data: any, userId: string, sessionToken: string){
    const headers = new HttpHeaders()
    .set('X-Parse-Application-Id', '7AUaYdnFkPeD75hcEXwcR6ZrFaNXuTUe86He20Cy')
    .set('X-Parse-REST-API-Key', 'gn2DLKfXS5boKxcaINy7O4yo307Y4DWYJgedbQIY')
    .set('Content-Type', 'application/json')
    .set('X-Parse-Session-Token', sessionToken)
    return this.http.put<IUser>(`https://parseapi.back4app.com/users/${userId}`, data, {headers})
    .pipe(tap((user) => {
      this.user$$.next(user);
    }))
  }

  updateTutorUser(){
    
  }

}
