
import { Component } from '@angular/core';
import { QueryService } from './query.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-query',
  templateUrl: './submit-query.component.html',
  styleUrls: ['./submit-query.component.css']
})
export class SubmitQueryComponent {
  queryText: string = '';

  constructor(private queryService: QueryService, private router: Router) { }

  onSubmit() {
    const userId = 1; 
    if (this.queryText.trim()) {
      this.queryService.submitQuery({ userId, queryText: this.queryText }).subscribe(
        (response: any) => {
          console.log('Query submitted successfully', response);
          this.router.navigate(['/success']); 
        },
        (error: any) => {
          console.error('Error submitting query:', error);
        }
      );
    } else {
      console.error('Query is empty');
    }
  }
}
