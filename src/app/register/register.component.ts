import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname : string
  email : string
  password : string
  successMessage : string
  isRegister : boolean = false;

  OnLogin(){
    console.log(this.email) 
    console.log(this.password) 
  }

  constructor(private _userService : UsersService) { }


  onCreateUser(){
    this._userService.saveUser({name: this.uname,email:this.email,password:this.password}).subscribe(responseData=>{
      console.log(responseData.user)
      if(responseData.user[0]._id){
        this.successMessage = responseData.message;
        this.isRegister = true;
        
      }
    })
  }

 
  ngOnInit(): void {
  }

}
