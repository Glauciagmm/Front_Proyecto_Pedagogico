import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAdminComponentComponent } from './board-admin-component.component';

describe('BoardAdminComponentComponent', () => {
  let component: BoardAdminComponentComponent;
  let fixture: ComponentFixture<BoardAdminComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardAdminComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardAdminComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
