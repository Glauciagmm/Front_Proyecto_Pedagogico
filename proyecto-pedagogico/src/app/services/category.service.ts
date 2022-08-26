
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { catchError, map, Observable, throwError } from "rxjs";
import { Categories } from "..//models/categories";
import { Facility} from "..//models/facility"; 
export class CategoryServices{

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

    public getAllFacilitiesByCategoryName(name: String): Observable<Facility> {
        return this.http.get<Facility>(
            `${this.apiServerUrl}/api/category/${name}/facilities`
        );
    }
    
    public getAllFacilitiesByCategoryId(id: number): Observable<any> {
        return this.http
        .get<Categories>(
            `${this.apiServerUrl}/api/category/${id}/facilities`)
        .pipe(catchError(this.handleError));
    }

    public getAllFacilitiesByUbication(city:String):Observable<any>{
        return this.http.get<Facility>(`
        ${this.apiServerUrl}/api/category/${city}/facilities`)
        .pipe(catchError(this.handleError))
    }
    

}
