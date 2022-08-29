import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycontractsComponent } from './mycontracts.component';

describe('MycontractsComponent', () => {
  let component: MycontractsComponent;
  let fixture: ComponentFixture<MycontractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycontractsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MycontractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
