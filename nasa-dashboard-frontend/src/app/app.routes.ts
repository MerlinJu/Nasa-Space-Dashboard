import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Routes = [
    { path: '', component: DashboardComponent }, // default route
    // the DashboardComponent will be shown in this path so ng will try to render the components code

    { path: '**', redirectTo: '', pathMatch: 'full' } // redirect unknown routes to default route
]
