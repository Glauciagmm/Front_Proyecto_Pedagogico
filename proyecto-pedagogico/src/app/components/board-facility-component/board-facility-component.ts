import { Component, OnInit } from '@angular/core';
import { CategoryServices } from '../../services/category.service'; 
import { ActivatedRoute,Router } from '@angular/router';
import { FacilityService } from '../../services/facility.service'; 
import { Facility } from 'src/app/models/facility';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-board-facility-component',
  templateUrl: './board-facility-component.html',
  styleUrls: ['./board-facility-component.css']
})
export class BoardFacilityComponent implements OnInit {

  public facility: Facility[] = [];
  private facility_assistant=Facility;
  private user? : User;
/*   city?:String;
  categoryId?:Number; */

  selectedFacility?: Facility;
  onSelect(facility: Facility): void {
  this.selectedFacility = facility;
  }
  constructor(public facilityService: FacilityService,private router: Router, public userService:UserService) {} 
  ngOnInit(): void {
    const categoryId= history.state.categoryId;
    const assistanId=history.state.assistantId;
    if(categoryId){
      this.getFacilitiesByCategory(categoryId);
    }else{
   this.getFacilitiesByAssistantId(assistanId);
    console.log(assistanId)
  }
 }
 
 getFacilitiesByCategory(categoryId:any): void {
  this.facilityService.getFacilitiesByCategory(categoryId).subscribe((resp: any) => {
    this.facility = resp;
    console.log(this.facility);
  });
}
getFacilitiesByAssistantId(assistantId:any): void {
  this.facilityService.getFacilitiesByAssistantId(assistantId).subscribe((resp: any) => {
    this.user = resp;
    console.log(this.user);
  });
}





delete(id: number): void {
  this.facilityService.deleteFacility(id).subscribe(
  
  );
} 
}



  // if(!categoryId||!city){
  //   this.facilityService.getFacilities().subscribe((resp: any) => {
  //     this.facility = resp;
  //     console.log(this.facility);
  //   });
  // }  else if(categoryId){
  //   this.facilityService.getFacilitiesByCategory(categoryId).subscribe((resp: any) => {
  //     this.facility = resp;
  //   });
  // }  else if(city){
      
  //   this.facilityService.getFacilitiesByUbication(city).subscribe((resp: any) => {
  //     this.facility = resp;
  //   });
  // }
  // }
  
/* 
getFacilitiesByCategory(categoryId:any): void {
 
  this.facilityService.getFacilitiesByCategory(categoryId).subscribe((facil) => {
   /*  this.facil.push(...facil.filter(facilit=>facilit.category===categoryId)); 
   this.facil=facil;
  });
} */

