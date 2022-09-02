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

      catchError(this.handleError)
    );
  }

  register(name: string,surname: string,username: string, email: string, city:string,phone: string,photo:string, password: string,role: String[]): Observable<any> {

    return this.http.post(AUTH_API + 'signup', {
      name,
      surname,
      username,
      email,
      city, 
      phone,
      photo,
      password,
      role
    }, httpOptions).pipe(

      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    let serverError: string ='';
    if (error.status === 0) {
      serverError=`A server-side or network error occurred:${error.error.status}`;
    } else {
 
        serverError=  `Backend returned code ${error.status}, body was:${error.error.message}`;
    }
    serverError+='\n The backend returned an unsuccessful response code.';
    return throwError(() => new Error(serverError));

      catchError((err) => {
        console.log('error caught in service sign up')
        console.error(err);
        return throwError(err);    
      })

  }
 
  
}