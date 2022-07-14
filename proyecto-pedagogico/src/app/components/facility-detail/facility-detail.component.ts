import { FacilityService } from '../../services/facility';
import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Facility } from 'src/app/model/facility';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-facility-detail',
  templateUrl: './facility-detail.component.html',
  styleUrls: ['./facility-detail.component.css']
})
export class FacilityDetailComponent implements OnInit {

  facility!: Facility;
  facilityID: string="0";

  selectedFacility?: Facility;
  onSelect(facility:Facility): void{
    this.selectedFacility = facility;
  }


  constructor(
    public facilityService: FacilityService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.facilityService.getFacility(Number(this.facilityID)).subscribe({
      next: (resp: Facility)=>{
        this.facility = resp;
      },
      error:(error: HttpErrorResponse)=>{
        alert(error.message);
      },
    })
  }

}
