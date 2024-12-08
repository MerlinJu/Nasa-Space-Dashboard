import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
    // Backend URL
    private apiUrl = 'http://localhost:3000/api'

    constructor(private http: HttpClient) { } // constructor to inject the http client into the Nasa Service class


    // Method to get Mars Weather data from backend 
    getMarsWeather(): Observable<any> {
      console.log('Fetching Mars Weather Data...'); // log when request is made
      return this.http.get(`${this.apiUrl}/mars_weather`)
    }


    // Method to get Astronomy Pciture of the Day APOD from backend
    getApod(): Observable<any> {
      console.log('Fetching APOD data...');  // Log when the request is made
      return this.http.get(`${this.apiUrl}/apod`)
    }
  
}