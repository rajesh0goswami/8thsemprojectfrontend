import { Component, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  movie_name : String

  
  

  SearchMovie(){
    console.log(this.movie_name)
    

  }

  constructor() { }

  ngOnInit(): void {
  }

}
