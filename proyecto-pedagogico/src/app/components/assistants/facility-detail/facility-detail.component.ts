import { FacilityService } from '../../../services/facility.service';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Facility } from '../../../models/facility';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from 'src/app/services/contract.service';
import * as moment from 'moment';
import { Contract } from 'src/app/models/contract';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-facility-detail',
  templateUrl: './facility-detail.component.html',
  styleUrls: ['./facility-detail.component.css'],
})
export class FacilityDetailComponent implements OnInit {
  totalPrice: number | any = 0;

  currentUser: any;

  selectedContract?: Contract;
  name!: string;
  facility!: Facility;
  facilityId: String = '0';
  //facilityId: any=null;

  selectedFacility?: Facility;
  onSelect(facility: Facility, contract: Contract): void {
    this.selectedFacility = facility;
    this.selectedContract = contract;
  }

  finish1: Date = new Date();
  start1: Date = new Date();

  MY_MOMENT_FORMATS = {
  parseInput: 'DD/MM/YYYY HH:mm:ss',
  fullPickerInput: 'DD/MM/YYYY HH:mm:ss',
  datePickerInput: 'DD/MM/YYYY',
  timePickerInput: 'HH:mm:ss',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY',
  }

  @Input() finish: String | any = '';
  @Input() start: String | any = '';

  @Input() contractData = {
    id: '',
    start: '',
    finish: '',
    totalPrice: 0,

    facility: {
      id: '',
      title: '',
      description: '',
      pricePerHour: 0,
      assistant: {
        id: '',
        photo: '',
        name: '',
        city: '',
      },
    },
  };

  constructor(
    public facilityService: FacilityService,
    private route: ActivatedRoute,
    private router: Router,
    private Location: Location,
    private contractService: ContractService,
    private token: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.facilityId = this.Location.path().toString().replace('/facility-details?id=', '');
    // this.facilityService.getFacility(this.route.snapshot.params['id']);
    this.getFacility(this.facilityId);
  }

  logdate(date: any){
    console.log(date);
    
  }

  getFacility(facilityId: any): void {
    this.facilityService.getFacility(facilityId).subscribe({
      next: (resp: Facility) => {
        this.facility = resp;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  getTotalPrice() {
    console.log('Onchange');

    let start = moment(this.start);
    console.log(start);
    
    let finish = moment(this.finish);
    console.log(finish);
    
    let duration = moment.duration(finish.diff(start));
    let time = duration.asHours();
    this.contractData.totalPrice = time * this.contractData.facility.pricePerHour;
    // console.log(this.totalPrice);
    // console.log(this.inicio);
    //return this.contractData.totalPrice;
  }

  SendDataonChange(event: any) {
    console.log(event.target.value);
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
  // addContract():void{
  //   this.contractService.addContract(this.contractData).subscribe((result)=>{
  //     this.router.navigate(["/facility-details/" + result._id]);
  //   },
  //   (err)=>{
  //     console.log(err);
  //   }
  //   );

  // }

  removeFacility(id: number) {
    this.facilityService.deleteFacility(id).subscribe(
      () => {
        this.getFacility(id);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // timeResult (hours: number){
  //   this.contractData.finish
  //   this.contractData.start
  // }
}
