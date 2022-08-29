import { UserService } from 'src/app/services/user.service';
import { User } from './../../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facility } from 'src/app/models/facility';
import { FacilityService } from 'src/app/services/facility.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-board-admin-component',
  templateUrl: './board-admin-component.html',
  styleUrls: ['./board-admin-component.css']
})
export class BoardAdminComponent implements OnInit {

  currentUser: any;
  public facility: Facility[] = [];
  selectedFacility?: Facility;
  public user: User | undefined;
 
  
  onSelect(facility: Facility): void {
    this.selectedFacility = facility;
  }
  
  constructor(
    public facilityService: FacilityService, 
    private router: Router,
    private token : TokenStorageService,
    private userService: UserService,
  ) { }
  
  ngOnInit(): void {
    this.getFacilities();
    this.currentUser = this.token.getUser();
  
  }
  getFacilities(): void {
    this.facilityService.getFacilities().subscribe((resp: any) => {
      this.facility = resp;
      console.log(this.facility);
    });
  }
  
  addFacility(): void {
    this.router.navigate(["/facility-add"]);
  }
  
  delete(id: number): void {
    this.facilityService.deleteFacility(id).subscribe(
      () => {
        this.getFacilities();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getCurrentUserDetails(): void {
    this.userService.getCurrentUserDetails().subscribe((resp: any) => {
      this.user = resp;
      console.log(this.user);
    });
  }
  
  }
