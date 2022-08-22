import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Facility } from '../models/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  empUrl = "/api/facility";
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Facility[]> {
    return this.http.get<Facility[]>(this.empUrl).pipe(
      tap(Facility => console.log("facility: " + JSON.stringify(Facility))),
      catchError(this.handleError<Facility[]>([]))
    );
  }

  private handleError<T>(result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      return of(result);
    }
}
    };