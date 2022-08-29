import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcontractsComponent } from './allcontracts.component';

describe('AllcontractsComponent', () => {
  let component: AllcontractsComponent;
  let fixture: ComponentFixture<AllcontractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcontractsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllcontractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
