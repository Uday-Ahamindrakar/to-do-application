import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private router: Router) {}

  email: string = '';
  password: string = '';
  name: string = '';

  register() {
    this.router.navigate(['']);
  }

  clearData() {}
}
