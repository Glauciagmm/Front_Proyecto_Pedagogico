import { Component, OnInit } from '@angular/core';
import { FacilityService } from 'src/app/services/facility.service';
import { Router } from '@angular/router';
import { Facility } from 'src/app/models/facility';


@Component({
  selector: 'app-board-user-component',
  templateUrl: './board-user-component.html',
  styleUrls: ['./board-user-component.css']
})
export class BoardUserComponent implements OnInit {
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

}
