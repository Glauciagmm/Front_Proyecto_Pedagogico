import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contracts } from 'src/app/model/contracts';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
  public contracts: Contracts[] = [];

  selectedContract?: Contracts;
  onSelect(contracts: Contracts): void {
  this.selectedContract = contracts;
  }

  constructor(public contractsService: ContractService, private router: Router) {}


  ngOnInit(): void {
    this.getContracts();
  }
  getContracts(): void {
    this.contractsService.getContracts().subscribe((resp: any) => {
      this.contracts = resp;
      console.log(this.contracts);
    });
  }

  add(): void {
    this.router.navigate(["/contract-add"]);
  }

  delete(id: number): void {
    this.contractsService.deleteContract(id).subscribe(
      () => {
        this.getContracts();
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
