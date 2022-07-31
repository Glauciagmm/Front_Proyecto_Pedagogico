import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/json')
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any;
  getAuthStatus(){
    return this.http.get<any>('/api/auth/status');
  }
  
  isAuthenticated() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions).pipe(
      catchError((err) => {
        console.log('error caught in service-login')
        console.error(err);

        //Handle the error here

        return throwError(err);    //Rethrow it back to component
      }))
  }
  register(username: string, email: string, password: string, name: string, surname: string, city:string, phone: number): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
      name,
      surname,
      city, 
      phone
    }, httpOptions).pipe(
      catchError((err) => {
        console.log('error caught in service sign up')
        console.error(err);

        //Handle the error here

        return throwError(err);    //Rethrow it back to component
      }))
  }
 
  
}