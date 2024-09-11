import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl = 'http://localhost:3000/reports';

  constructor(private http: HttpClient) {}

  generateReport(type: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?type=${type}`);
  }
}
