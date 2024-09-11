import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Payment {
  
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'your-api-url-here'; 

  constructor(private http: HttpClient) {}

  getPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.apiUrl}/payments`);
  }
}
