import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  api: string = 'http://localhost:3000/users';

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.api, user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api);
  }
}
