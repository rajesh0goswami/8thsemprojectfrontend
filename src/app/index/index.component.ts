import { Component, OnInit,Input,Output } from '@angular/core';
import { Router } from '@angular/router';
import {MovieService} from '../movie.service';
import { map } from 'rxjs/operators'

import { Movie } from '../movie';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  movies : Movie[];
  movie : Movie;
  mname:String[]=[]
  idarr:String[]=[]
  movie_name : String
  public isLoggedIn : boolean = false;
  userName : string;
  notfound:boolean=false

  SearchMovie(){
    console.log(this.movie_name)
    if(this.mname.indexOf(this.movie_name)!=-1){
      console.log('found')
      let i= this.mname.indexOf(this.movie_name);
      let reqid=this.idarr[i]
      this._router.navigate(['/movie/'+reqid])
      
    }
    else{
      this.notfound=true;
      
      window.location.reload();
    }
    

  }

  constructor(private _movieService : MovieService, private _router : Router) { }

  ngOnInit(): void {

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




    this.userName=localStorage.getItem('userName');
    if(this.userName==null){
      this.isLoggedIn=false;
    }
    else{
      this.isLoggedIn=true;
    }
    console.log(this.isLoggedIn)
    console.log(this.userName)
  }
  change(){
    
    if(this.userName!='null'){
      this.isLoggedIn=true;
    }

  }
  onLogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.isLoggedIn = false;
    this._router.navigate(['/login'])
    window.alert("you loged out");

  }

}
