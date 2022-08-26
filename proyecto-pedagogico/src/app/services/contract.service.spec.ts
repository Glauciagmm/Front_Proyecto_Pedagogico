import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { createSpyFromClass,Spy } from 'jasmine-auto-spies';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Contract } from '../models/contract';
import { ContractService } from './contract.service';

//Testing of EmployeeService
describe('ContractService', () => {
  // let httpSpy: Spy<HttpClient>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let contractService: ContractService;

  beforeEach( () => {
    //Configures testing app module
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ContractService,
       // { provide: HttpClient, useValue: createSpyFromClass(HttpClient) }
      ]
    });

    //Instantiates HttpClient, HttpTestingController and ContractService
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    contractService = TestBed.inject(ContractService);
    // httpSpy = TestBed.inject<any>(HttpClient);
  });

  afterEach( () => {
    httpTestingController.verify(); //Verifies that no requests are outstanding.
  });

  describe('#getContracts', () => {
    let expectedContracts: Contract[];

    beforeEach(() => {
      //Dummy data to be returned by request.
      expectedContracts = [
        { id: 101, start: 'Krishna' , finish: 'tomorrow'},
        { id: 102, start: 'Arjun' , finish: 'wednesday'},
      ] as Contract[];
    });
    
    //Test case 1
    it('should return expected contracts by calling once', () => {
      contractService.getContracts().subscribe(
        econtracts => expect(econtracts).toEqual(expectedContracts, 'should return expected contracts'),
        fail
      );

      const req = httpTestingController.expectOne(contractService.apiServerUrl+"/api/contract");
      expect(req.request.method).toEqual('GET');

      req.flush(expectedContracts); //Return expectedEmps
    });
    
    //Test case 2
    it('should be OK returning no contract', () => {
      contractService.getContracts().subscribe(
        econtracts => expect(econtracts.length).toEqual(0, 'should have empty contract array'),
        fail
      );

      const req = httpTestingController.expectOne(contractService.apiServerUrl+"/api/contract");
      req.flush([]); //Return empty data
    });
    
    //Test case 3
    it('should return expected contracts when called multiple times', () => {
      contractService.getContracts().subscribe();
      contractService.getContracts().subscribe(
        econtracts => expect(econtracts).toEqual(expectedContracts, 'should return expected employees'),
        fail
      );

      const requests = httpTestingController.match(contractService.apiServerUrl+"/api/contract");
      expect(requests.length).toEqual(2, 'calls to getContracts()');

      requests[0].flush([]); //Return Empty body for first call
      requests[1].flush(expectedContracts); //Return expectedContracts in second call
    });
  });
  describe('#updateContracts', () => {
    
    let fakeContract: Contract[] = [
      {
        id: 1,
        start: "today",
        finish: "tomorrow",
        totalPrice: 15,
      
        facility: {
          id: 1,
          title: "ayuda a domicilio",
          description: "ayuda en la compra",
          pricePerHour: 10,
          assistant: {
            id: 1,
            photo: "string",
            name: "Anastasio",
            city: "Madrid",
          }
        }
      }
    ];
  
  
    it('should update a contract with given contract id', () => {
  
      var contract = fakeContract[0];
      contract.start = "Updated Contract";
  
      // httpSpy.put.and.nextWith(contract);
  
      contractService.updateContract(contract).subscribe(
        contract => {
          expect(contract.start).toEqual("Updated Contract"),
         fail
        }
      );

      const req = httpTestingController.expectOne(contractService.apiServerUrl+"/api/contract/edit");
      expect(req.request.method).toEqual('PUT');

      req.flush(contract); //Return expectedEmps

      // expect(httpSpy.put.calls.count()).toBe(1);
    });
  });

});