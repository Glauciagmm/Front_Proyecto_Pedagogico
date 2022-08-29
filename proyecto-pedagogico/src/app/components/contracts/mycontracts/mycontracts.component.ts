import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contract } from '../../../models/contract';
import { ContractService } from '../../../services/contract.service';

@Component({
  selector: 'app-mycontracts',
  templateUrl: './mycontracts.component.html',
  styleUrls: ['./mycontracts.component.css']
})
export class MycontractsComponent implements OnInit {

  public contract: Contract[] = [];

  public userGetRequest: any;

  selectedFacility?: Contract;
  onSelect(contract: Contract): void {
    this.selectedFacility = contract;
  }

  constructor(
    public contractService: ContractService, private router: Router
  ) { }

  ngOnInit(): void {
    this.getContract();
    this.getUser();
  }

  getUser(): void {
    this.contractService.getUserRequest().subscribe((resp: any) => {
      console.log(resp);
      this.userGetRequest = resp;
    });
  }

  getContract(): void {
    this.contractService.getContracts().subscribe((resp: any) => {
      this.contract = resp;
    });
  }

  addContract(): void {
    this.router.navigate(["/contract-add"]);
  }

  acceptContract(id:number): void {
    this.contractService.acceptContract(id).subscribe((resp: any)=>{
      this.contract = resp;
    });
    this.router.navigate(["/nextjobs"]);
  }

  //mirar que hacer para que desaparezca la solicitud
  declineContract(id:number): void {
    this.contractService.declineContract(id).subscribe((resp: any)=>{
      this.contract = resp;
    });
    this.router.navigate(["/nextjobs"]);
  }

  delete(id: number): void {
    this.contractService.deleteContract(id).subscribe(
      () => {
        this.getContract();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  

}
