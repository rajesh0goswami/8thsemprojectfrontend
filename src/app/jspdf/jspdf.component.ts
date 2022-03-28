import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import {Input,Output} from '@angular/core';
import { Ticket } from '../ticket'
@Component({
  selector: 'app-jspdf',
  templateUrl: './jspdf.component.html',
  styleUrls: ['./jspdf.component.css']
})
export class JspdfComponent implements OnInit {

 @Input('booked_seats') public booked_seats;
 @Input('amount') public amount;
 @Input('count') public cnt;
 @Input('showtime') public  showtime;
 @Input('moviename') public  moviename;
 @Input('releasedate') public releasedate;
 tk:any
 qrInfo:any
 
// tk={
//   "Movie name":"this.mname",
//   'Show Time ':"this.time",
//   'Show Date' :"this.date",
//   'Price' : "this.date"
// }


 
  
  constructor() { 
  
  }

  ngOnInit(): void {
    
  }
  downloadPDF():void{
    console.log("download....");
    console.log(this.moviename);
    console.log(this.booked_seats);
    this.tk={
      "Movie name":this.moviename,
      'Show Time ':this.showtime,
      'Show Date' :this.releasedate,
      'Price' : this.amount,
      "booked_seats": this.booked_seats
    }
    this.qrInfo = JSON.stringify(this.tk);
  }

}
