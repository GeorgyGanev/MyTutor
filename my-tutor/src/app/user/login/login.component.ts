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
  @ViewChild('passwordInput') passwordInput = undefined;

  isLoading = false;

  constructor(private userService: UserService, private router: Router){ }

  login(form: NgForm) {
   
    const {email, password} = form.value;
    form.reset();

    this.isLoading = true;
    
    this.userService.login(email, password).subscribe((user) => {
      localStorage.setItem('[user]', JSON.stringify(user))
      this.router.navigate(['/']);
    })

  }

}
