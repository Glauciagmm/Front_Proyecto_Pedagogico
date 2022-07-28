import { Contracts } from "../model/contracts"; 
import { Facility } from "../model/facility";
import { Injectable } from "@angular/core";

// Import HttpClient and add it to constructor
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { catchError, map, Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ContractService {
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
    getContracts(): Observable<Contracts[]> {
        return this.http.get<Contracts[]>(
        `${this.apiServerUrl}/api/contract`
        );
        
        }

    //Busca la funcionalidad de encontar un servico por su id en el backend 
    public idContract(id: number): Observable<Contracts> {
    return this.http.get<Contracts>(
        `${this.apiServerUrl}/api/contract/${id}`
    );
    }

    //Busca la funcionalidad de encontar un servico por su id en el backend 
    getContract(id: number): Observable<any> {
    return this.http
        .get(`${this.apiServerUrl}/api/contract/${id}`)
        .pipe(catchError(this.handleError));
    }

    //Busca la funcionalidad de actualisar un servicio en el backend 
    updateContract(contracts: Contracts): Observable<any> {
    console.log(contracts);
    
    return this.http.put<Contracts>(
        `${this.apiServerUrl}/api/contract/edit`, contracts
        )
        .pipe(catchError(this.handleError));
    }

    //Busca la funcionalidad de borrar un servicio en el backend 
    deleteContract(id: number): Observable<any> {
    return this.http
        .delete<Contracts>(
        `${this.apiServerUrl}/api/contract/delete/${id}`
        )
        .pipe(catchError(this.handleError));
    }

    //Busca la funcionalidad de añadir un nuevo servicio en el backend 
    public addContract(contracts: any): Observable<any> {
    console.log(contracts)
    return this.http
        .post<Contracts>(
        `${this.apiServerUrl}/api/contract/create`,
        contracts
        )
        .pipe(catchError(this.handleError));
    }


}
