import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingComponent } from './landing/landing.component';
import { AuthGuard } from './auth/auth.guard';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  { path: '', component: LandingComponent, canActivate: [AuthGuard] ,pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {path:'create-feed', component:FeedComponent, canActivate:[AuthGuard]},
  {path:'home', component:LandingComponent, canActivate:[AuthGuard]},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
