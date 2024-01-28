import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor( public router:Router,public dialog: MatDialog){}
  redirectTologin(){
    this.router.navigate(['/login'])
  }
  redirectToabout(){
    this.router.navigate(['/about'])
  }
  redirectTohome(){
    this.router.navigate(['/home'])
  }
    redirectTodepartments(){
    this.router.navigate(['/departments'])
  }
  redirectTocontactus(){
    this.router.navigate(['/contactus'])
  }

}
