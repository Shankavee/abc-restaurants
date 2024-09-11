import { Component, OnInit } from '@angular/core';
import { ViewService } from './view.service';

@Component({
  selector: 'app-viewquery',
  templateUrl: './viewquery.component.html',
  styleUrls: ['./viewquery.component.css']
})
export class ViewQueryComponent implements OnInit {
  queryDetails: any;

  constructor(private viewService: ViewService) {}

  ngOnInit(): void {}

  fetchQueryDetails(): void {
    this.viewService.getQueryDetails().subscribe(
      (data: any) => {
        this.queryDetails = data;
      },
      (error: any) => {
        console.error('Error fetching query details', error);
      }
    );
  }
}
