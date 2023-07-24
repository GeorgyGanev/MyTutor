import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { IUser } from 'src/types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user$$ = new BehaviorSubject<IUser | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: IUser | undefined;

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
      username,
      email,
      password
    })
    .pipe(tap((user) => this.user$$.next(user)));
  }

}
