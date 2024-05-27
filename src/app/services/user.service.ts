import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { SessionService } from "./session.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://localhost:7102/Login';

  constructor(
    private http: HttpClient,
    private sessionService: SessionService,
    private router: Router
  ) { }

  login(userName: string, password: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/login', { userName, password }).pipe(
      tap(response => {
        console.log('Login successful:', response);
        
        const token = response.token;
        this.sessionService.setToken(token);

        const fullName = response.fullName; 
        const userId = response.userId; 
        const roleDescription = response.roleDescription;  
        this.sessionService.setUserId(userId);
        this.sessionService.setFullName(fullName);
        this.sessionService.setUserRole(roleDescription);

        this.router.navigate(['/home']);
      }),
      catchError(error => {
        console.error('Error during login:', error);
        return throwError('Login failed. Please try again.');
      })
    );
  }

  logout() {
    
    this.sessionService.clearSession();
   
  }
}
