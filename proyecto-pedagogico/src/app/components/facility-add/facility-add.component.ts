import { TokenStorageService } from './../../services/token-storage.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacilityService } from 'src/app/services/facility.service'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-facility-add',
  templateUrl: './facility-add.component.html',
  styleUrls: ['./facility-add.component.css']
})
export class FacilityAddComponent implements OnInit {

  currentUser: any;

 formFacility: FormGroup | any;
  
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  
  constructor(
    private facilityService: FacilityService,
    private route: ActivatedRoute,
    private token : TokenStorageService,
    private router: Router) {}

  ngOnInit(): void {
    this.formFacility = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      pricePerHour: new FormControl('', [Validators.required]),
    });

    this.currentUser = this.token.getUser();
    console.log(this.currentUser);
  }

  createFacility(): void{
    this.facilityService.addFacility(this.formFacility.value).subscribe((result)=>{
    this.router.navigate(['facility-details/' + result._id]);
    },
    (err)=>{
      console.log(err);
    }
    );
  }

}

