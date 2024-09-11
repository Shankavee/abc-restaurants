import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getServices(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/services`);
  }

  submitQuery(query: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/customer/query`, { query });
  }

  getQueries(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/queries`);
  }
}
