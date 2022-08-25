import { FacilityService } from 'src/app/services/facility.service'; 
import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
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
  facilityId: string="0";

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
    this.getFacility();
  }

  getFacility():void{
    this.facilityService.getFacility(Number(this.facilityId)).subscribe({
      next: (resp: Facility)=>{
        this.facility = resp;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  removeFacility(id: number) {
    this.facilityService.deleteFacility(id).subscribe(
      () => {
        this.getFacility();
      },
      (error) => {
        console.log(error);
      },
    );
  }

}
