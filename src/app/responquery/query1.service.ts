import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Query } from '../models/query1.model';  // Ensure the path is correct

@Injectable({
  providedIn: 'root'
})
export class Query1Service {

  private apiUrl = 'http://localhost:3000/queries';  
  constructor(private http: HttpClient) { }

  getQueries(): Observable<Query[]> {
    return this.http.get<Query[]>(`${this.apiUrl}/queries`);
  }

  respondToQuery(queryId: number, responseMessage: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/respond`, { queryId, responseMessage });
  }
}
