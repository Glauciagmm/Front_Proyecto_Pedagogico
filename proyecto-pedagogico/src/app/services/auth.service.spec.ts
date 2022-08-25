import { HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { AuthService } from './auth.service';

describe('Test "AuthService"', () => {
  let service: AuthService;
  let httpClientSpy: {
      get: any; post: jasmine.Spy 
};

  beforeEach(() => { 
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new AuthService(httpClientSpy as any);
  });

  //Crear 
  it('Debe de crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  //Retornar objeto del usuario
  it('Debe retornar objeto usuario (Login Correcto)', (done: DoneFn) => {

    //Mock de datos

    const mockUserCredentials = {
      username: 'patri',
      password: '12345678'
    }

    const mockResultLogin = {
        "data": {
          "id": 2,
          "user": "Patri"
        }
      }
  
      //Observable
  
      httpClientSpy.post.and.returnValue(of(mockResultLogin)) 
  
      
      const { username, password } = mockUserCredentials
  
      service.login(username, password)
        .subscribe(resultado => {  
          expect(resultado).toEqual(mockResultLogin)
          done()
        })
  
    });
  
 
  
  });