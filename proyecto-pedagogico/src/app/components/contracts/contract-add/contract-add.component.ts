import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contract } from '../../../models/contract';
import { ContractService } from '../../../services/contract.service';
import { TokenStorageService } from '../../../services/token-storage.service';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-contract-add',
  templateUrl: './contract-add.component.html',
  styleUrls: ['./contract-add.component.css'],
})
export class ContractAddComponent implements OnInit {
  // totalHours (s: number) {
  //   let ms = s % 1000;
  //   s = (s - ms) / 1000;
  //   let secs = s % 60;
  //   s = (s - secs) / 60;
  //   let mins = s % 60;
  //   s = (s - mins)/60
  //   let hrs = s % 24;
  //   s = (s -hrs)/24;
  //   return 'Time left: '+ hrs + 'h, ' + mins + 'm, ';
  // }

  time: number | any;
  hours: number | any;
  days: number | any;


  finish: Date | any = new Date(2022-12-22);
  start: Date | any= new Date(2022-12-20);
  
  timeInterval = 'start/finish';

  getTime(){
    
    this.time = Math.abs(this.finish - this.start)/365;
    
  }
  //(this.finish - this.start)/360000; 
  
    // this.days = this.time/(1000 * 3600 * 24);

    //  console.log(this.days);

  //  var hours = Math.abs(this.start - this.finish) / 36e5;
  currentUser: any;

  selectedContract?: Contract;
  onSelect(contract: Contract): void {
    this.selectedContract = contract;
  }

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

   this.getTime();
   console.log(this.time);
   

  }

    //  var hours = Math.abs(this.start - this.finish) / 36e5;
    // const range = moment.range(timeInterval);

  // createContract(): void {
  //   this.contractService.addContract(this.contract).subscribe(
  //     (result) => {
  //       this.router.navigate(['/contract-details/' + result.id]);
  //       console.log(result);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

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
