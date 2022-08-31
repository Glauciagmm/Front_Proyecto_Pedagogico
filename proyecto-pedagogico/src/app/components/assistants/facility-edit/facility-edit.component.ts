import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { FacilityService } from '../../../services/facility.service';  

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  currentUser: any;
  @Input() facilityData: any = {
    id: '',
    title: '',
    description: '',
    pricePerHour:'',
    categoryId:'',
    user: [],
  }

  constructor(public facilityService: FacilityService, 
              private route: ActivatedRoute, 
              private router: Router,
             private token : TokenStorageService,) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.facilityService.getFacility(this.route.snapshot.params['id']).subscribe((data: {})=>{
      this.facilityData = data;
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
        this.getFacility();
        this.router.navigate(['facility-board/facilityA']);
      },
      (err) => {
      }
    );
  }

  getFacility() {
    throw new Error('Method not implemented.');
  }
  
}
