import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  User:User= new User();
  userId:string="";
  pasword:string="";

  clickme() {
    console.log("Username:"+ this.userId);
    console.log("Password:"+ this.pasword);
}
  
  

}
