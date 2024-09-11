import { Component, OnInit } from '@angular/core';
import { ReservationService } from './reservation.service'; // Adjusted import path
import { Observable } from 'rxjs';

@Component({
  selector: 'app-check-reservations',
  templateUrl: './check-reservations.component.html'
})
export class CheckReservationsComponent implements OnInit {
  reservations: any[] = []; // You can replace 'any' with a more specific type if you have one

  constructor(private reservationService: ReservationService) {}

  ngOnInit() {
    this.getReservations();
  }

  getReservations() {
    this.reservationService.getReservations().subscribe((response: any[]) => {
      this.reservations = response;
    });
  }

  updateStatus(id: number, status: string) {
    this.reservationService.updateReservation(id, { status }).subscribe((response: any) => {
      this.getReservations();
    });
  }
}
