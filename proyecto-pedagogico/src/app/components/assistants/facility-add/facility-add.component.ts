import { Facility } from '../../../models/facility';
import { TokenStorageService } from '../../../services/token-storage.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacilityService } from '../../../services/facility.service'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-facility-add',
  templateUrl: './facility-add.component.html',
  styleUrls: ['./facility-add.component.css']
})
export class FacilityAddComponent implements OnInit {
// facility:Facility = new Facility();
currentUser: any;
//   formFacility: FormGroup | any;
//   isSuccessful = false;
//   isSignUpFailed = false;
//   errorMessage = '';
 
  @Input() facility = {
    id:"",
    title: "",
    description:"",
    pricePerHour: "",
    categoryId: "",
  };

  constructor(
    private facilityService: FacilityService,
    private route: ActivatedRoute,
    private token : TokenStorageService,
    private router: Router) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }


  createFacility(): void{
    this.facilityService.addFacility(this.facility).subscribe(
      (result)=>{
    this.router.navigate(['/facility-details/' + result.id]);
    console.log(result)
    },
    (err)=>{
      console.log(err);
    }
    );
  }

}

