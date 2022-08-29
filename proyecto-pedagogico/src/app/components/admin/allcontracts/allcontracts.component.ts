import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contract } from 'src/app/models/contract';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-allcontracts',
  templateUrl: './allcontracts.component.html',
  styleUrls: ['./allcontracts.component.css']
})
export class AllcontractsComponent implements OnInit {

  public contract: Contract[] = [];

  public userGetRequest: any;

  @Input() contractData: any = {
    id: null,
    start: '',
    finish: '',
    totalPrice:'',
    User:[]
  }

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
      console.log(resp);
    });
  }

  addContract(): void {
    this.router.navigate(["/contract-add"]);
  }

  acceptContract(): void {
    this.router.navigate(["/contract-add"]);
  }

  declineContract(): void {
    this.router.navigate(["/contract-add"]);
  }

  deleteContract(id: number): void {
    this.contractService.deleteContract(id).subscribe(
      () => {
        this.getContract();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  editContract(): void {
    console.log(this.contractService)
    this.contractService.updateContract(this.contractData).subscribe((result)=>{
      this.router.navigate(['/contract-detail/',result._id]);
    }, (err)=>{
      console.log(err);
    });
  }


}
