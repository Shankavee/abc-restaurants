import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  private apiUrl = 'http://localhost:3000/api/query'; 

  constructor(private http: HttpClient) {}

  getQueryDetails(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
