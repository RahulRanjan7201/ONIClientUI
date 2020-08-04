import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import {AppServiceService} from '../service/app-service.service'

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router, private service:AppServiceService
  ) {}

  async login(user: User) {
    if (!user.email && !user.password ) {
      alert("Please Provide email and password")
    } else {
      await this.service.verifyUser(user.email,user.password);
      localStorage.setItem("userEmail",user.email)
      this.loggedIn.next(true);
      this.router.navigate(['/']); 
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}