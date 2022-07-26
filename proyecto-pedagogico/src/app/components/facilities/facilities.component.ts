import { Component, OnInit } from '@angular/core';
import { Facility } from 'src/app/model/facility';
import { FacilityService } from 'src/app/services/facility';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
<<<<<<< HEAD
public assistant: Facility[] = []; 
constructor(public facilityService: FacilityService, private router: Router) {}
=======
  public facility: Facility[] = [];

  selectedFacility?: Facility;
  onSelect(facility: Facility): void {
  this.selectedFacility = facility;
  }

  constructor(public facilityService: FacilityService, private router: Router) {}


>>>>>>> 5c4f774936bf93909f52743b4185af8fc6802405
  ngOnInit(): void {
    this.getFacilities();
  }
  getFacilities(): void {
    this.facilityService.getFacilities().subscribe((resp: any) => {
      this.facility = resp;
      console.log(this.facility);
    });
  }

/*   

  selectedFacility?: Facility;
  onSelect(assistant: Facility): void {
  this.selectedFacility = assistant;
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
  } */

}
