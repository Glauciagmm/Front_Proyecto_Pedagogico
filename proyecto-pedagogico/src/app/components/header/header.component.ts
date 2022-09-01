import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facility } from 'src/app/models/facility';
import { FacilityService } from 'src/app/services/facility.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public facility: Facility[] = [];
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  city:String="";




  constructor(private tokenStorageService: TokenStorageService, private http: HttpClient, public facilityService: FacilityService, private router: Router) { }
  ngOnInit(): void {
    this.getFacilities();
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_FACILITY');
      this.username = user.username;
    }
    
  }
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
  getFacilities(): void {
    this.facilityService.getFacilities().subscribe((resp: any) => {
      this.facility = resp;
      console.log(this.facility);
    });
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
