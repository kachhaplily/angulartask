import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './components/room/room.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomListTblComponent } from './components/room-list-tbl/room-list-tbl.component';
import { RoomListTblHeadingComponent } from './components/room-list-tbl-heading/room-list-tbl-heading.component';
import { RoomtblComponent } from './components/roomtbl/roomtbl.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    RoomListTblComponent,
    RoomListTblHeadingComponent,
    RoomtblComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
