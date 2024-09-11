import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from './staff.models'; 

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private baseUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseUrl}/reservations`);
  }
}
