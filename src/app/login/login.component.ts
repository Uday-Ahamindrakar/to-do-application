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
          const userData = {
            name: this.email,
            token: this.generateRandomString(6),
          };
          localStorage.setItem('user', JSON.stringify(userData));
          this.router.navigate(['/dashboard']);
        } else {
          this.email = '';
          this.password = '';
          alert('Invalid email or password please check!');
        }
      });
  }

  clearData() {}

  generateRandomString(length: number): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Possible characters
    let result = '';

    // Loop through and pick random characters
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length); // Random index
      result += characters[randomIndex]; // Add character to result
    }

    return result;
  }
}
