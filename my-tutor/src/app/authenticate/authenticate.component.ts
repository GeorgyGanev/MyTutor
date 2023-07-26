import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { IUser } from 'src/types/user';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  isAuthenticating = true;
  hasUser: boolean = false;
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }
}
