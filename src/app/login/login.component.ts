import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : String
  uname: String
  password : String
  LoginFailedMessage : string

 

  isLoggedInFailed : boolean = true;
  constructor(private _userService : UsersService , private _router : Router) { }

  OnLogin(){
    console.log(this.email) 
    console.log(this.password) 

    this._userService.doLogin({email:this.email, password : this.password}).subscribe(responseData=>{
      if(responseData.token!=''){
        console.log(responseData.token)  
        const token = responseData.token;
          const userName = responseData.user.userName;
          localStorage.setItem('token',token);
          localStorage.setItem('userName',userName);
         
          this._router.navigate(['/']);
          window.alert("you are loged in")
      }else{
        this.LoginFailedMessage = responseData.message
        this.isLoggedInFailed = false
      }    
  })
  }

  

  ngOnInit(): void {
  }
  

}
