import { CardComponent } from './components/assistants/card/card.component';
import { FacilityEditComponent } from './components/assistants/facility-edit/facility-edit.component';
import { FacilityAddComponent } from './components/assistants/facility-add/facility-add.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { FacilityDetailComponent } from './components/assistants/facility-detail/facility-detail.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/login/login.component';
import { ClientComponent } from './components/clients/client/client.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardUserComponent } from './components/board-user-component/board-user-component';
import { BoardFacilityComponent } from './components/assistants/board-facility-component/board-facility-component';
import { BoardAdminComponent } from './components/admin/board-admin-component/board-admin-component';
import { authInterceptorProviders } from './helpers/helpers';
import { GlobalErrorHandler } from './helpers/globlal.error.handling';
import { ErrorIntercept } from './helpers/error.interceptor';
import { MycontractsComponent } from './components/contracts/mycontracts/mycontracts.component'; 
import { ContractAddComponent } from './components/contracts/contract-add/contract-add.component';
import { NextjobsComponent } from './components/contracts/nextjobs/nextjobs.component';
import { AllusersComponent } from './components/admin/allusers/allusers.component'; 
import { AllcontractsComponent } from './components/admin/allcontracts/allcontracts.component'; 
import { AllfacilitiesComponent } from './components/admin/allfacilities/allfacilities.component';
import { NavlateralComponent } from './components/navlateral/navlateral.component';
import { RegisterComponent } from './components/register/register.component';
import { FacilitiesByPlaceComponent } from './components/facilities-by-place/facilities-by-place.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    FacilitiesComponent,
    FacilitiesByPlaceComponent,
    FacilityAddComponent,
    FacilityDetailComponent,
    FacilityAddComponent,
    FacilityEditComponent,
    CardComponent,
    ClientComponent,
    ProfileComponent,
    BoardUserComponent,
    BoardFacilityComponent,
    BoardAdminComponent,
    MycontractsComponent,
    ContractAddComponent,
    NextjobsComponent,
    AllusersComponent,
    AllcontractsComponent,
    AllfacilitiesComponent,
    NavlateralComponent,
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],

  providers: [
    authInterceptorProviders,

    { provide: ErrorHandler, useClass: GlobalErrorHandler, },

    { provide: HTTP_INTERCEPTORS, useClass: ErrorIntercept, multi: true },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
