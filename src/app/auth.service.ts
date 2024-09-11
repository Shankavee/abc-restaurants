import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface User {
  id?: number;
  username: string;
  password: string;
  role?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8081/api'; 
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  signup(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, user);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password })
      .pipe(tap(response => {
        if (response && response.token) {
         
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.currentUserSubject.next(response);
        }
      }));
  }

  logout(): void {
    
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.currentUserValue && !!this.currentUserValue.token;
  }
}
