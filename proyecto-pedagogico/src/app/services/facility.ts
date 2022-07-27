import { Facility } from "../model/facility"; 
import { Injectable } from "@angular/core";

// Import HttpClient and add it to constructor
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { catchError, map, Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FacilityService {
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
        console.log("Oferred Services");
    }

    getFacilities(): Observable<Facility[]> {
        return this.http.get<Facility[]>(
        `${this.apiServerUrl}/api/facility`
        );
        
        }

    //this one and the next should do the same thing - Find facility by Id
    public idFacility(id: number): Observable<Facility> {
    return this.http.get<Facility>(
        `${this.apiServerUrl}/api/facility/${id}`
    );
    }

    getFacility(id: number): Observable<any> {
    return this.http
        .get(`${this.apiServerUrl}/api/facility/${id}`)
        .pipe(catchError(this.handleError));
    }

    //Edit facility
    updateFacility(facility: Facility): Observable<any> {
    console.log(facility);
    
    return this.http.put<Facility>(
        `${this.apiServerUrl}/api/facility/edit`, facility
        )
        .pipe(catchError(this.handleError));
    }

    //Delete facility
    deleteFacility(id: number): Observable<any> {
    return this.http
        .delete<Facility>(
        `${this.apiServerUrl}/api/facility/delete/${id}`
        )
        .pipe(catchError(this.handleError));
    }

    public addFacility(facility: any): Observable<any> {
    console.log(facility)
    return this.http
        .post<Facility>(
        `${this.apiServerUrl}/api/facility/create`,
        facility
        )
        .pipe(catchError(this.handleError));
    }


}
