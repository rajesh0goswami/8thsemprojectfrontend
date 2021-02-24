import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private _baseUri = "http://localhost:8080/movie/"
  constructor(private _http : HttpClient) { }

  doSearch(){
    // return this._http.post< {message : string, movie: any } >(this._baseUri+'search',movie);
  }

 
}
