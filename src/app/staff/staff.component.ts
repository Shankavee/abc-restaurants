import { Component, OnInit } from '@angular/core';
import { StaffService } from './staff.service';
import { Reservation } from './staff.models'; 

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  reservations: Reservation[] = []; 

  constructor(private staffService: StaffService) {}

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations() {
    this.staffService.getReservations().subscribe((data: Reservation[]) => {
      this.reservations = data;
    });
  }
}
