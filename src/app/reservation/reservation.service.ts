import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:3000/reservations'; 

  constructor(private http: HttpClient) { }

  createReservation(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
