import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BookAnAppointmentComponent } from './pages/book-an-appointment/book-an-appointment.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLinkActive,RouterLink,OpenCloseComponent,BookAnAppointmentComponent,CommonModule,RouterOutlet,AppointmentListComponent,LoginComponent,DashboardComponent,DepartmentsComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'Hospital_Appointment';

}

