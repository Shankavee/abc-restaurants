import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-generate-reports',
  templateUrl: './generate-reports.component.html',
  styleUrls: ['./generate-reports.component.css']
})
export class GenerateReportsComponent {
  reportType!: string;  
  reportData: any;  

  constructor() { }


  generateReport(): void {
    if (this.reportType === 'reservations') {
      
      this.reportData = 'Displaying Reservations Report...'; 
    } else if (this.reportType === 'payments') {
      
      this.reportData = 'Displaying Payments Report...'; 
    }
  }
}
