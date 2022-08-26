import { Component, OnInit } from '@angular/core';
import { CategoryServices } from '../../services/category.service'; 
import { ActivatedRoute,Router } from '@angular/router';
import { FacilityService } from '../../services/facility.service'; 
import { Facility } from 'src/app/models/facility';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-board-facility-component',
  templateUrl: './board-facility-component.html',
  styleUrls: ['./board-facility-component.css']
})
export class BoardFacilityComponent implements OnInit {

  public facility: Facility[] = [];
  private facility_assistant=Facility;
  private user? : User;
  public userId?:Number;
/*   city?:String;
  categoryId?:Number; */

  selectedFacility?: Facility;
  onSelect(facility: Facility): void {
  this.selectedFacility = facility;
  }
  constructor(public facilityService: FacilityService,private router: Router, public userService:UserService,private token: TokenStorageService) {} 
  ngOnInit(): void {
    this.user = this.token.getUser();
    console.log(this.user);
    const assistantId=this.user?.id;
   this.getFacilitiesByAssistantId(assistantId);

 }
 

getFacilitiesByAssistantId(assistantId:any): void {
  this.facilityService.getFacilitiesByAssistantId(assistantId).subscribe((resp: any) => {
    this.facility = resp;
    console.log(this.facility);
  });
}

}




  

/* getFacilitiesByCategory(categoryId:any): void {
 
  this.facilityService.getFacilitiesByCategory(categoryId).subscribe((facil) => {
    this.facil.push(...facil.filter(facilit=>facilit.category===categoryId)); 
   this.facil=facil;
  });
}  */

