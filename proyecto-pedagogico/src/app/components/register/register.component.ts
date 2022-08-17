import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    name: null,
    surname:null,
    city:null,
    email: null,
    phone: null,
    photo:null,
    password: null,
    confirmPassword: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, public router:Router, private userService: UserService) { }
  ngOnInit(): void {
  }
  public getUserData(data:NgForm):void{

    const user : User = {
      name: data.value.name,
      surname: data.value.surname,
      username: data.value.username,
      city: data.value.city,
      phone: data.value.phone,
      photo: data.value.photo,
      password: data.value.password,
      email: data.value.email,
      confirmPassword: ""
    };

    console.log(user);
  }

  onSubmit(): void {
    const { username, email, password , city, name, surname, phone, photo} = this.form;

    this.authService.register(username, email, password, city, name, surname, phone).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
    this.router.navigate(['/login']);
  }
  public createUser(data:NgForm): void{
    const user : User = {
      name: data.value.name,
      surname: data.value.surname,
      username: data.value.username,
      city: data.value.city,
      phone: data.value.phone,
      photo: data.value.photo,
      password: data.value.password,
      email: data.value.email,
      confirmPassword: ""};
        console.log(data)
    this.userService.registerUser(user).subscribe({
      next: (response: User) => {
        console.log(user);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}