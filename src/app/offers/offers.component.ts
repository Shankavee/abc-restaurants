import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  offers: { title: string, description: string, validity: string, discount: number }[] = [];

  ngOnInit(): void {
    // Example data, replace with actual data source
    this.offers = [
      {
        title: 'Summer Sale',
        description: 'Get 20% off on all summer items!',
        validity: 'June 1 - June 30',
        discount: 20
      },
      {
        title: 'Winter Discount',
        description: 'Enjoy a 15% discount on winter clothing.',
        validity: 'December 1 - December 31',
        discount: 15
      }
    ];
  }
}
