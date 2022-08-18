import { Injectable } from "@angular/core";

// Import HttpClient and add it to constructor
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { catchError, map, Observable, throwError } from "rxjs";
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
  }

  //this one and the next should do the same thing - Create a new user
  public registerUser(user: User): Observable<User> {
    return this.http.post<User>(
      `${this.apiServerUrl}/api/user/save`,
      user
    );
  }

  public createUser(user: any): Observable<any> {
    return this.http
      .post<User>(`${this.apiServerUrl}/api/user/save`, user)
      .pipe(catchError(this.handleError));
  }

  //this one and the next should do the same thing - Find user by Id
  public idUser(): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/api/user/`);
  }
  getuser(id: number): Observable<any> {
    return this.http
      .get(`${this.apiServerUrl}/api/user/${id}`)
      .pipe(catchError(this.handleError));
  }

  //Edit user
  updateUser(id: number, user: User): Observable<any> {
    return this.http
      .put<User>(`${this.apiServerUrl}/api/user/${id}`, user)
      .pipe(catchError(this.handleError));
  }

  //Delete user
  deleteUser(id: number): Observable<any> {
    return this.http
      .delete<User>(`${this.apiServerUrl}/api/user/delete/${id}`)
      .pipe(catchError(this.handleError));
  }

  /*public registerUser(user:User):Observable<User>{
      return this.http.post<User>(`${this.apiServerUrl}/petvacation/users/save`, user);
    }*/

  public removeUser(user: User): Observable<User> {
    return this.http.post<User>(
      `${this.apiServerUrl}/api/user/delete/username`,
      user
    );
  }

}