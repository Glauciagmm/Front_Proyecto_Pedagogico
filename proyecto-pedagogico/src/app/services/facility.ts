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
    //Busca la funcionalidad de encontar todos los servicios el backend 
    getFacilities(): Observable<Facility[]> {
        return this.http.get<Facility[]>(
        `${this.apiServerUrl}/api/facility/facilit`
        );
        
        }

    //Busca la funcionalidad de encontar un servico por su id en el backend 
    public idFacility(id: number): Observable<Facility> {
    return this.http.get<Facility>(
        `${this.apiServerUrl}/api/facility/${id}`
    );
    }

    //Busca la funcionalidad de encontar un servico por su id en el backend 
    getFacility(id: number): Observable<any> {
    return this.http
        .get(`${this.apiServerUrl}/api/facility/${id}`)
        .pipe(catchError(this.handleError));
    }

    //Busca la funcionalidad de actualisar un servicio en el backend 
    updateFacility(facility: Facility): Observable<any> {
    console.log(facility);
    
    return this.http.put<Facility>(
        `${this.apiServerUrl}/api/facility/edit`, facility
        )
        .pipe(catchError(this.handleError));
    }

    //Busca la funcionalidad de borrar un servicio en el backend 
    deleteFacility(id: number): Observable<any> {
    return this.http
        .delete<Facility>(
        `${this.apiServerUrl}/api/facility/delete/${id}`
        )
        .pipe(catchError(this.handleError));
    }

    //Busca la funcionalidad de añadir un nuevo servicio en el backend 
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
