
import { HttpClient } from '@angular/common/http';
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

  subscription: Subscription;

  constructor(private http: HttpClient) { 
    this.subscription = this.user$.subscribe((user) => {
      console.log(user);
      
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

  getUserProfile(userId: string){
    return this.http
    .get<IUser>(`/api/users/${userId}`)
    .pipe(tap((user) => {
      this.user$$.next(user)
    }))
  }

  autoLogin(){

    const userData =  localStorage.getItem('[user]');

    if (!userData) {
      return;
    }

    const data = JSON.parse(userData);
    const loggedUser = new User(data.email, data.username, data.isTutor, data.objectId, data._sessionToken);

    if (loggedUser.token){
      this.user$$.next(loggedUser);
    }
  }

  logOut(){
    return this.http.post('/api/logout', {})
  }
}
