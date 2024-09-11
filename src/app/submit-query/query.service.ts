import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private apiUrl = 'http://localhost:3000/queries'; 

  constructor(private http: HttpClient) {}

  submitQuery(query: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, query);
  }
}
