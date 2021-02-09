import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  selected:boolean[]=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]



  constructor() {
    
  }
    
  enableDisableRule(i) {
    console.log(i)
    this.selected[i] = !this.selected[i];
    // for (var index in this.selected) 
    // {
    //   console.log(this.selected[index])
    // }
  }
    


  ngOnInit(): void {
    
   

  }

}
