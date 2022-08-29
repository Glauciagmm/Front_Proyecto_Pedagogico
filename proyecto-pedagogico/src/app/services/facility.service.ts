import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Facility } from '../models/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  updateFacility(Facility: Facility) {
    throw new Error('Method not implemented.');
  }
  updatefacilities(Facility: Facility) {
    throw new Error('Method not implemented.');
  }
  getAllFacility() {
    throw new Error('Method not implemented.');
  }
  static getFacilities() {
    throw new Error('Method not implemented.');
  }
  static apiServerUrl: string;
  getFacilities() {
    throw new Error('Method not implemented.');
  }
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
  getFacility(...args: []): Observable<Facility[]> {
    return this.http.get<Facility[]>(
      `${this.apiServerUrl}/api/facility/list`
    );

  }

//Busca la funcionalidad de encontar un servico por su id en el backend 
public idContract(id: number): Observable<Facility> {
return this.http.get<Facility>(
  `${this.apiServerUrl}/api/facility/${id}`
);
}
//Busca la funcionalidad de encontar un servico por su id en el backend 
getContract(id: number): Observable<any> {
  return this.http
      .get(`${this.apiServerUrl}/api/contract/${id}`)
      .pipe(catchError(this.handleError));
  }

//Busca la funcionalidad de actualisar un servicio en el backend 
  updateContract(Facility: Facility): Observable<any> {
  console.log(Facility);
  
  return this.http.put<Facility>(
      `${this.apiServerUrl}/api/facility/edit`, Facility
      )
      .pipe(catchError(this.handleError));
  }
  //Busca la funcionalidad de borrar un servicio en el backend 
  deleteContract(id: number): Observable<any> {
    return this.http
        .delete<Facility>(
        `${this.apiServerUrl}/api/contract/delete/${id}`
        )
        .pipe(catchError(this.handleError));
    }

    //Busca la funcionalidad de añadir un nuevo servicio en el backend 
    public addContract(FacilityService: any): Observable<any> {
    console.log(FacilityService)
    return this.http
        .post<Facility>(
        `${this.apiServerUrl}/api/facility/add`,
        FacilityService
        )
        .pipe(catchError(this.handleError));
    }


}