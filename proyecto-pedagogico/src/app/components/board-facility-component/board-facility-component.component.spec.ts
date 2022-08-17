import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardFacilityComponent } from './board-facility-component';

describe('BoardFacilityComponentComponent', () => {
  let component: BoardFacilityComponent;
  let fixture: ComponentFixture<BoardFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardFacilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
