import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation, Query } from './admin.models'; 

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseUrl}/reservations`);
  }

  getQueries(): Observable<Query[]> {
    return this.http.get<Query[]>(`${this.baseUrl}/queries`);
  }
}
