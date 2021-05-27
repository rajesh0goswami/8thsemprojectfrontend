import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import { map } from 'rxjs/operators'

import { Movie } from '../movie';
@Component({
  selector: 'app-showmovies',
  templateUrl: './showmovies.component.html',
  styleUrls: ['./showmovies.component.css']
})
export class ShowmoviesComponent implements OnInit {
  movies : Movie[];
  movie : Movie;


  constructor(private _movieService : MovieService) { }

  onDelete(movie:Movie):void{
    this._movieService.deleteMovie(movie).subscribe();
    // this.router.navigate(['posts']);
    window.location.reload();

  }

  ngOnInit(): void {
    
    this._movieService.getMovies().pipe(map(responseData=>{
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

}
