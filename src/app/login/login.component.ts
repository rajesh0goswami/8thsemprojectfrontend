import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : String
  uname: String
  password : String

  OnLogin(){
    console.log(this.email) 
    console.log(this.password) 
  }

  constructor() { }

  ngOnInit(): void {
  }
  

}
