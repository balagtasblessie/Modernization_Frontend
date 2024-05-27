import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private userRole: string = '';

  constructor() { 
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  getUserName(): string {
    return localStorage.getItem('userName') || '';
  }

  

  clearSession(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('fullName');
    localStorage.removeItem('userId');
    this.userRole = ''; 
  }

  setUserName(value: string): void {
    localStorage.setItem('userName', value);
  }

  setFullName(value: string): void {
    localStorage.setItem('fullName', value);
  }

  getFullName(): string {
    return localStorage.getItem('fullName') || '';
  }

  getUserId(): number {
    return Number(localStorage.getItem('userId') || 0);
  }

  setUserId(value: string): void{
    localStorage.setItem('userId', value);
  }

  setUserRole(userRole: string): void { 
    this.userRole = userRole;
  }

  getUserRole(): string {
    return this.userRole;
  }

  
}
