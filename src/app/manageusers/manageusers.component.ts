import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManageService } from './manage.service';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent {
  errorMessage!: string;

  constructor(private manageService: ManageService) { }

  // Rename onSignup to onregister to match the template
  onregister(form: NgForm): void {
    if (form.valid) {
      this.manageService.manage(form.value).subscribe({
        next: (response: any) => { 
          alert('Register successful');
          form.reset();
        },
        error: (error: any) => { 
          this.errorMessage = 'Error: ' + error.message;
        }
      });
    }
  }
}
