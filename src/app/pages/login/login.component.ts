import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = '';
  password: string = '';

  constructor(
    private sessionService: SessionService,
    private userService: UserService,
    private toast: NgToastService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogin() {
    if (!this.userName || !this.password) {
      this.toast.error({ detail: "ERROR", summary: "Please input both email and password.", duration: 5000 });
      return;
    }

    this.userService.login(this.userName, this.password).subscribe({
      next: (response: any) => {
        this.toast.success({detail: "SUCCESS", summary: "Login Successful", duration: 5000});
    
        const token = response['token']; 
        const fullName = response['fullName'];
        const userId = response['userId'];
        const role = response['roleDescription'];
    
       
        this.sessionService.setToken(token);
        this.sessionService.setFullName(fullName);
        this.sessionService.setUserId(userId);
        this.sessionService.setUserRole(role);
    
        
        this.router.navigate(['/home']);
      },
      error: (error: any) => {
        this.toast.error({detail: "ERROR", summary: "Invalid credentials.", duration: 5000});
        console.log(error);
      }
    });
    
  }
}
