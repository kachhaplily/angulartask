import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-list-tbl-heading',
  templateUrl: './room-list-tbl-heading.component.html',
  styleUrls: ['./room-list-tbl-heading.component.css',
]
})
export class RoomListTblHeadingComponent implements OnInit{
@Input() tabelhead:string[]=[];
  ngOnInit(): void {
 this.tabelhead.push("Action")
  }

}
