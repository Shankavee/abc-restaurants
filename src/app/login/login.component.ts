import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage!: string;

  constructor(private loginService: LoginService, private router: Router) { }

  onLogin(form: NgForm): void {
    if (form.valid) {
      this.loginService.login(form.value).subscribe({
        next: (response) => {
          
          localStorage.setItem('userRole', response.role);

         
          switch (response.role) {
            case 'admin':
              this.router.navigate(['/admin']);
              break;
            case 'staff':
              this.router.navigate(['/staff']);
              break;
            case 'customer':
              this.router.navigate(['/customer']);
              break;
            default:
              this.errorMessage = 'Unknown role';
          }
        },
        error: (error) => {
          this.errorMessage = 'Error: ' + error.message;
        }
      });
    }
  }
}
