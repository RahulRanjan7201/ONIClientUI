import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }
  navigateToCreate() {
    this.router.navigate(['/create-feed']);

  }
  logout() {
    this.authService.logout();
  }
}
