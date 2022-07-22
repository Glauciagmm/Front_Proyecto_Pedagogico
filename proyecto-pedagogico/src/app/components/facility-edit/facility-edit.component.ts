import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacilityService } from 'src/app/services/facility';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {

  @Input() facilityData: any = {
    id: null,
    title: '',
    description: '',
    user: [],
  }

  constructor(public facilityService: FacilityService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
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

}
