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
  user: User | any;
  constructor(
    private token: TokenStorageService,
    private userService: UserService,
    ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getUserById(this.currentUser.id);
  }

  getCurrentUserDetails(): void {
    this.userService.getCurrentUserDetails().subscribe((resp: any) => {
      this.user = resp;
      console.log(this.user);
    });
  }

  getUserById(user:any): void {
    this.userService.getUser(user).subscribe((resp: any) => {
      this.user = resp;
      console.log(this.user);
    });
  }

}

