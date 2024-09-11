import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder, FormGroup, Validators
import { PaymentService } from './payment.service'; // Adjust the path as needed


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  payment = {
    amount: null,
    paymentMethod: '',
    reservationId: null,
  };

  errorMessage: string = '';

  constructor(private paymentService: PaymentService) {}

  submitPayment() {

    this.paymentService.submitPayment(this.payment).subscribe(
      response => {
        alert('Payment successful');
        // Reset payment object after successful submission
        this.payment = {
          amount: null,
          paymentMethod: '',
          reservationId: null,
        };
      },
      error => {
        console.error('Error submitting payment', error);
        this.errorMessage = 'Error: ' + error.message;
      }
    );
  }
}
