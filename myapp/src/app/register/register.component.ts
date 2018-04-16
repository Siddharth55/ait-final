import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ RegistrationService} from '../services/registration.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

name:string;
username:string;
email:string;
password:string;
  constructor(private router:Router,private xyz:RegistrationService) { }

  ngOnInit() {

  }
register()
{
const student ={
  name:this.name,
  email:this.email,
  username:this.username,
  password:this.password
}


 // if(this.fname=='srikanth'&& this.lname== 'giri'&& this.email== 'srikanth.giri96@gmail.com')
this.xyz.registerStudent(student).subscribe(data => 
  {
    if(data['success']){
      alert("registration successfull");
   }
   else{
     alert("registration unsuccessfull");
   }

  });
    console.log("registered");
  this.router.navigate(['/login']);
}
}
