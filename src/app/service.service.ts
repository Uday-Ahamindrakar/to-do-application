import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TaskData } from './task-data';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  api: string = 'http://localhost:3000/users';
  apitasks: string = 'http://localhost:3000/tasks';

  private useremail = new BehaviorSubject<string>('');
  oberEmail$ = this.useremail.asObservable();

  updateEmail(newEmail: string) {
    this.useremail.next(newEmail);
    console.log('in service new Email : ' + newEmail);
  }

  // add user
  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.api, user);
  }

  // get all users
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api);
  }

  // add task to specific email id
  addTasktoEmail(emailAdd: string, taskString: string): Observable<any> {
    const userTask = { email: emailAdd, task: taskString };
    return this.http.post(`${this.apitasks}`, userTask);
  }

  // get task for a specific email
  getTaskByEmail(email: string): Observable<TaskData[]> {
    return this.http.get<TaskData[]>(`${this.apitasks}?email=${email}`);
  }
}
