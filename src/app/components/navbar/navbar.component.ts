import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service'; // Import UserService

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAdmin: boolean = false;
  isManager: boolean = false;
  isEmployee: boolean = false;

  constructor(
    private sessionService: SessionService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const roleDescription = this.sessionService.getUserRole();
    if (roleDescription === 'Admin') {
      this.isAdmin = true;
    } else if (roleDescription === 'Manager') {
      this.isManager = true;
    } else if (roleDescription === 'Employee') {
      this.isEmployee = true;
    }
  }

  logout() {
    this.sessionService.clearSession();
    this.router.navigate(['']);
  }
}
