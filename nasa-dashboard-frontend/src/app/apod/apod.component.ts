import { Component , OnInit} from '@angular/core';
import { NasaService } from '../nasa.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // import DomSanitizer

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.css'
})
export class ApodComponent implements OnInit {



   // APOD Logic ----------------------------------------------------
   apodData: any = {}; // declare a variable to hold the data from the Apod API
   mediaUrl: SafeResourceUrl = ''; // Change type to SafeResourceUrl for sanitized URLs
   mediaType: string = ''; // Stores the type, e.g., 'image' or 'video'
   

   constructor(private nasaService: NasaService, private sanitizer: DomSanitizer ) {} // Inject Nasa Service into the component
 

   // ngOnInit is a lifecycle hook in Angular which is called when the component is first initialized
   ngOnInit(): void {
     console.log("Dashboard component initialized");
 
     // Call the getApod method from the injected NasaService to get data when the component initializes
     this.nasaService.getApod().subscribe({
        next: (response) => {
          console.log("API response:", response);

          console.log(response.media_type);

          this.apodData = response;

          if ( response.media_type === 'image') {
            this.mediaUrl = response.url;
            this.mediaType = 'image';
          } else if ( response.media_type === 'video') {
            // Use DomSanitizer for video URLs
            this.mediaUrl = this.sanitizer.bypassSecurityTrustResourceUrl(response.url);
            this.mediaType = 'video';
          } else {
            console.error('Invalid media type:', response.media_type);
          }
            
        }, error: (error) => {
          console.error('Error fetching APOD data:', error); // handle error
        }, complete: () => {
          console.log("APOD data fetching completed");
        }

      });
   }


}
