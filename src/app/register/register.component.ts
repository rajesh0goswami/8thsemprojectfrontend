import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
