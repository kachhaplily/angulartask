import { Component, OnInit } from '@angular/core';
import { Roomlist } from './room';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css',

 ]
})
export class RoomComponent implements OnInit{

  roomlist:Roomlist[]=[];
  HotelName:string="Hilton Hotel"
  constructor(private roomservice:RoomsService){

  }

  ngOnInit(): void {
    this.roomlist=this.roomservice.getroom()

  }
  addRoom(){
    const room:Roomlist={
      roomnumber:6,
      roomtype:"delux room private",
      ameninites:"air conditioner,free wifi,breakfast",
      price:500,
      photos:"https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      checkin: new Date ('06-04-2023'),
      checkout: new Date ('07-04-2034')
    }
    // this.roomlist.push(room)
    this.roomlist=[...this.roomlist,room]
  }
}
