import { Component, OnInit } from '@angular/core';
import { Facility } from '../../models/facility';
import { FacilityService } from '../../services/facility';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
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

  addFacility(): void {
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
