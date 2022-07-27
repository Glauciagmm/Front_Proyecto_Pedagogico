import { ComponentFixture, TestBed } from '@angular/core/testing';


import { FacilityDetailComponent } from './facility-detail.component';

describe('FacilityDetailComponent', () => {
  let component: FacilityDetailComponent;
  let fixture: ComponentFixture<FacilityDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityDetailComponent);
  });
});
