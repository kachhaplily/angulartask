import { Component, Input, OnInit ,Output,EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges} from '@angular/core';
import { Roomlist } from '../room/room';

@Component({
  selector: 'app-room-list-tbl',
  templateUrl: './room-list-tbl.component.html',
  styleUrls: ['./room-list-tbl.component.css',],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomListTblComponent implements OnInit,OnChanges{
@Input()tabeldata:Roomlist[]=[];
@Output() selectroom=new EventEmitter<Roomlist>

showdata(item:Roomlist){
  console.log(item)
  this.selectroom.emit(item)

}
ngOnChanges(changes: SimpleChanges): void {
  console.log(changes)
}
ngOnInit(): void {
}
}
