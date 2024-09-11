import { Component } from '@angular/core';
import { RatesService } from './rate.service';

@Component({
  selector: 'app-checkrates',
  templateUrl: './checkrates.component.html',
  styleUrls: ['./checkrates.component.css']
})
export class CheckratesComponent {
  serviceType: string = '';
  facilityType: string = '';
  priceRangeMin: number | null = null;
  priceRangeMax: number | null = null;
  results: any[] = [];

  constructor(private ratesService: RatesService) {}

  onCheck() {
    const params = {
      serviceType: this.serviceType,
      facilityType: this.facilityType,
      priceRangeMin: this.priceRangeMin,
      priceRangeMax: this.priceRangeMax
    };

    this.ratesService.checkRates(params).subscribe(
      (response: any[]) => {
        this.results = response;
      },
      (error: any) => {
        console.error('Error fetching rates and availability:', error);
      }
    );
  }
}
