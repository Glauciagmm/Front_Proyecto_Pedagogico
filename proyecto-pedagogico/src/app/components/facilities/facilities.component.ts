import { Component, OnInit } from '@angular/core';

import { FacilityService } from 'src/app/services/facility.service'; 
import { Router } from '@angular/router';
import { Facility } from 'src/app/models/facility';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
  public facility: Facility[] = [];

  selectedFacility?: Facility;
  onSelect(facility: Facility): void {
  this.selectedFacility = facility;
  }

  constructor(public facilityService: FacilityService, private router: Router) {}


  ngOnInit(): void {
    this.getFacilities();
  }
  getFacilities(): void {
    this.facilityService.getFacilities().subscribe((resp: any) => {
      this.facility = resp;
      console.log(this.facility);
    });
  }







  add(): void {
    this.router.navigate(["/facility-add"]);
  }

  delete(id: number): void {
    this.facilityService.deleteFacility(id).subscribe(
      () => {
        this.getFacilities();
      },
      (err) => {
        console.log(err);
      }
    );
  } 

}
