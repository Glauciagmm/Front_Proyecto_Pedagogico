import { User } from 'src/app/models/user';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({

        imports: [HttpClientTestingModule],
        providers: [ UserService ]
      });
      service = TestBed.inject(UserService);
      httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

//   it('getUserContent() is a GET request and returns data', () => {
//     const contentUsers: User = {
//         id: 1,
//         name: "hola",
//         surname: "hola",
//         email: "hola",
//         username: "hola",
//         password: "hola",
//         city: "hola",
//         phone: 123,
//         photo: "hola",
//         confirmPassword: "hola"
//     }

//     service.getUser().subscribe((res) => {
//       expect(res).toEqual(contentUsers);
//     });

//     const req = httpMock.expectOne('http://localhost:8080/uniquecare/user');
//     expect(req.request.method).toEqual("GET");
//     req.flush(contentUsers);

//     httpMock.verify();
//   });
});