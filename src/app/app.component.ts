import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feedUI';
  isLoggedIn$: Observable<boolean>;
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }
}
  