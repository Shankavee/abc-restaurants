import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { Reservation, Query } from './admin.models'; 

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  reservations: Reservation[] = [];
  queries: Query[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getReservations();
    this.getQueries();
  }

  getReservations() {
    this.adminService.getReservations().subscribe((data: Reservation[]) => {
      this.reservations = data;
    });
  }

  getQueries() {
    this.adminService.getQueries().subscribe((data: Query[]) => {
      this.queries = data;
    });
  }
}
