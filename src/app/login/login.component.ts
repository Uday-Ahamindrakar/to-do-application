import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { User } from '../user';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router, private service: ServiceService) {}

  email: string = '';
  password: string = '';

  userExist: boolean = false;

  users: User[] = [];

  login() {
    this.service
      .getAllUsers()
      .pipe(
        map((users) =>
          users.some(
            (user) =>
              this.email === user.email && this.password === user.password
          )
        )
      )
      .subscribe((userExists) => {
        if (userExists) {
          this.router.navigate(['/dashboard']);
        } else {
          this.email = '';
          this.password = '';
          alert('Invalid email or password please check!');
        }
      });
  }

  clearData() {}

  // gotoSignup() {
  //   this.router.navigate(['/signup']);
  // }
}
