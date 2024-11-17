import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  // ngOnInit is a lifecycle hook in Angular which is called when the component is first initialized
  ngOnInit(): void {
    console.log("Dashboard component initialized");

  }

  constructor() {} 


}

