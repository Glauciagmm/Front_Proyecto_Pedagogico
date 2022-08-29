import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contract } from '../../../models/contract';
import { ContractService } from '../../../services/contract.service';
import { TokenStorageService } from '../../../services/token-storage.service';

@Component({
  selector: 'app-contract-add',
  templateUrl: './contract-add.component.html',
  styleUrls: ['./contract-add.component.css']
})
export class ContractAddComponent implements OnInit {

  currentUser: any;

  selectedContract?: Contract;
  onSelect(contract: Contract): void {
    this.selectedContract = contract;
  }
 
  @Input() contract = {
    id:"" ,
    start: "" ,
    finish: "" ,
    totalPrice: "" ,
    state: "" ,
  };
  constructor(
    public contractService: ContractService, 
    private route: ActivatedRoute,
    private token : TokenStorageService,
    private router: Router) {}

  
  ngOnInit(): void {
    this.currentUser = this.token.getUser();

  }

  createContract(): void{
    this.contractService.addContract(this.contract).subscribe(
      (result)=>{
    this.router.navigate(['/contract-details/' + result.id]);
    console.log(result)
    },
    (err)=>{
      console.log(err);
    }
    );
  }
}
