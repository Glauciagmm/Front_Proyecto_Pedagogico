import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Facility } from '../models/facility';
import { FacilityService } from './facility.service';

//Testing of EmployeeService
describe('FacilityService', () => {
  // let httpSpy: Spy<HttpClient>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let FacilityService: FacilityService;

  beforeEach( () => {
    //Configures testing app module
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        FacilityService,
       // { provide: HttpClient, useValue: createSpyFromClass(HttpClient) }
      ]
    });

    //Instantiates HttpClient, HttpTestingController and FacilityService
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    FacilityService = TestBed.inject(ContractService);
    // httpSpy = TestBed.inject<any>(HttpClient);
  });

  afterEach( () => {
    httpTestingController.verify(); //Verifies that no requests are outstanding.
  });

  describe('#getFacility', () => {
    let expectedFacility: Facility[];

    beforeEach(() => {
      //Dummy data to be returned by request.
      const expectedFacility = [
        { id: 101, name: 'Krishna', surname: 'tomorrow' },
        { id: 102, name: 'Arjun', surname: 'wednesday' },
      ] as unknown as Facility[];
    });
    
    //Test case 1
    it('should return expected facility by calling once', () => {
      FacilityService.getFacility(id).subscribe(
        efacilities => expect(efacilities).toEqual(expectedFacility, 'should return expected Facility'),
        fail
      );

      const req = httpTestingController.expectOne(FacilityService.apiServerUrl+"/api/facility");
      expect(req.request.method).toEqual('GET');

      req.flush(expectedFacility); //Return expectedEmps
    });
    
    //Test case 2
    it('should be OK returning no facility', () => {
      FacilityService.getFacility().subscribe(
        efacilities => expect(efacilities.length).toEqual(0, 'should have empty contract array'),
        fail
      );

      const req = httpTestingController.expectOne(FacilityService.apiServerUrl+"/api/contract");
      req.flush([]); //Return empty data
    });
    
    //Test case 3
    it('should return expected Facility when called multiple times', () => {
      FacilityService.getFacility().subscribe();
      FacilityService.getFacility().subscribe(
        efacilities => expect(efacilities).toEqual(expectedFacility, 'should return expected employees'),
        fail
      );

      const requests = httpTestingController.match(FacilityService.apiServerUrl+"/api/contract");
      expect(requests.length).toEqual(2, 'calls to getFacility()');

      requests[0].flush([]); //Return Empty body for first call
      requests[1].flush(expectedFacility); //Return expectedFacility in second call
    });
  });
  describe('#updateFacilities', () => {
    
    let fakeFacilities: Facility[] = [
      {
        start:"Hola",
        title:"Ejemplo",
        description:"Pequeño",
        pricePerHour:22,
        category:"Grande",
        assistant: {
          id: 1,
          name: "Anastasio",
          surname: "Madrid",
          photo: "Madrid",
          email: "Madrid",
          username: "Madrid",
          city: "Madrid",
          phone: "65723992",
        }
      }
      
    ];

  
  
    it('should update a facility with given facility id', () => {
  
      var Facility = fakeFacilities[0];
      Facility.start = "Updated Facility";
  
      // httpSpy.put.and.nextWith(Facility);
  
      FacilityService.updateContract( Facility).subscribe(
        Facility => {
          expect(Facility.start).toEqual("Updated Facility"),
         fail
        }
      );

      const req = httpTestingController.expectOne(FacilityService.apiServerUrl+"/api/contract/edit");
      expect(req.request.method).toEqual('PUT');

      req.flush(FacilityService); //Return expectedEmps

      // expect(httpSpy.put.calls.count()).toBe(1);
    });
  });

});




function ContractService(ContractService: any): FacilityService {
  throw new Error('Function not implemented.');
}

