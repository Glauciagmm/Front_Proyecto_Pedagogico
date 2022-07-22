import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
/* import { Facility } from 'src/app/model/facility';
import { FacilityService } from '../../services/'; */
=======
import { Facility } from 'src/app/model/facility';
import { FacilityService } from 'src/app/services/facility';
>>>>>>> 40256761abf193676b6603bb5d5665e36a0479a6
import { Router } from '@angular/router';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
<<<<<<< HEAD
/*   public assistant: Facility[] = [];
=======
  public assistant: Facility[] = [];
>>>>>>> 40256761abf193676b6603bb5d5665e36a0479a6

  selectedFacility?: Facility;
  onSelect(assistant: Facility): void {
  this.selectedFacility = assistant;
  }

<<<<<<< HEAD
  constructor(public facilityService: FacilityService, private router: Router) {} */


  ngOnInit(): void {
    // this.getFacilities();
  }/* 
=======
  constructor(public facilityService: FacilityService, private router: Router) {}


  ngOnInit(): void {
    this.getFacilities();
  }
>>>>>>> 40256761abf193676b6603bb5d5665e36a0479a6
  getFacilities(): void {
    this.facilityService.getFacilities().subscribe((resp: any) => {
      this.assistant = resp;
      console.log(this.assistant);
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
<<<<<<< HEAD
  } */
=======
  }
>>>>>>> 40256761abf193676b6603bb5d5665e36a0479a6

}
