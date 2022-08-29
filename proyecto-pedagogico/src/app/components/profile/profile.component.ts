import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  currentUser: any;
  public user: User | undefined;
  constructor(
    private token: TokenStorageService,
    private userService: UserService,
    ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser);
  }

  getCurrentUserDetails(): void {
    this.userService.getCurrentUserDetails().subscribe((resp: any) => {
      this.user = resp;
      console.log(this.user);
    });
  }
}

