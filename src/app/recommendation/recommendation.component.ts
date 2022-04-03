import { Component, OnInit } from '@angular/core';

import {MovieService} from '../movie.service';
import { map } from 'rxjs/operators'
import {Input,Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { UsersService } from '../users.service';
import { User } from '../user'
import { Movie } from '../movie';


@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  movie:Movie
  user:User
  History:any=[]
  userName:string
  public userid : string;
  email:string
  password:string
  role:string
  Genre:String
  revinue:number

  constructor(private _userService : UsersService,private _movieService : MovieService,private _activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this._userService.currentuserId.subscribe(uid => this.userid = uid);
    console.log(" uid from reommendations "+this.userid);
    this._userService.getUserById(this.userid).pipe(map(responseData=>{
      this.History = responseData.user.History
      this.userName=responseData.user.username
      this.email=responseData.user.email
      this.password=responseData.user.password
      this.role=responseData.user.role
    })).subscribe();

    console.log(this.History)
    console.log(this.userName)
    
  }
s
  

}
