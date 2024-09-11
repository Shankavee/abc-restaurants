import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageService {
  private apiUrl = 'http://localhost:3000/users'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  // Define the manage method
  manage(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData); // POST request to save user data
  }
}
