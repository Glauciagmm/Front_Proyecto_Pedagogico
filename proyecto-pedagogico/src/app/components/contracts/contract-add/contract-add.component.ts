import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contract } from '../../../models/contract';
import { ContractService } from '../../../services/contract.service';
import { TokenStorageService } from '../../../services/token-storage.service';
import { interval, timer } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-contract-add',
  templateUrl: './contract-add.component.html',
  styleUrls: ['./contract-add.component.css'],
})
export class ContractAddComponent implements OnInit {
  totalPrice: number | any = 0;  
  @Input() finish: String | any = "";
  @Input() start: String | any= "";

  currentUser: any;

  selectedContract?: Contract;

  @Input() contractData = {
    id: 0,
    start: "",
    finish: "",
    totalPrice: 0,
  
    facility: {
      id: 0,
      title: "",
      description: "",
      pricePerHour: 0,
      assistant: {
        id: 0,
        photo: "",
        name: "",
        city: "",
      }
    }
  }

  constructor(
    public contractService: ContractService,
    private route: ActivatedRoute,
    private token: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
   this.currentUser = this.token.getUser();
  }

  getTotalPrice(){
    console.log("Onchange");
    
  
    let start = moment(this.start);
    let  finish = moment(this.finish); 
    
    let  duration = moment.duration(finish.diff(start));
    let  time = duration.asHours();
    this.contractData.totalPrice = time * this.contractData.facility.pricePerHour;   
    // console.log(this.totalPrice);
    // console.log(this.inicio);
    
    //return this.contractData.totalPrice;     
  }

  onSelect(contract: Contract): void {
    this.selectedContract = contract;
  }

  sendContractRequest(): void {
    this.contractService.addContract(this.contractData).subscribe(
      (result) => {
        this.router.navigate(['/facility-details/' + result._id]);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
