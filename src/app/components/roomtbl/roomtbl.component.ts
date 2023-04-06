import { Component, Input, OnInit } from '@angular/core';
import { Roomlist } from '../room/room';

@Component({
  selector: 'app-roomtbl',
  templateUrl: './roomtbl.component.html',
  styleUrls: ['./roomtbl.component.css',
  "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
]
})
export class RoomtblComponent implements OnInit {
  @Input() room_list:Roomlist[]=[];
  roomHeading:string[]=[];


  ngOnInit(): void {
    this.roomHeading=Object.keys(this.room_list[0]);
    console.log(this.roomHeading)
  }
  selectroom(item:Roomlist){
    console.log(item)

  }
}
