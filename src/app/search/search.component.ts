import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-services',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchCriteria = {
    serviceType: '',
    location: '',
    date: ''
  };

  searchResults = [];

  constructor(private http: HttpClient) {}

  searchServices() {
    this.http.post('http://localhost:3000/search', this.searchCriteria).subscribe(
      (data: any) => {
        this.searchResults = data;
      },
      (error) => {
        console.error('Error fetching search results:', error);
      }
    );
  }
}
