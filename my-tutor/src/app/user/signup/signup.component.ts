import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  isLoading = false;

  constructor(private userService: UserService, private router: Router){ }

  register(form: NgForm) {

    if (form.invalid){
      return;
    }

    const { username, email, password} = form.value;
    
    this.isLoading = true;

    this.userService.register(username, email, password)
      .subscribe((user) => {
        localStorage.setItem('[user]', JSON.stringify({...user, username}));
        this.router.navigate(['/']);
        });
  }
}
