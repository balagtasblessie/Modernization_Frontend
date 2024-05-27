import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private sessionService: SessionService, private router: Router) {}

  canActivate(): boolean {
    const token = this.sessionService.getToken();
    console.log('AuthGuard - Token:', token);
    
    if (token) {
      console.log('Redirecting to home page');
      return true; 
    } else {
      console.log('No token found, redirecting to login page');
      this.router.navigate(['/']); 
      return false;
    }
  }
}
