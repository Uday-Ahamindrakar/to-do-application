import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor() {}

  login(userData: any) {
    localStorage.setItem('user', JSON.stringify(userData));
  }

  getUser() {
    return localStorage.getItem(JSON.parse('user'));
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  logout() {
    localStorage.removeItem('user');
  }
}
