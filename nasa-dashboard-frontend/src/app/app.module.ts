import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { provideHttpClient } from '@angular/common/http'; // Import the new provideHttpClient method

import { DashboardComponent } from './dashboard/dashboard.component';
import { NasaService } from './nasa.service';
import { appRoutes } from './app.routes'; // Import your app routes here

@NgModule({
  declarations: [
    DashboardComponent,  // Declare dashboard component
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
