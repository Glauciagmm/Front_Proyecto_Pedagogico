import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contract } from 'src/app/models/contract';
import { ContractService } from 'src/app/services/contract.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public contract: Contract[] = [];

  public clientGetRequest: any;

  selectedFacility?: Contract;
  onSelect(contract: Contract): void {
    this.selectedFacility = contract;
  }

  constructor(
    public contractService: ContractService, private router: Router
  ) { }

  ngOnInit(): void {
    this.getContract();
    this.getClient();
  }

  getClient(): void {
    this.contractService.getClientRequest().subscribe((resp: any) => {
      console.log(resp);
      this.clientGetRequest = resp;
    });
  }

  getContract(): void {
    this.contractService.getContracts().subscribe((resp: any) => {
      this.contract = resp;
      console.log(resp);
    });
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

  // updateContract(): void {
  //   console.log(this.contractService)
  //   this.contractService.updateContract().subscribe((result)=>{
  //     this.router.navigate(['/facility-detail/',result._id]);
  //   }, (err)=>{
  //     console.log(err);
  //   });
  // }


}
