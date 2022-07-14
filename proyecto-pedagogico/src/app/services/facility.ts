import { Facility } from "../model/facility; 
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
        `${this.apiServerUrl}/api/assistant`
        );
        
        }

    //this one and the next should do the same thing - Find Facility by Id
    public idAssistant(id: number): Observable<Facility> {
    return this.http.get<Facility>(
        `${this.apiServerUrl}/api/assistant/${id}`
    );
    }

    getFacility(id: number): Observable<any> {
    return this.http
        .get(`${this.apiServerUrl}/api/assistant/${id}`)
        .pipe(catchError(this.handleError));
    }

    //Edit assitant
    updateFacility(assitant: Facility): Observable<any> {
    console.log(assitant);
    
    return this.http.put<Facility>(
        `${this.apiServerUrl}/api/assistant/edit`, assitant
        )
        .pipe(catchError(this.handleError));
    }

    //Delete assitant
    deleteFacility(id: number): Observable<any> {
    return this.http
        .delete<Facility>(
        `${this.apiServerUrl}/api/assistant/delete/${id}`
        )
        .pipe(catchError(this.handleError));
    }

    public addFacility(assitant: any): Observable<any> {
    console.log(assitant)
    return this.http
        .post<Facility>(
        `${this.apiServerUrl}/api/assistant/create`,
        assitant
        )
        .pipe(catchError(this.handleError));
    }


}
