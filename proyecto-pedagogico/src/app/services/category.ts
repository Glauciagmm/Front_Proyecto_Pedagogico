import { Facility} from "../models/facility"; 
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { catchError, map, Observable, throwError } from "rxjs";
import { Categories } from "../models/categories";

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

    public getCategory(id: number): Observable<Categories> {
        return this.http.get<Categories>(
            `${this.apiServerUrl}/api/category/${id}`
        );
    }
    
    public getCategoryById(id: number): Observable<any> {
        return this.http
        .get<Categories>(
            `${this.apiServerUrl}/api/category/${id}`)
        .pipe(catchError(this.handleError));
    }
    

}
