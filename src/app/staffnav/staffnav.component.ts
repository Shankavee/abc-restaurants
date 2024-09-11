import { Component } from '@angular/core';

@Component({
  selector: 'app-staffnav',
  templateUrl: './staffnav.component.html',
  styleUrl: './staffnav.component.css'
})
export class StaffnavComponent {
  disable = false;


  ngOnInit(): void {
    console.log(localStorage.getItem("email"));
    if(localStorage.getItem("email" ) === "admin123@gmail.com"){
      this.disable = true;
    }
    else{
      this.disable = false;
    }
  }
}
