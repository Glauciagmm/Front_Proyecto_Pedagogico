import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { createSpyFromClass,Spy } from 'jasmine-auto-spies';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Contract } from '../models/contract';
import { ContractService } from './contract.service';

//Testing of EmployeeService
describe('ContractService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let contractService: ContractService;

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ContractService,
      ]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    contractService = TestBed.inject(ContractService);
  });

  afterEach( () => {
    httpTestingController.verify(); 
  });

  describe('#getContracts', () => {
    let expectedContracts: Contract[];

    beforeEach(() => {
      expectedContracts = [
        { id: 101, start: 'Krishna' , finish: 'tomorrow'},
        { id: 102, start: 'Arjun' , finish: 'wednesday'},
      ] as Contract[];
    });
    
    it('should return expected contracts by calling once', () => {
      contractService.getContracts().subscribe(
        econtracts => expect(econtracts).toEqual(expectedContracts, 'should return expected contracts'),
        fail
      );

      const req = httpTestingController.expectOne(contractService.apiServerUrl+"/api/contract");
      expect(req.request.method).toEqual('GET');

      req.flush(expectedContracts);
    });
    

    it('should be OK returning no contract', () => {
      contractService.getContracts().subscribe(
        econtracts => expect(econtracts.length).toEqual(0, 'should have empty contract array'),
        fail
      );

      const req = httpTestingController.expectOne(contractService.apiServerUrl+"/api/contract");
      req.flush([]);
    });
    
    it('should return expected contracts when called multiple times', () => {
      contractService.getContracts().subscribe();
      contractService.getContracts().subscribe(
        econtracts => expect(econtracts).toEqual(expectedContracts, 'should return expected employees'),
        fail
      );

      const requests = httpTestingController.match(contractService.apiServerUrl+"/api/contract");
      expect(requests.length).toEqual(2, 'calls to getContracts()');

      requests[0].flush([]); 
      requests[1].flush(expectedContracts); 
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
  
  
      contractService.updateContract(contract).subscribe(
        contract => {
          expect(contract.start).toEqual("Updated Contract"),
         fail
        }
      );

      const req = httpTestingController.expectOne(contractService.apiServerUrl+"/api/contract/edit");
      expect(req.request.method).toEqual('PUT');

      req.flush(contract); 
    });
  });

});