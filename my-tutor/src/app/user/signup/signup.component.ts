import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { validatePassword } from 'src/app/shared/validators/password-validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  isLoading = false;
  error: string = '';
  showPassword: boolean = false;

  form = this.fb.group({
    email: ['', [Validators.required, emailValidator()]],
    username: ['', [Validators.required, Validators.minLength(2)]],
    passGroup: this.fb.group(
      {
      password: ['', [Validators.required, Validators.minLength(4)]],
      rePassword: ['', [Validators.required]]
    }, 
    {
      validators: [validatePassword('password', 'rePassword')]
    }
    )
  })

  constructor(private fb:FormBuilder, private userService: UserService, private router: Router){ }

  register() {

    if (this.form.invalid){
      return;
    }

    const { email, username, passGroup: {password, rePassword} = {} } = this.form.value;
    
    this.isLoading = true;

    this.userService.register(username!, email!, password!)
      .subscribe({
        next: (user) => {
          localStorage.setItem('[user]', JSON.stringify({...user, username}));
          this.isLoading = false;
          this.userService.username = username!; //add
          this.router.navigate(['/']);
          },
        error: (err) => {
          this.isLoading = false;
          this.error = err.error.error
        }
      });
  }

  toggleShowPass(){ 
    this.showPassword = !this.showPassword;
  }

}
