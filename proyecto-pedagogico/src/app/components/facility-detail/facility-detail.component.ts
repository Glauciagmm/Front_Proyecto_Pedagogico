import { FacilityService } from '../../services/facility.service'; 
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Facility } from '../../models/facility';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-facility-detail',
  templateUrl: './facility-detail.component.html',
  styleUrls: ['./facility-detail.component.css']
})
export class FacilityDetailComponent implements OnInit {

  facility!: Facility;
  //facilityId: String="0";
  facilityId: any=null;

  selectedFacility?: Facility;
  onSelect(facility: Facility): void{
    this.selectedFacility = facility;
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
    public facilityService: FacilityService,
    private route: ActivatedRoute,
    private router: Router,
    private Location: Location,
    private contractService: ContractService
  ) {}



  ngOnInit(): void {
    this.facilityId=(this.Location.path().toString().replace("/facility-details?id=",""))
    this.getFacility(this.facilityId);
  }

  getFacility(facilityId:any):void{
    this.facilityService.getFacility(facilityId).subscribe({
      next: (resp: Facility)=>{
        this.facility = resp;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
  addContract():void{
    this.contractService.addContract(this.contractData).subscribe((result)=>{
      this.router.navigate([`/facility-detail`, result._id]);
    },
    (err)=>{
      console.log(err);
    }
    );

  }

  removeFacility(id: number) {
    this.facilityService.deleteFacility(id).subscribe(
      () => {
        this.getFacility(id);
      },
      (error) => {
        console.log(error);
      },
    );
  }

}
