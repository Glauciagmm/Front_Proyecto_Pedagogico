import { User } from 'src/app/models/user';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { UserService } from './user.service';
import { HttpClient, HttpResponse } from '@angular/common/http';

describe('UserService', () => {
  let httpClient: HttpClient;
  let service: UserService;
  let httpTestingController: HttpTestingController;
  let httpSpy: Spy<HttpClient>;
  beforeEach(() => {
    TestBed.configureTestingModule({

        imports: [HttpClientTestingModule],
        providers: [ UserService ]
      });
      httpClient = TestBed.inject(HttpClient);
      service = TestBed.inject(UserService);
      httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
/*
  it('should delete an existing user', (done: DoneFn) => {

    httpSpy.delete(1).and.nextWith(new HttpResponse ({
      status: 200
    }));

    service.deleteUser(1).subscribe(
      response => {
        expect(response.status).toEqual(200);
        done();
      },
      done.fail
    );
    expect(httpSpy.delete.calls.count()).toBe(1);
  });*/
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