import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facility } from 'src/app/models/facility';
import { FacilityService } from 'src/app/services/facility.service';

@Component({
  selector: 'app-allfacilities',
  templateUrl: './allfacilities.component.html',
  styleUrls: ['./allfacilities.component.css']
})
export class AllfacilitiesComponent implements OnInit {
  
  @Input() facilityData: any = {
    id: '',
    title: '',
    description: '',
    user: [],
  }

  public facility: Facility[] = [];

  selectedFacility?: Facility;
  onSelect(facility: Facility): void {
    this.selectedFacility = facility;
  }

  constructor(
    public facilityService: FacilityService, private router: Router
  ) { }

  ngOnInit(): void {
    this.getFacilities();

  }
  getFacilities(): void {
    this.facilityService.getFacilities().subscribe((resp: any) => {
      this.facility = resp;
      console.log(this.facility);
    });
  }

  updateFacility(): void {
    console.log(this.facilityService)
    this.facilityService.updateFacility(this.facilityData).subscribe((result)=>{
      this.router.navigate(['/facility-detail/',result._id]);
    }, (err)=>{
      console.log(err);
    });
  }

  deleteFacility(id: number): void {
    this.facilityService.deleteFacility(id).subscribe(
      () => {
        this.getFacilities();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

}
