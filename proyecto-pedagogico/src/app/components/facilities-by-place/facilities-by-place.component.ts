import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facility } from 'src/app/models/facility';
import { User } from 'src/app/models/user';
import { FacilityService } from 'src/app/services/facility.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-facilities-by-place',
  templateUrl: './facilities-by-place.component.html',
  styleUrls: ['./facilities-by-place.component.css']
})
export class FacilitiesByPlaceComponent implements OnInit {
  public facility: Facility[] = [];
  private facility_assistant=Facility;
  private user? : User;
  city?:String;
  
  selectedFacility?: Facility;
  onSelect(facility: Facility): void {
  this.selectedFacility = facility;
  }

  constructor(public facilityService: FacilityService,private router: Router, public userService:UserService) {} 
  
  ngOnInit(): void {
    const city= history.state.city;
   this.getFacilitiesByCity(this.city);
 
  
 }

  getFacilitiesByCity(city:any): void {
    this.facilityService.getFacilitiesByUbication(city).subscribe((resp: any) => {
      this.facility = resp;
      console.log(this.facility);
    });
  }



}
