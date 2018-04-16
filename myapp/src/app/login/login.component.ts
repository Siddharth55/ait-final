import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user_nm : string;
  pass : string;
  constructor(private router:Router, private authService:RegistrationService) { }

  ngOnInit() {
  }
signup(){
  console.log("registered");
  this.router.navigate(['/register']);
}

submitup() {

    const user =
    {
      username: this.user_nm,
      password: this.pass
    }
    console.log(user);
    this.authService.authenticateUser(user).subscribe(data => {
      console.log(data);
      if (data['success']) {
   // this.authService.storeUserData(data['token'], data['user']);
        alert("login successful");
          this.router.navigate(['movies']);
      } else {
        alert("error");
        this.router.navigate(['login']);
      }
    });
  
  	//e.preventDefault();
  	//console.log(e);
  	//var username = e.target.elements[0].value;
  	//var password = e.target.elements[1].value;
  	
 // 	if(this.user_nm == 'admin' && this.pass == 'admin') {
   //   console.log("Success!!");

  	
  	}
  

}