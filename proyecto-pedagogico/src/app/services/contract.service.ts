import { Contract } from './../models/contract';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response): any {
    const body = res;
    return body || {};
  }

  public apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
    console.log('Oferred Services');
  }
  
  //Encuentra todos los contractos de la Base de datos
  getContracts(): Observable<Contract[]> {
    return this.http.get<Contract[]>(`${this.apiServerUrl}/contract/list`);
  }
  
  //Encuentra un contracto por su Id
  public idContract(id: number): Observable<Contract> {
    return this.http.get<Contract>(`${this.apiServerUrl}/contract/${id}`);
  }
  
  //Encuentra un contracto por su Id
  getContract(id: number): Observable<any> {
    return this.http
      .get(`${this.apiServerUrl}/contract/${id}`)
      .pipe(catchError(this.handleError));
  }

  //Encuentra las solicitudes de contracto recibidas por un assistente
  getUserRequest(): Observable<any> {
    return this.http
      .get(`${this.apiServerUrl}/contract/request/`)
      .pipe(catchError(this.handleError));
  }

  //Encuentra las solicitudes de contracto enviadas por un cliente
  getClientRequest(): Observable<any> {
    return this.http
      .get(`${this.apiServerUrl}/contract/clientrequest/`)
      .pipe(catchError(this.handleError));
  }

  //Permite a un cliente actualizar los datos de una solicitud no contestada por un assistente
  updateContract(Contract: Contract): Observable<any> {
    console.log(Contract);

    return this.http
      .put<Contract>(`${this.apiServerUrl}/contract/edit`, Contract)
      .pipe(catchError(this.handleError));
  }

  //Permite al cliente eliminar un contracto que no haya sido acceptado por un assistente
  deleteContract(id: number): Observable<any> {
    return this.http
      .delete<Contract>(`${this.apiServerUrl}/contract/delete/${id}`)
      .pipe(catchError(this.handleError));
  }

  //Permite que se pueda enviar una solicitud de contracto
  addContract(Contract: any): Observable<any> {
    console.log(Contract);
    return this.http
      .post<Contract>(`${this.apiServerUrl}/requestcontract`, Contract)
      .pipe(catchError(this.handleError));
  }

  //Campia el estado de una solicitud de Abierta a Acceptada
  acceptContract(id: number): Observable<any> {
    console.log(id);
    return this.http
      .put<Contract>(`${this.apiServerUrl}/acceptcontract/${id}`, id)
      .pipe(catchError(this.handleError));
  }

  //Campia el estado de una solicitud de Abierta a Declinada
  declineContract(id: number): Observable<any> {
    console.log(id);
    return this.http
      .put<Contract>(`${this.apiServerUrl}/acceptcontract/${id}`, id)
      .pipe(catchError(this.handleError));
  }
  
}
