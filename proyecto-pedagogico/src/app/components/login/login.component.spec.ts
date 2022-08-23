import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { LoginComponent } from './login.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthService: jasmine.SpyObj<AuthService>;
let router: Router;

  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj<AuthService>('AuthService', ['login']);
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[RouterTestingModule, FormsModule, ReactiveFormsModule],
      providers: [{provide: AuthService, useValue: mockAuthService}],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],

    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it ('should have a label with class username for the username field', ()=>{
    const el = fixture.debugElement.query(By.css('.username-label'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('for')).toEqual('username');
  });
  it ('should display Nombre de usuario on the label for the username field', ()=>{
    const el = fixture.debugElement.query(By.css('.username-label'));
    expect(el.nativeElement.innerText).toEqual('Nombre de usuario');
  })
  it ('should have an input element with class form-control for the username field', ()=>{
    const el = fixture.debugElement.query(By.css('input.form-control'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('type')).toEqual('text');
    expect(el.nativeElement.getAttribute('name')).toEqual('username');
  })

});
