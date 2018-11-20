import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private router: Router,
    private authService: AuthService) { }

  login(): void {
    if (this.authService.login(this.form.value.username, this.form.value.password)) {
      this.router.navigate(['']);
    } else {
      this.form.controls['password'].setErrors({ 'incorrect': true });
    }
  }
}
