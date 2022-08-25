import { FacilityService } from '../../services/facility.service'; 
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Facility } from '../../models/facility';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-facility-detail',
  templateUrl: './facility-detail.component.html',
  styleUrls: ['./facility-detail.component.css']
})
export class FacilityDetailComponent implements OnInit {

  facility!: Facility;
  facilityId: any=null;

  selectedFacility?: Facility;
  onSelect(facility: Facility): void{
    this.selectedFacility = facility;
  }
    constructor(
    public facilityService: FacilityService,
    private route: ActivatedRoute,
    private router: Router,
    private Location: Location
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

}
