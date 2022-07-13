import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any;
  getAuthStatus(){
    return this.http.get<any>('/api/auth/status').pipe(catchError(this.handleError));
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

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    let serverError: string ='';
    if (error.status === 0) {
      serverError=`A server-side or network error occurred:${error.error.status}`;
      
      
      // console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      // console.error(
      //   `Backend returned code ${error.status}, body was: `, error.error);
        serverError=  `Backend returned code ${error.status}, body was:${error.error}`;
    }
    serverError+='\n The backend returned an unsuccessful response code.';
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(serverError));
  }
}