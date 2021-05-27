import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import { map } from 'rxjs/operators'
import {ActivatedRoute} from '@angular/router'
import { Movie } from '../movie';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies : Movie[];
  movie : Movie;
  moviename:String;
  price:String;
  id :string
  imglink:String;
  description:String;
  userName : string;
  constructor(private _movieService : MovieService,private _activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {

    this._activatedRouter.paramMap.subscribe(param=> this.id = (param.get('id')))
     console.log(this.id)

     if(this.id != null){
      this._movieService.getMovieById(this.id).pipe(map(responseData=>{
        this.moviename = responseData.movie.moviename
        console.log(this.moviename)
        this.price= responseData.movie.price
        this.description=responseData.movie.description
        this.imglink=responseData.movie.imglink
       
      })).subscribe();

   



    this.userName=localStorage.getItem('userName');
    // this._movieService.getMovies().pipe(map(responseData=>{
    //   console.log(responseData.movie);

    // })).subscribe()
    
    }

  }

}

