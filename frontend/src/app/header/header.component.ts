import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  ngOnInit() {
    console.log("Header Component initialized");
  }


  // Title of the Header component
  title: string = 'NASA Space Dashboard';

  // Current date and time displayed in the header
  currentDate: Date = new Date();

  constructor() {}




}
