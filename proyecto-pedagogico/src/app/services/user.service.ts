import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from "rxjs";
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
   //this one and the next should do the same thing - Find user by Id
   public idUser(): Observable<User> {
    return this.http.get<User>(`${API_URL}/user/`);
  }
  
  getUser(id: number): Observable<any> {
    return this.http
      .get(`${API_URL}/user/${id}`)
      .pipe(catchError(this.handleError));
  }

 
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}/user`);
  }



  getCurrentUserDetails(): Observable<any> {
    return this.http
      .get(`${API_URL}/currentuser`)
      .pipe(catchError(this.handleError));
  }


  //Edit user
  updateUser(id: number, user: User): Observable<any> {
    return this.http
      .put<User>(`${API_URL}/user/edit/${id}`, user)
      .pipe(catchError(this.handleError));
  }

  //Delete user
  deleteUser(id: number): Observable<any> {
    return this.http
      .delete<User>(`${API_URL}/user/delete/${id}`)
      .pipe(catchError(this.handleError));
  }

}

/* import { Injectable } from "@angular/core";

// Import HttpClient and add it to constructor
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';


import { User } from './../models/user';

const API_URL= 'http://localhost:8080/api';
@Injectable({providedIn:"root"})
export class UserService{
private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }

  private extractData(res: Response): any {
    const body = res;
    return body || {};
  }

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
    console.log("User Services");
  }
  getUser(): Observable<User[]> {
    return this.http.get<User[]>('${this.apiServerUrl}/api/user');
    /*let header = new HttpHeaders()
        .set('Type-content', 'aplication/json')
      return this.http.get(this.apiServerUrl, {
        headers:header});*/
 

  //this one and the next should do the same thing - Create a new user
 
  /*public registerUser(user:User):Observable<User>{
      return this.http.post<User>(`${this.apiServerUrl}/petvacation/users/save`, user);
    }*/
