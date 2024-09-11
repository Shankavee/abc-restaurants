import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = 'http://localhost:3000/payments'; // Your API endpoint

  constructor(private http: HttpClient) { }

  submitPayment(payment: any): Observable<any> {
    return this.http.post(this.apiUrl, payment);
  }
}
