import { Component , OnInit} from '@angular/core';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.css'
})
export class ApodComponent implements OnInit {



   // APOD Logic ----------------------------------------------------
   apodData: any = {}; // declare a variable to hold the data from the Apod API

   constructor(private nasaService: NasaService) {} // Inject Nasa Service into the component
 
   // ngOnInit is a lifecycle hook in Angular which is called when the component is first initialized
   ngOnInit(): void {
     console.log("Dashboard component initialized");
 
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
