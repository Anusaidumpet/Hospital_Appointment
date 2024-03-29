import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor( public router:Router){}
  username: string = '';
  password: string = '';



  login() {
    console.log('Logging in with username:',this.username, 'and password:', this.password)
  }
  signin() {
    console.log('sign in with username:',this.username, 'and password:', this.password)
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
