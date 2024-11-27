import { Component, OnInit } from '@angular/core';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrl: './mars.component.css'
})
export class MarsComponent implements OnInit {
  weather_data: any = {};
  processed_data: any = [];


  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
      console.log("Mars Component initialized");

        // Call the getMarsWeather method from the injected NasaService to get data when the component initializes
        // observer pattern for data handling from backend
        this.nasaService.getMarsWeather().subscribe({
          next: (data) => {
            this.weather_data = data;
            console.log("marsWeather Data", data);

              // Transform data into a simplified structure
            this.processed_data = this.transformMarsWeatherData(data);
            console.log("Processed Mars Weather Data", this.processed_data);
          }, error: (error) => {
            console.error('Error fetching Mars weather data:', error); // handle error
          }, complete: () => {
            console.log("Mars Weather data fetching completed");
          }
    });
  }

  // Method to fetch Mars Weather data again when the button is clicked

  /**
   * Transform the full Mars weather data into a simplified structure
   * @param data Full weather data
   * @returns Simplified weather data
   */
  transformMarsWeatherData(data: any): any[] {
    console.log('Transforming Mars weather data...');
    const processed = [];

    for (const sol in data) {
      if (data.hasOwnProperty(sol)) {
        const solData = data[sol];
        processed.push({
          sol: sol, // Sol number (e.g., 675)
          date: solData.First_UTC,
          avg_temp: solData.AT?.av ?? "N/A",
          min_temp: solData.AT?.mn ?? "N/A",
          max_temp: solData.AT?.mx ?? "N/A",
          wind_speed: solData.HWS?.av ?? "N/A",
          pressure: solData.PRE?.av ?? "N/A",
          season: solData.Season,
        });
      }
    }
    return processed;
  }

}