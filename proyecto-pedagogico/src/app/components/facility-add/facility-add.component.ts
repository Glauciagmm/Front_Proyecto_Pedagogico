import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacilityService } from 'src/app/services/facility';

@Component({
  selector: 'app-facility-add',
  templateUrl: './facility-add.component.html',
  styleUrls: ['./facility-add.component.css']
})
export class FacilityAddComponent implements OnInit {

  @Input() facilityData = {
    id:0,
    title: "",
    description: "",
    pricePerHour: 0,
    user: {
      id: 0,
      photo:"",
      name: "",
      city: "",
    }
  };

  

  constructor(
    public facilityService: FacilityService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
  }

  addFacility(): void{
    console.log(this.facilityData)
    this.facilityService.addFacility(this.facilityData).subscribe((result)=>{
      this.router.navigate([`/facility-detail`, result._id]);
    },
    (err)=>{
      console.log(err);
    }
    );
  }

}
