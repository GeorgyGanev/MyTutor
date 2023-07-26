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

  constructor(private userService: UserService, private router: Router){ }

  register(form: NgForm) {

    const { username, email, password} = form.value;

    this.userService.register(username, email, password)
      .subscribe(() => this.router.navigate(['/']));
    
  }
}
