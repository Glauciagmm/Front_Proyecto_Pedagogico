import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Contract } from '../models/contract';
import { ContractService } from './contract.service';

//Testing of EmployeeService
describe('ContractService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let contractService: ContractService;

  beforeEach(() => {
    //Configures testing app module
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ContractService
      ]
    });

    //Instantiates HttpClient, HttpTestingController and ContractService
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    contractService = TestBed.inject(ContractService);
  });

  afterEach(() => {
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
});