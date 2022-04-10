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
  mname:String[]=[]
  idarr:String[]=[]
  movies : Movie[];
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
    console.log("from recommendation")
    console.log(this.History)
    console.log(this.userName)



    this._movieService.getMovies().pipe(map(responseData=>{
      console.log(responseData.movie[0].moviename)
      var len=responseData.movie.length;
      for (var i = 0; i < len; i++) {
        this.mname.push(responseData.movie[i].moviename);
      }
      for (var i = 0; i < len; i++) {
        this.idarr.push(responseData.movie[i]._id);
      }
      
      console.log(this.idarr);
      return responseData.movie.map(movie=>{
        return {
          id : movie._id,
          moviename : movie.moviename,
          description:movie.description,
          imglink:movie.imglink,
          releasedate:movie.releasedate,
          showtime:movie.showTime,
          price:movie.price
        }
      })
    })).subscribe(changedData=>{
      console.log(this.movies);
      this.movies = changedData;
    });
    
  }
s
  

}
