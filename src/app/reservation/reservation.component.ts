import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from './reservation.service'; 

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservationForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private reservationService: ReservationService) {
    this.reservationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      serviceType: ['', Validators.required],
      guests: ['', [Validators.required, Validators.min(1), Validators.max(20)]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      requests: ['']
    });
  }

  get f() { return this.reservationForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.reservationForm.invalid) {
      return;
    }
    this.reservationService.createReservation(this.reservationForm.value).subscribe(
      response => {
        alert('Reservation submitted successfully!');
        this.reservationForm.reset();
        this.submitted = false;
      },
      error => {
        console.error('There was an error!', error);
        alert('There was an error submitting your reservation.');
      }
    );
  }
}
