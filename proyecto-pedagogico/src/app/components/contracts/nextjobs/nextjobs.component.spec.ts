import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextjobsComponent } from './nextjobs.component';

describe('NextjobsComponent', () => {
  let component: NextjobsComponent;
  let fixture: ComponentFixture<NextjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextjobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
