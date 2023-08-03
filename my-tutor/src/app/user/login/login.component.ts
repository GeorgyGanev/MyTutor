import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoading = false;
  error: string = '';
  showPassword: boolean = false;
  
  constructor(private userService: UserService, private router: Router){ }
  
  login(form: NgForm) {
   
    if (form.invalid){
      return;
    }

    const {email, password} = form.value;
    form.reset();

    this.isLoading = true;
    
    this.userService.login(email, password).subscribe({
      next: (user) => {
        localStorage.setItem('[user]', JSON.stringify(user))
        this.isLoading = false;
        this.userService.username = user.username;
        this.userService.loggedUserId = user.objectId; //to remove
       
        
        this.router.navigate(['/']);
      },
      error: (err) => {    
        this.isLoading = false;
        this.error = err.error.error;
      }
    })

  }

}
