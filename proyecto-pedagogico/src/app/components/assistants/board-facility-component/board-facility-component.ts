import { Component, OnInit } from '@angular/core';
import { CategoryServices } from '../../../services/category.service'; 
import { ActivatedRoute,Router } from '@angular/router';
import { FacilityService } from '../../../services/facility.service'; 
import { Facility } from 'src/app/models/facility';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-board-facility-component',
  templateUrl: './board-facility-component.html',
  styleUrls: ['./board-facility-component.css']
})
export class BoardFacilityComponent implements OnInit {

currentUser: any;
public facility: Facility[] = [];
selectedFacility?: Facility;

onSelect(facility: Facility): void {
  this.selectedFacility = facility;
}

constructor(
  public facilityService: FacilityService, 
  private router: Router,
  private token : TokenStorageService,
) { }

ngOnInit(): void {
  this.currentUser = this.token.getUser();
  this.getFacilitiesByAssistant();
}

getFacilitiesByAssistant(): void {
    this.facilityService.getAssitantFacilities().subscribe((resp: any) => {
      this.facility = resp;
      console.log(this.facility);
});
}

addFacility(): void {
  this.router.navigate(["/facility-add"]);
}

deleteFacility(id: number): void {
  this.facilityService.deleteFacility(id).subscribe({

    next: response => {
      console.log(`Deleted Facility with ID: ${id}`)
      this.refresh();
    },
    error: (error: HttpErrorResponse) => {
      alert(error.message);
    }
  });
}

refresh(): void {
  window.location.reload();
 }

}



  

