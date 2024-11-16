import { Component, OnInit } from '@angular/core';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  apodData: any; // declare a variable to hold the data from the Apod API

  constructor(private nasaService: NasaService) {} // Inject Nasa Service into the component

  // ngOnInit is a lifecycle hook in Angular which is called when the component is first initialized
  ngOnInit(): void {
    // Call the getApod method from the injected NasaService to get data when the component initializes
    this.nasaService.getApod().subscribe(
      data => {
        this.apodData = data; // store the received data
      },
      error => {
        console.error('Error fetching APOD data:', error); // handle error
      }
    );
  }
}

