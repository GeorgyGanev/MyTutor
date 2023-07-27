
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

  // getUserProfile(){
  //   const { meHeaders } = environment;
  //   return this.http
  //   .get<IUser>('/api/users/me', {headers: meHeaders})
  //   .pipe(tap((user) => {
  //     this.user$$.next(user)
  //     console.log(user);
      
  //   }))
  // }

  autoLogin(){
    const userData =  localStorage.getItem('[user]');
    if (!userData) {
      return;
    }

    const data = JSON.parse(userData);
    const loggedUser = new User(data.email, data.username, data.isTutor, data.objectId, data.sessionToken);

    this.user = loggedUser;
  
  }

  logOut(){
    localStorage.removeItem('[user]');
    this.user = undefined;
  }
}