import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:3000/api/reservations';

  constructor(private http: HttpClient) { }

  getReservations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateReservation(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }
}
