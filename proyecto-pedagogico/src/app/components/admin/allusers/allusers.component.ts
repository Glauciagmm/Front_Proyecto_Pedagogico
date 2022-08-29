import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  public user: User[] = [];

  selectedUser?: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }

  constructor(
    public userService: UserService, private router: Router
  ) { }

  ngOnInit(): void {
    this.getUsers();

  }
  getUsers(): void {
    this.userService.getUsers().subscribe((resp: any) => {
      this.user = resp;
      console.log(this.user);
    });
  }

  editUser(): void {
    this.router.navigate(["/user-edit"]);
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(
      () => {
        this.getUsers();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

}
