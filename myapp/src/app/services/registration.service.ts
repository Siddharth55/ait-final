import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
//import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class RegistrationService {
  authToken: any;
  user: any;

  constructor(private http:HttpClient) { }
registerStudent(student){
return this.http.post('http://localhost:3000/users/register',student,{
  headers: new HttpHeaders().set('content-type','application/json'),
});
}
authenticateUser(user) {
  return this.http.post ('http://localhost:3000/users/authenticate', user, {
  headers: new HttpHeaders().set('content-type', 'application/json'),
});
}
/*loggedIn() {
  // console.log('loggedIn');
  return tokenNotExpired('id_token');
}
storeUserData(token, user) {
  localStorage.setItem('id_token', token);
  localStorage.setItem('user', JSON.stringify(user));
  this.authToken = token;
  this.user = user;
}

getUser()
{
  //console.log("1"+this.user);
  //console.log(localStorage.getItem('user'));
  return localStorage.getItem('user');
}

logout() {
  this.authToken = null;
  this.user = null;
  localStorage.clear();
}*/
}
