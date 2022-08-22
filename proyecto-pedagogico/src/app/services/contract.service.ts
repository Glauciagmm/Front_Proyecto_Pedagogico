import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contract } from '../models/contract';

@Injectable({
  providedIn: 'root'
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

public apiServerUrl = environment.apiBaseUrl;

constructor(private http: HttpClient) {
    console.log("Oferred Services");
}
//Busca la funcionalidad de encontar todos los servicios el backend 
getContracts(): Observable<Contract[]> {
  return this.http.get<Contract[]>(
  `${this.apiServerUrl}/api/contract`
  );
  
  }
getContrac(): Observable<Contract[]> {
    return this.http.get<Contract[]>(
    `${this.apiServerUrl}/api/contract/list`
    );
    
    }

//Busca la funcionalidad de encontar un servico por su id en el backend 
public idContract(id: number): Observable<Contract> {
return this.http.get<Contract>(
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
  updateContract(Contract: Contract): Observable<any> {
  console.log(Contract);
  
  return this.http.put<Contract>(
      `${this.apiServerUrl}/api/contract/edit`, Contract
      )
      .pipe(catchError(this.handleError));
  }
  //Busca la funcionalidad de borrar un servicio en el backend 
  deleteContract(id: number): Observable<any> {
    return this.http
        .delete<Contract>(
        `${this.apiServerUrl}/api/contract/delete/${id}`
        )
        .pipe(catchError(this.handleError));
    }

    //Busca la funcionalidad de añadir un nuevo servicio en el backend 
    public addContract(Contract: any): Observable<any> {
    console.log(Contract)
    return this.http
        .post<Contract>(
        `${this.apiServerUrl}/api/contract/add`,
        Contract
        )
        .pipe(catchError(this.handleError));
    }


}
