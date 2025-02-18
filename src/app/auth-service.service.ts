import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  login(userData: any) {
    localStorage.setItem('user', JSON.stringify(userData));
  }

  getUser() {
    return localStorage.getItem(JSON.parse('user'));
  }

  isLoggedIn(): boolean {
    //return !!localStorage.getItem('user');
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('user'); // Check login status
    }
    return false; // Return false if running on the server
  }

  logout() {
    localStorage.removeItem('user');
  }
}
