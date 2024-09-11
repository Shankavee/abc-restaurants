import { Component, OnInit } from '@angular/core';
import { Reservation1Service } from './reservation1.service'; 
import { Reservation } from '../models/reservation.model'; 

@Component({
  selector: 'app-view-reservations',
  templateUrl: './view-reservations.component.html',
  styleUrls: ['./view-reservations.component.css']
})
export class ViewReservationsComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservation1Service: Reservation1Service) { }

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.reservation1Service.getReservations().subscribe({
      next: (data: Reservation[]) => {
        this.reservations = data;
      },
      error: (error: any) => {
        console.error('Error fetching reservations:', error);
      }
    });
  }
}
