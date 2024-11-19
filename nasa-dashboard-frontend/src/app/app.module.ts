import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Import the new provideHttpClient method
import { appRoutes } from './app.routes'; // Import your app routes here

// Components 
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ApodComponent } from './apod/apod.component';
import { MarsComponent } from './mars/mars.component';

// Services
import { NasaService } from './nasa.service';



@NgModule({
  declarations: [
    DashboardComponent,  // Declare dashboard component
    HeaderComponent,  // Declare header component
    ApodComponent,  // Declare APOD component
    MarsComponent,  // Declare Mars component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) // Configure routes here
  ],
  providers: [
    NasaService, // Register the NASA service here
    provideHttpClient() // Import HttpClientModule here
  ],  
  bootstrap: [DashboardComponent]   // Set the root component
})
export class AppModule { }
