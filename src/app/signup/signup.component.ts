import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private router: Router, private service: ServiceService) {}

  user = {
    name: '',
    email: '',
    password: '',
  };

  // email: string = '';
  // password: string = '';
  // name: string = '';

  register() {
    if (
      this.user.name != '' &&
      this.user.email != '' &&
      this.user.password != ''
    ) {
      this.service.registerUser(this.user).subscribe((data) => {
        alert('User Successfully Submited');
        this.router.navigate(['']);
      });
    } else {
      alert('please provide valid details');
    }
  }

  clearData() {
    this.user.name = '';
    this.user.email = '';
    this.user.password = '';
  }
}
