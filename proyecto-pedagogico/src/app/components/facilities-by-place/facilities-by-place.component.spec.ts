import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitiesByPlaceComponent } from './facilities-by-place.component';

describe('FacilitiesByPlaceComponent', () => {
  let component: FacilitiesByPlaceComponent;
  let fixture: ComponentFixture<FacilitiesByPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilitiesByPlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilitiesByPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
