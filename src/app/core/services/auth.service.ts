import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

interface User {
  username: string;
  password: string;
}
const USERS_KEY = 'users';
const CURRENT_USER_KEY = 'currentUser';

@Injectable()
export class AuthService {

  private _isAuthenticated: BehaviorSubject<boolean>;
  private _currentUserName: BehaviorSubject<string>;

  constructor() {
    const currentUsername = localStorage.getItem(CURRENT_USER_KEY);
    this._isAuthenticated = new BehaviorSubject<boolean>(!!currentUsername);
    this._currentUserName = new BehaviorSubject<string>(currentUsername);
  }

  get IsAuthenticated(): Observable<boolean> {
    return this._isAuthenticated.asObservable();
  }

  get CurrentUserName(): Observable<string> {
    return this._currentUserName.asObservable();
  }

  login(username: string, password: string): boolean {
    const users = this.getUsers();
    const curr = users.find(u => u.username === username);
    if (curr && curr.password === password) {
      this.loginUser(username);
      return true;
    } else if (curr && curr.password !== password) {
      return false;
    } else {
      this.addUser({ username: username, password: password });
      this.loginUser(username);
      return true;
    }
  }

  private loginUser(username: string) {
    this._isAuthenticated.next(true);
    this._currentUserName.next(username);
    localStorage.setItem(CURRENT_USER_KEY, username);
  }
  private getUsers(): User[] {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  }
  private addUser(user: User) {
    console.log(user);
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
}
