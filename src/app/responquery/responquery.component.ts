import { Component, OnInit } from '@angular/core';
import { Query1Service } from './query1.service';  
import { Query } from '../models/query1.model';   

@Component({
  selector: 'app-view-queries',
  templateUrl: './responquery.component.html',
  styleUrls: ['./responquery.component.css']
})
export class ResponqueryComponent implements OnInit {
  queries: Query[] = [];

  constructor(private query1Service: Query1Service) { }

  ngOnInit(): void {
    this.loadQueries();
  }

  loadQueries(): void {
    this.query1Service.getQueries().subscribe({
      next: (data: Query[]) => {
        this.queries = data;
      },
      error: (error: any) => {
        console.error('Error fetching queries:', error);
      }
    });
  }

  respond(queryId: number, responseMessage: string): void {
    this.query1Service.respondToQuery(queryId, responseMessage).subscribe({
      next: () => {
        console.log('Response sent successfully');
        this.loadQueries(); 
      },
      error: (error: any) => {
        console.error('Error sending response:', error);
      }
    });
  }
}
