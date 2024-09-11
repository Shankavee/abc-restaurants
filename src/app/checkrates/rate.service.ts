import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatesService {  
  private apiUrl = 'http://localhost:3000/check-rates';

  constructor(private http: HttpClient) {}

  checkRates(params: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { params });
  }
}