import { Component, OnInit } from '@angular/core';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrl: './mars.component.css'
})
export class MarsComponent implements OnInit {
  weather_data: any = {};



  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
      console.log("Mars Component initialized");

        // observer pattern for data handling from backend
        this.nasaService.getMarsWeather().subscribe({
          next: (data) => {
            this.weather_data = data;
            console.log("marsWeather Data", data);
          }, error: (error) => {
            console.error('Error fetching Mars weather data:', error); // handle error
          }, complete: () => {
            console.log("Mars Weather data fetching completed");
          }
  });
  }


}