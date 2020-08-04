import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  public login(email: string, password: string) {
    this.authService.login({email:email, password:password});
}

}
