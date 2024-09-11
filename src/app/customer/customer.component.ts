import { Component } from '@angular/core';
import { QueryService } from '../submit-query/query.service'; 
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  queryText: string = '';

  constructor(private queryService: QueryService) {}

  submitQuery(): void {
    const userId = 1; 
    if (this.queryText.trim()) {
      this.queryService.submitQuery({ userId, text: this.queryText }).pipe(
        catchError((error: any) => {
          console.error('Error submitting query:', error);
          return throwError(error);
        })
      ).subscribe({
        next: (response: any) => {
          console.log('Query submitted successfully:', response);
        },
        error: (error: any) => {
          console.error('Error submitting query:', error);
        }
      });
    } else {
      console.error('Query is empty');
    }
  }
}
