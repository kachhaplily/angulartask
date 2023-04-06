import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomtblComponent } from './roomtbl.component';

describe('RoomtblComponent', () => {
  let component: RoomtblComponent;
  let fixture: ComponentFixture<RoomtblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomtblComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomtblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
