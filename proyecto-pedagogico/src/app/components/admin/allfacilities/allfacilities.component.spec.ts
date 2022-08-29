import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfacilitiesComponent } from './allfacilities.component';

describe('AllfacilitiesComponent', () => {
  let component: AllfacilitiesComponent;
  let fixture: ComponentFixture<AllfacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllfacilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllfacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
