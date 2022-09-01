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
<<<<<<< HEAD
  currentUser: any;
  @Input() facilityData: any = {
=======

  @Input() facilityEdit: any = {
>>>>>>> 62b6b732502bcb1761fa9ea2b63d0fd1a4ba2120
    id: '',
    title: '',
    description: '',
    pricePerHour:'',
<<<<<<< HEAD
    categoryId:'',
    user: [],
=======
    categoryId: '',
>>>>>>> 62b6b732502bcb1761fa9ea2b63d0fd1a4ba2120
  }

  constructor(public facilityService: FacilityService, 
              private route: ActivatedRoute, 
              private router: Router,
             private token : TokenStorageService,) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.facilityService.getFacility(this.route.snapshot.params['id']).subscribe((data: {})=>{
      this.facilityEdit = data;
    });
  }

  updateFacility(): void {
    console.log(this.facilityEdit)
    this.facilityService.updateFacility(this.facilityEdit).subscribe((result)=>{
      this.router.navigate(['/facility-detail/',result._id]);
    }, (err)=>{
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
