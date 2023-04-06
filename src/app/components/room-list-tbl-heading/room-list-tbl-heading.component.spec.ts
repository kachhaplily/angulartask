import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomListTblHeadingComponent } from './room-list-tbl-heading.component';

describe('RoomListTblHeadingComponent', () => {
  let component: RoomListTblHeadingComponent;
  let fixture: ComponentFixture<RoomListTblHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomListTblHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomListTblHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
