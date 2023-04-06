import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomListTblComponent } from './room-list-tbl.component';

describe('RoomListTblComponent', () => {
  let component: RoomListTblComponent;
  let fixture: ComponentFixture<RoomListTblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomListTblComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomListTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
