import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacilityService } from '../../services/facility.service'; 
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  let service: FacilityService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      providers: [FacilityService]
    })
    .compileComponents();
    service = TestBed.get(FacilityService);
    httpMock = TestBed.get(HttpTestingController);

  });
  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should get facilities', () => {
  //   const response : string  = 'testing';
  //   service.getFacilities().subscribe((res) => {
  //   expect(res).toEqual(response);
  //   });

  //   const req = httpMock.expectOne('http://localhost:8080/api/facility/list');
  //   expect(req.request.method).toEqual("GET");
  //   req.flush(response);

  //   httpMock.verify();
  // });
});
